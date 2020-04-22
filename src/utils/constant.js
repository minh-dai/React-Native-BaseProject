import { STR_PHYSIQUE, STR_PERSONNALITE, STR_IGNORER, } from './constantstring'

export const notificationKey = {
  LOGOUT: 'LOGOUT'
};

//API response codes
export const ResponseCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  UNPROCESSABLE_REQUEST: 422,
  INTERNAL_SERVER_ERROR: 500,
  TOKEN_INVALID: 503,
  NO_INTERNET: 522,
  BAD_GATEWAY: 502,
  INVALID_OLD_PASSWORD: "422002"
};


export const EnumStatusCategory = {
  NOT_ANSWER: 0,
  NOT_COMPLETED: 1,
  COMPLETED: 2,
}

export const ArrayDelayDating = [
  {
    time: 5,
    isCheck: false
  },
  {
    time: 10,
    isCheck: false
  },
  {
    time: 15,
    isCheck: false
  },
  {
    time: 20,
    isCheck: false
  },
];

export const arrayFeedBack = [
  {
    id: 0,
    text: STR_PHYSIQUE,
    isCheck: false,
  },
  {
    id: 1,
    text: STR_PERSONNALITE,
    isCheck: false,
  },
  {
    id: 2,
    text: STR_IGNORER,
    isCheck: false,
  },
]