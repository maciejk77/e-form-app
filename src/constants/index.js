export const ADD = 'ADD';
export const FETCH_COORDINATORS = 'FETCH_COORDINATORS';
export const FETCH_RESPONSIBLE = 'FETCH_RESPONSIBLE';

const BASE_URL = 'http://www.mocky.io/v2';
export const COORDINATOR_URL = `${BASE_URL}/5bcdd7992f00006300c855d5`;
export const RESPONSIBLE_URL = `${BASE_URL}/5bcdd3942f00002c00c855ba`;

export const LAST_NAME = 'lastname';

export const INITIAL_DATA = {
  title: '',
  description: '',
  category_id: 0,
  paid_event: false,
  event_fee: 0,
  reward: 0,
  duration: 0,
  coordinator: {
    email: '',
    id: '',
  },
};
