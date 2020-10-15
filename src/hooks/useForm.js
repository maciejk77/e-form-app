import { useState } from 'react';
import {
  INITIAL_DATA,
  COORDINATOR,
  RESPONSIBLE,
  DURATION,
  EVENT_FEE,
  REWARD,
  PAID_EVENT,
  // TIME,
  // DATE,
} from '../constants';

const useForm = (callback) => {
  const [form, setForm] = useState(INITIAL_DATA);
  // const [time, setTime] = useState('');

  let newValue;

  const handleSubmit = (e) => {
    e.preventDefault();

    // setForm({ ...form, date: `${form.date}T00:01` });
    // delete form.time;

    // merge time into date
    // remove time property from form
    console.log('after SUBMIT => ', form);
    setForm(INITIAL_DATA);
    callback(true);
  };

  const handleChange = (e) => {
    e.preventDefault();

    // See below for comments on implementation

    const { name, value } = e.target;
    console.log('name-value', name, value);
    const isCoordinator = name === COORDINATOR;
    const isResponsible = name === RESPONSIBLE;
    const isPaidEvent = name === PAID_EVENT;
    // const isTime = name === TIME;
    // const isDate = name === DATE;

    if (isCoordinator) {
      const { email, id } = JSON.parse(value);
      return setForm({
        ...form,
        coordinator: { email, id: String(id) },
      });
    }

    if (isResponsible) {
      const { id } = JSON.parse(value);
      return setForm({
        ...form,
        category_id: id,
      });
    }

    if (isPaidEvent) {
      console.log('paidEvent =>', String(value));
      return setForm({
        ...form,
        paid_event: String(value) === 'on' ? 'off' : 'on',
      });
    }

    // if (isTime) {
    //   setTime(time);
    // }

    // if (isDate) {
    //   return setForm({
    //     ...form,
    //     [name]: `${value}${time ? `T${time}` : 'T00:00'}`,
    //   });
    // }

    if ([DURATION, EVENT_FEE, REWARD].includes(name)) {
      newValue = Number(value);
    } else {
      newValue = value;
    }

    setForm({
      ...form,
      [name]: newValue,
    });
  };

  return {
    form,
    handleChange,
    handleSubmit,
  };
};

export default useForm;

// TODO
// a) further refactor to cleaner switch
// b) store data as object for coordinator, responsible and JSON.parse() to format required { email, id } or { id } on handleSubmit
// c) store on Redux, dispatch responsible, coordinator objects format on handleSubmit
// d) dropping useForm hook and have everything on Redux, not performant (updating on each keystroke),

// a) opted for this to complete test
//    + it does create a local partial redux-like reducer and update useForm hook
//    - multiples of these will probably defeat the purpose of central Redux state, fragmented state
//    have done with if statement to parse to type required e.g. Number(),

// b) collating and object with props like responsible (coming from input text) and than formatting on handleSubmit is doable
//    but not a great practice, creating temporary props, not being used and parsing to Number, date etc. seems like overkill with reduce/map, destructuring etc.

// c) I guess either way ot have useForm or have everything in Redux - not a good approach to split it

// d) seemed like the best idea, instead of onChange={handleChange} which dispatches name, value to store on each keystroke
//    I have tried onBlur, to only dispatch when input is completed, keep onChange for Select
//    However onChange was required and value e.g. value={form.title} was not being picked up from store via...
//    useSelector(state => state.form) :-((
