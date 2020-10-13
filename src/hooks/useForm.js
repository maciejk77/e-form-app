import { useState } from 'react';
import { INITIAL_DATA } from '../constants';

const useForm = () => {
  const [formState, setFormState] = useState(INITIAL_DATA);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('after submission => ', formState);
    // add to events array on redux
    // setFormState(INITIAL_DATA);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  return {
    formState,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
