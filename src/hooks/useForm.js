import { useState } from 'react';
import { INITIAL_DATA } from '../constants';
import { useSelector } from 'react-redux';

const useForm = (callback, format) => {
  const [form, setForm] = useState(INITIAL_DATA);
  const state = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    callback(form);
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
