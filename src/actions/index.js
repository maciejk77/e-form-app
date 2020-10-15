import {
  FETCH_COORDINATORS,
  FETCH_RESPONSIBLE,
  COORDINATOR_URL,
  RESPONSIBLE_URL,
} from '../constants';

export const fetchCoordinators = () => async (dispatch) => {
  const response = await fetch(COORDINATOR_URL);
  const jsonResponse = await response.json();

  dispatch({
    type: FETCH_COORDINATORS,
    payload: jsonResponse,
  });
};

export const fetchResponsible = () => async (dispatch) => {
  const response = await fetch(RESPONSIBLE_URL);
  const jsonResponse = await response.json();

  dispatch({
    type: FETCH_RESPONSIBLE,
    payload: jsonResponse,
  });
};
