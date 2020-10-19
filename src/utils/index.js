import { FORM_NAMES } from '../constants';
// import moment from 'moment';

export const format = (state, name, value) => {
  switch (name) {
    case FORM_NAMES.DURATION:
    case FORM_NAMES.EVENT_FEE:
    case FORM_NAMES.REWARD:
    case FORM_NAMES.CATEGORY:
      return Number(value);

    case FORM_NAMES.TITLE:
      return String(value);

    // case FORM_NAMES.DATE:
    // case FORM_NAMES.TIME:
    //   const [date, time] = moment(value).format('YYYY-MM-DDTHH:mm').split('T');

    //   if (name === FORM_NAMES.DATE) {
    //     return [value, time].join('T');
    //   }
    //   if (name === FORM_NAMES.TIME) {
    //     return [date, value].join('T');
    //   }

    case FORM_NAMES.PAID_EVENT:
      return value === 'false';

    case FORM_NAMES.COORDINATOR:
      const { name, lastname, ...rest } = state.coordinators.find(
        (val) => val.id === Number(value)
      );
      const { id, email } = rest;
      return { id: String(id), email };

    default:
      return String(value);
  }
};

// Date-Time hack until solution found above
export const removeTimeProp = (form) => {
  let { date, time } = form;

  if (time === undefined) {
    time = 'HH:mm';
  }
  if (date === undefined) {
    date = 'YYYY-MM-DD';
  }

  const joinedDateTime = `${date}T${time}`;
  delete form.time;
  const newOutput = { ...form, date: joinedDateTime };
  return newOutput;
};

export const validate = (form) => {
  const { title, description, date, coordinator } = form;

  return ![title, description, date, coordinator].includes('');
};

export const getErrorMessages = ({
  title,
  description,
  date,
  coordinator,
  event_fee,
}) => {
  let errors = {};

  if (event_fee === '') errors.event_fee = 'event fee is required';
  if (title === '') errors.title = 'title is required';
  if (description === '') errors.description = 'description is required';
  if (date === '') errors.date = 'date is required';
  if (coordinator === '') errors.coordinator = 'coordinator is required';

  return errors;
};
