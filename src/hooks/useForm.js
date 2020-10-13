import { useState } from 'react';
import { INITIAL_DATA } from '../constants';

const useForm = () => {
  const [formState, setFormState] = useState(INITIAL_DATA);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formState, null, 2));
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log('name => ', name);
    console.log('value => ', value);
    setFormState({ ...formState, [name]: value });
  };

  return {
    formState,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
