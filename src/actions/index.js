import {
  FETCH_COORDINATORS,
  FETCH_CATEGORIES,
  COORDINATOR_URL,
  CATEGORY_URL,
} from '../constants';

export const fetchCoordinators = () => async (dispatch) => {
  const response = await fetch(COORDINATOR_URL);
  const jsonResponse = await response.json();

  dispatch({
    type: FETCH_COORDINATORS,
    payload: jsonResponse,
  });
};

export const fetchCategories = () => async (dispatch) => {
  const response = await fetch(CATEGORY_URL);
  const jsonResponse = await response.json();

  dispatch({
    type: FETCH_CATEGORIES,
    payload: jsonResponse,
  });
};
