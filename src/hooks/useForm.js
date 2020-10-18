import { useState } from 'react';
import { useSelector } from 'react-redux';
import { INITIAL_DATA } from '../constants';
import { removeTimeProp } from '../utils/format';

const useForm = (callback, format) => {
  const [form, setForm] = useState(INITIAL_DATA);
  const state = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();

    const output = removeTimeProp(form);
    console.log('--- SUBMITTED --- ', output);
    // persisting the form state after submission to localStorage

    localStorage.setItem('persisted-form', JSON.stringify(output));
    callback(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const formattedValue = format(state, name, value);
    setForm({ ...form, [name]: formattedValue });
  };

  return {
    form,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
