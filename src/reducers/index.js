import { FETCH_COORDINATORS, FETCH_RESPONSIBLE } from '../constants';

const initialState = {
  events: [],
  coordinators: [],
  responsible: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COORDINATORS:
      return { ...state, coordinators: action.payload };
    case FETCH_RESPONSIBLE:
      return { ...state, responsible: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
