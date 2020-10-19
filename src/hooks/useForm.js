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

      // not persisted though, just to illustrate normal Redux flow
      dispatch({ type: 'ADD_EVENT', payload: form });

      // persisting the form state after submission to localStorage
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
