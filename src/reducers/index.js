import {
  FETCH_COORDINATORS,
  FETCH_RESPONSIBLE,
  INITIAL_DATA,
  UPDATE_FORM,
} from '../constants';

const initialState = {
  form: INITIAL_DATA,
  coordinators: [],
  responsible: [],
};

const format = (name, value) => {
  switch (name) {
    case 'title':
      return String(value);
    default:
      return value;
  }
};

const rootReducer = (state = initialState, { type, payload }) => {
  console.log('action.payload ===> ', payload);
  switch (type) {
    case FETCH_COORDINATORS:
      return { ...state, coordinators: payload };
    case FETCH_RESPONSIBLE:
      return { ...state, responsible: payload };
    case UPDATE_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          [payload.name]: format(payload.name, payload.value),
        },
      };

    default:
      return state;
  }
};

export default rootReducer;
