export const FETCH_COORDINATORS = 'FETCH_COORDINATORS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export const FORM_NAMES = {
  CATEGORY: 'category_id',
  COORDINATOR: 'coordinator',
  DATE: 'date',
  DURATION: 'duration',
  EVENT_FEE: 'event_fee',
  PAID_EVENT: 'paid_event',
  REWARD: 'reward',
  TIME: 'time',
  TITLE: 'title',
};

const BASE_URL = 'http://www.mocky.io/v2';
export const COORDINATOR_URL = `${BASE_URL}/5bcdd7992f00006300c855d5`;
export const CATEGORY_URL = `${BASE_URL}/5bcdd3942f00002c00c855ba`;

export const [COORDINATOR, CATEGORY] = ['coordinator', 'category'];
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
  coordinator: '',
};

export const TIME_PATTERN = /^([0-1]\d|20|21|22|23):[0-5]\d$/;
export const DATE_PATTERN =
  '(?:19|20)(?:(?:[13579][26]|[02468][048])-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))|(?:[0-9]{2}-(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:29|30))|(?:(?:0[13578]|1[02])-31)))';
