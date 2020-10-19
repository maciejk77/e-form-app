import {
  ADD_EVENT,
  FETCH_COORDINATORS,
  FETCH_CATEGORIES,
  INITIAL_DATA,
} from '../constants';

const initialState = {
  events: [], // not persisted
  form: INITIAL_DATA,
  coordinators: [],
  categories: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COORDINATORS:
      return { ...state, coordinators: payload };
    case FETCH_CATEGORIES:
      return { ...state, categories: payload };
    case ADD_EVENT:
      return { ...state, events: payload };
    default:
      return state;
  }
};

export default rootReducer;
