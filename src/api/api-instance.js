import axios from 'axios';
//import store from 'src/redux/store';
import {
    DeviceEventEmitter,
} from 'react-native';
//import {notificationKey} from 'src/utils/constants';
//import {logout} from "src/redux/action";
import {ResponseCode} from "..//utils/constant";
import {BASE_API_URL} from "./config";

let axiosInstance = axios.create({
    baseURL: BASE_API_URL,
    timeout: 15000,
});
//store.subscribe(listener);

// add default token in authenticate apis
function listener() {
    /*if (store.getState() !== undefined) {
        //For all API
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${store.getState().token}`;
    }*/
}

function setToken(token) {    
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// return request config or request error
axiosInstance.interceptors.request.use(
    async (config) => {
        //console.log('config', config);
        return config;
    },
    error => {        
        return Promise.reject(error)
    }
);

// user axios interceptors for change response and error as we want
axiosInstance.interceptors.response.use((response) => {
    let dataResponse = {
        status: response.status,
        meta: response.data.meta,
        data: response.data ? response.data : null,
    };
    return Promise.resolve(response.data);
}, (error) => {
    console.log('error axios: ', error);
    
    let errorResponse = {
        status: error.response ? error.response.status : ResponseCode.INTERNAL_SERVER_ERROR,
        meta: error.response.data?.meta ? error.response.data.meta : undefined,
        data: error.response.data?.data ? error.response.data.data : undefined,
    };
    switch (errorResponse.status) {
        case ResponseCode.NOT_FOUND:
           // handle api url not found
            break;
        case ResponseCode.BAD_GATEWAY:
            // handle something went wrong with server
            break;
        case ResponseCode.INTERNAL_SERVER_ERROR:
            // handle server error
        case ResponseCode.TOKEN_INVALID:
        // handle token invalid (here logout user from app if token invalid)
            //store.dispatch(logout());
            //DeviceEventEmitter.emit(notificationKey.LOGOUT, {});
            break;
    }
    return Promise.reject(error.response.data);
});

export {
    axiosInstance,
    setToken
};