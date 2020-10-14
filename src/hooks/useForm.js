import { useState } from 'react';
import {
  INITIAL_DATA,
  COORDINATOR,
  RESPONSIBLE,
  DURATION,
  EVENT_FEE,
  REWARD,
  PAID_EVENT,
  TIME,
} from '../constants';

const useForm = () => {
  const [formState, setFormState] = useState(INITIAL_DATA);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const jsonParseValue = (value) => JSON.parse(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('after submission => ', formState);
    // TODO
    // add to events array on redux
    // setFormState(INITIAL_DATA);
  };

  const handleChange = (e) => {
    e.preventDefault();

    // See below for comments on implementation

    const { name, value } = e.target;

    const isCoordinator = name === COORDINATOR;
    const isResponsible = name === RESPONSIBLE;
    const isPaidEvent = name === PAID_EVENT;
    const isTime = name === TIME;

    if (isCoordinator) {
      const { email, id } = JSON.parse(value);

      return setFormState({
        ...formState,
        coordinator: { email, id: String(id) },
      });
    }

    if (isResponsible) {
      const { id } = JSON.parse(value);

      return setFormState({
        ...formState,
        category_id: id,
      });
    }

    if (isPaidEvent) {
      return setFormState({
        ...formState,
        paid_event: value,
      });
    }

    let newValue;
    [DURATION, EVENT_FEE, REWARD].includes(name)
      ? (newValue = Number(value))
      : (newValue = value);

    setFormState({
      ...formState,
      [name]: newValue,
    });
  };

  return {
    formState,
    handleChange,
    handleSubmit,
  };
};

export default useForm;

// TODO
// a) further refactor to cleaner switch
// b) store data as object for coordinator, responsible
//       and JSON.parse() to format required { email, id } or { id } on handleSubmit
// c) store on Redux, dispatch responsible, coordinator objects format on handleSubmit
// d) dropping useForm hook and have everything on Redux, not performant,
//       Redux state will update with every keystroke
