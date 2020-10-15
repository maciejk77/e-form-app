export const FETCH_COORDINATORS = 'FETCH_COORDINATORS';
export const FETCH_RESPONSIBLE = 'FETCH_RESPONSIBLE';
export const UPDATE_FORM = 'UPDATE_FORM';

const BASE_URL = 'http://www.mocky.io/v2';
export const COORDINATOR_URL = `${BASE_URL}/5bcdd7992f00006300c855d5`;
export const RESPONSIBLE_URL = `${BASE_URL}/5bcdd3942f00002c00c855ba`;

export const [COORDINATOR, RESPONSIBLE] = ['coordinator', 'responsible'];
export const LAST_NAME = 'lastname';

export const INITIAL_DATA = {
  title: '',
  description: '',
  category_id: '',
  paid_event: false,
  event_fee: '',
  reward: '',
  date: '',
  duration: '',
  coordinator: {
    email: '',
    id: '',
  },
};
