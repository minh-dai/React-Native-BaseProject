import { put, call, fork, takeLatest } from 'redux-saga/effects';
import * as types from '../utils/actiontypes';
import {
    CHECK_EXIST_EMAIL_API,
    GET_LIST_QUESTION_API,
    GET_COUNTRY_API,
    GET_VILLE_API,
    GET_CODE_POSTAL_API,
    REGISTER_USER_API,
    GET_TERMS_CONDTIONS_API,
    GET_TERMS_CONDTIONS_DATA_SENSITIVE_API,
    GET_ETHNIC_ANSWERS_API,
} from '../api/config';
import { APIRequest } from '../api/api-request';
export function* checkEmailExist(action) {
    try {
        new APIRequest.Builder()
            .get()
            .reqURL(CHECK_EXIST_EMAIL_API)
            .paramsGet(action.params)
            .response(action.onSuccess)
            .error(action.onError)
            .build()
            .doRequest();
        //const data = yield call(loginApis.login, action.params)
        //action.onSuccess(data.data)
    } catch (error) {
        action.onError(error);
    }
}

export function* watchCheckEmailExist() {
    yield takeLatest(types.CHECK_EMAIL_EXISTE, checkEmailExist);
}

export function* getListQuestionSystem(action) {
    try {
        new APIRequest.Builder()
            .get()
            .reqURL(GET_LIST_QUESTION_API)
            .response(action.onSuccess)
            .error(action.onError)
            .build()
            .doRequest();
        //const data = yield call(loginApis.login, action.params)
        //action.onSuccess(data.data)
    } catch (error) {
        action.onError(error);
    }
}

export function* watchGetListQuestion() {
    yield takeLatest(types.GET_LIST_QUESTION_SYSTEM, getListQuestionSystem);
}

export function* getEthnicAnswers(action) {
    try {
        new APIRequest.Builder()
            .get()
            .reqURL(GET_ETHNIC_ANSWERS_API)
            .response(action.onSuccess)
            .error(action.onError)
            .build()
            .doRequest();
    } catch (error) {
        action.onError(error);
    }
}

export function* watchGetEthnicAnswers() {
    yield takeLatest(types.GET_ETHNIC_ANSWERS, getEthnicAnswers);
}

export function* getVille(action) {
    try {
        new APIRequest.Builder()
            .get()
            .reqURL(GET_VILLE_API)
            .paramsGet(action.params)
            .response(action.onSuccess)
            .error(action.onError)
            .build()
            .doRequest();
        //const data = yield call(loginApis.login, action.params)
        //action.onSuccess(data.data)
    } catch (error) {
        action.onError(error);
    }
}

export function* watchGetVille() {
    yield takeLatest(types.GET_VILLE, getVille);
}

export function* getCountry(action) {
    try {
        new APIRequest.Builder()
            .get()
            .reqURL(GET_COUNTRY_API)
            .response(action.onSuccess)
            .error(action.onError)
            .build()
            .doRequest();
        //const data = yield call(loginApis.login, action.params)
        //action.onSuccess(data.data)
    } catch (error) {
        action.onError(error);
    }
}

export function* watchGetCountry() {
    yield takeLatest(types.GET_COUNTRY, getCountry);
}

export function* getCodePostal(action) {
    try {
        new APIRequest.Builder()
            .get()
            .reqURL(GET_CODE_POSTAL_API)
            .paramsGet(action.params)
            .response(action.onSuccess)
            .error(action.onError)
            .build()
            .doRequest();
        //const data = yield call(loginApis.login, action.params)
        //action.onSuccess(data.data)
    } catch (error) {
        action.onError(error);
    }
}

export function* watchGetCodePostal() {
    yield takeLatest(types.GET_CODE_POSTAL, getCodePostal);
}

export function* registerNewAccount(action) {
    try {
        let json = JSON.stringify(action.params);
        new APIRequest.Builder()
            .post()
            .reqURL(REGISTER_USER_API)
            .jsonParams(json)
            .response(action.onSuccess)
            .error(action.onError)
            .build()
            .doRequest();
        //const data = yield call(loginApis.login, action.params)
        //action.onSuccess(data.data)
    } catch (error) {
        action.onError(error);
    }
}

export function* watchRegisterNewAccount() {
    yield takeLatest(types.REGISTER_NEW_USER, registerNewAccount);
}

export function* getTermsCondtion(action) {
    try {
        new APIRequest.Builder()
            .get()
            .reqURL(GET_TERMS_CONDTIONS_API)
            .response(action.onSuccess)
            .error(action.onError)
            .build()
            .doRequest();
        //const data = yield call(loginApis.login, action.params)
        //action.onSuccess(data.data)
    } catch (error) {
        action.onError(error);
    }
}

export function* watchGetTermsCondtion() {
    yield takeLatest(types.GET_TERMS_CONDTIONS, getTermsCondtion);
}

export function* getTermsCondtionDataSensitive(action) {
    try {
        new APIRequest.Builder()
            .get()
            .reqURL(GET_TERMS_CONDTIONS_DATA_SENSITIVE_API)
            .response(action.onSuccess)
            .error(action.onError)
            .build()
            .doRequest();
        //const data = yield call(loginApis.login, action.params)
        //action.onSuccess(data.data)
    } catch (error) {
        action.onError(error);
    }
}

export function* watchGetTermsCondtionDataSensitive() {
    yield takeLatest(
        types.GET_TERMS_CONDTIONS_DATA_SENSITIVE,
        getTermsCondtionDataSensitive,
    );
}
