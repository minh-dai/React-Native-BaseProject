import {
    GET_CATEGORY,
    GET_DETAIL_CATEGORY,
    SET_DEVICE_TOKEN,
    POST_USER_ANSWER,
    PUT_RELISION,
    PUT_UPDATE_LOCATION,
    SEND_NOTIFI,
    DELETE_TYPE,
    POST_IMAGE,
    GET_IMAGE
} from '../utils/actiontypes';

export const getCategory = (onSuccess, onError) => ({
    type: GET_CATEGORY,
    onSuccess,
    onError
})


export const getDetailCategory = (params, onSuccess, onError) => ({
    type: GET_DETAIL_CATEGORY,
    params,
    onSuccess,
    onError
})

export const setDeviceToken = (params, onSuccess, onError) => ({
    type: SET_DEVICE_TOKEN,
    params,
    onSuccess,
    onError,

})

export const sendAnswer = (params, onSuccess, onError) => {
    return {
        type: POST_USER_ANSWER,
        params,
        onSuccess,
        onError
    }
}

export const putReligion = (params, onSuccess, onError) => {
    return {
        type: PUT_RELISION,
        params,
        onSuccess,
        onError,
    }
}

export const putLocation = (params, onSuccess, onError) => {
    return {
        type: PUT_UPDATE_LOCATION,
        params,
        onSuccess,
        onError,
    }
}

export const sendNotifi = (params) => {
    return {
        type: SEND_NOTIFI,
        params,
    }
}

export const deleteNotifi = () => {
    return {
        type: DELETE_TYPE
    }
}

export const uploadImage = (params, onSuccess, onError) => {
    return {
        type: POST_IMAGE,
        params,
        onSuccess,
        onError,
    }
}

export const getImage = (params, onSuccess, onError) => {
    return {
        type: GET_IMAGE,
        params,
        onSuccess,
        onError,
    }
}