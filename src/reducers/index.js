import {
  ADD_EVENT,
  FETCH_COORDINATORS,
  FETCH_CATEGORIES,
  FORM_NAMES,
  INITIAL_DATA,
  UPDATE_FORM,
} from '../constants';

const initialState = {
  events: [],
  form: INITIAL_DATA,
  coordinators: [],
  categories: [],
};

const format = (state, name, value) => {
  switch (name) {
    case FORM_NAMES.DURATION:
    case FORM_NAMES.EVENT_FEE:
    case FORM_NAMES.REWARD:
    case FORM_NAMES.CATEGORY:
      return Number(value);

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

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COORDINATORS:
      return { ...state, coordinators: payload };
    case FETCH_CATEGORIES:
      return { ...state, categories: payload };
    case ADD_EVENT:
      return { ...state, events: payload };
    case UPDATE_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          [payload.name]: format(state, payload.name, payload.value),
        },
      };

    default:
      return state;
  }
};

export default rootReducer;
