import { FORM_NAMES } from '../constants';
// import moment from 'moment';

const format = (state, name, value) => {
  console.log('name => ', name);

  switch (name) {
    case FORM_NAMES.DURATION:
    case FORM_NAMES.EVENT_FEE:
    case FORM_NAMES.REWARD:
    case FORM_NAMES.CATEGORY:
      return Number(value);

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

export default format;
