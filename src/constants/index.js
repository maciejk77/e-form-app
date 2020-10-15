export const FETCH_COORDINATORS = 'FETCH_COORDINATORS';
export const FETCH_RESPONSIBLE = 'FETCH_RESPONSIBLE';
export const SWITCH_PAYMENT_STATUS = 'SWITCH_PAYMENT_STATUS';

const BASE_URL = 'http://www.mocky.io/v2';
export const COORDINATOR_URL = `${BASE_URL}/5bcdd7992f00006300c855d5`;
export const RESPONSIBLE_URL = `${BASE_URL}/5bcdd3942f00002c00c855ba`;

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

export const [
  COORDINATOR,
  RESPONSIBLE,
  DURATION,
  EVENT_FEE,
  REWARD,
  PAID_EVENT,
  // TIME,
  // DATE,
] = [
  'coordinator',
  'responsible',
  'duration',
  'event_fee',
  'reward',
  'paid_event',
  // 'time',
  // 'date',
];

// export const datePattern =
//   '(?:19|20)(?:(?:[13579][26]|[02468][048])-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))|(?:[0-9]{2}-(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:29|30))|(?:(?:0[13578]|1[02])-31)))';
