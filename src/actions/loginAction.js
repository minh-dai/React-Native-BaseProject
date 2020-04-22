import {LOGIN, RESET_PASSWORD} from '../utils/actiontypes';
export const login = (params, onSuccess, onError) => ({
    type: LOGIN,
    params,
    onSuccess,
    onError
})

export const resetPassword = (params, onSuccess, onError) => ({
    type: RESET_PASSWORD,
    params,
    onSuccess,
    onError
})



