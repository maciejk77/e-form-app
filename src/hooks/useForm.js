import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INITIAL_DATA } from '../constants';
import { removeTimeProp, getErrorMessages } from '../utils';

const useForm = (callback, format, validate) => {
  const [form, setForm] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    const formattedValue = format(state, name, value);
    setForm({ ...form, [name]: formattedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(getErrorMessages(form));
    const isValidated = validate(form);

    if (isValidated) {
      const output = removeTimeProp(form);
      console.log('--- SUBMITTED --- ', output);
      // persisting the form state after submission to localStorage

      dispatch({ type: 'ADD_EVENT', payload: form });

      localStorage.setItem('persisted-form', JSON.stringify(output));
      callback(true);
    }
  };

  return {
    form,
    handleChange,
    handleSubmit,
    errors,
  };
};

export default useForm;
