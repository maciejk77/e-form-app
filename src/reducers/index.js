import {
  FETCH_COORDINATORS,
  FETCH_CATEGORIES,
  INITIAL_DATA,
} from '../constants';

const initialState = {
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
    default:
      return state;
  }
};

export default rootReducer;
