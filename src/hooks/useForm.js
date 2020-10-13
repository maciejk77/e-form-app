import { useState } from 'react';
import { INITIAL_DATA } from '../constants';

//   title: '',
//   description: '',
//   category_id: 0, => from redux?
//   paid_event: false,
//   event_fee: 0,
//   reward: 0,
//   duration: 0,
//   coordinator: { => from redux?
//     email: '',
//     id: '',
//   },

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
