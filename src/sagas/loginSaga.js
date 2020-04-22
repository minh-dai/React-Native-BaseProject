import { put, call, fork, takeLatest } from 'redux-saga/effects';
import * as types from '../utils/actiontypes'
import {  LOGIN_API, FORGOT_PASSWORD_API} from "../api/config";
import {APIRequest} from "../api/api-request";
export function* login(action) {
    try {
        let json = JSON.stringify(action.params);
        console.log(json, action, 'json action saga')
        new APIRequest.Builder()
            .post()
            .reqURL(LOGIN_API)
            .jsonParams(json)
            .response(action.onSuccess)
            .error(action.onError)
            .build()
            .doRequest();

    } catch (error) {
        action.onError(error)
    }
}

export function* watchLogin() {
    yield takeLatest(types.LOGIN, login)
}



export function* resetPassword(action) {
    try {
        new APIRequest.Builder()
            .get()
            .reqURL(FORGOT_PASSWORD_API)
            .paramsGet(action.params)
            .response(action.onSuccess)
            .error(action.onError)
            .build()
            .doRequest();
    } catch (error) {
        action.onError(error)
    }
}
export function* watchResetPassword() {
    yield takeLatest(types.RESET_PASSWORD, resetPassword)
}