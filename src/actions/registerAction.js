import {CHECK_EMAIL_EXISTE, 
    GET_LIST_QUESTION_SYSTEM, 
    GET_ETHNIC_ANSWERS,
    REGISTER_NEW_USER, 
    GET_COUNTRY, GET_VILLE, 
    GET_CODE_POSTAL, 
    GET_TERMS_CONDTIONS, 
    GET_TERMS_CONDTIONS_DATA_SENSITIVE} from '../utils/actiontypes';
export const checkEmailExist = (params, onSuccess, onError) => ({
    type: CHECK_EMAIL_EXISTE,
    params,
    onSuccess,
    onError
})

export const getListQuestionSystem = (onSuccess, onError) => ({
    type: GET_LIST_QUESTION_SYSTEM,
    onSuccess,
    onError
})

// Get ethnic answers
export const getEthnicAnswers = (onSuccess, onError) => ({
    type: GET_ETHNIC_ANSWERS,
    onSuccess,
    onError
})

export const registerNewAccount = (params, onSuccess, onError) => ({
    type: REGISTER_NEW_USER,
    params,
    onSuccess,
    onError
})


export const getCountry = (onSuccess, onError) => ({
    type: GET_COUNTRY,
    onSuccess,
    onError
})


export const getVille = (params, onSuccess, onError) => ({
    type: GET_VILLE,
    params,
    onSuccess,
    onError
})


export const getPostCode = (params, onSuccess, onError) => ({
    type: GET_CODE_POSTAL,
    params,
    onSuccess,
    onError
})

export const getTermsCondition = (onSuccess, onError) => ({
    type: GET_TERMS_CONDTIONS,
    onSuccess,
    onError
})

export const getTermsConditionDataSensitive = (onSuccess, onError) => ({
    type: GET_TERMS_CONDTIONS_DATA_SENSITIVE,
    onSuccess,
    onError
})
