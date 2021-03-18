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
let isRefreshing = false;
let failedQueue: any = [];

const processQueue = (error: any, token: string | null | undefined = null) => {
    failedQueue.forEach((prom: any) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

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
     const { response } = error || {};
        const { data } = response || {};
        const { errorMessage, errorKey } = data || {};
    
     const originalRequest = error.config;
        if (errorMessage === 'RefreshToken_NotExist') {
            logger('RefreshToken_NotExist => logout');
            // logout here
            AuthenticateService.logOut();
            return Promise.reject(error);
        }
        if (
            ((error.response && error.response.status === 401) || errorMessage === 'Token_Expire') &&
            !originalRequest.retry
        ) {
            if (isRefreshing) {
                try {
                    const queuePromise: any = await new Promise((resolve: any, reject: any) => {
                        failedQueue.push({ resolve, reject });
                    });
                    originalRequest.headers.Authorization = `Bearer ${queuePromise.token}`;
                    return request(originalRequest);
                } catch (err) {
                    return Promise.reject(err);
                }
            }
            logger('refreshing token...');
            originalRequest.retry = true;
            isRefreshing = true;
            const localRefreshToken = TokenProvider.getRefreshToken();
            try {
                const refreshTokenResponse = await axios.post(AUTH_URL_REFRESH_TOKEN, {
                    refreshToken: localRefreshToken,
                });
                const { token, refreshToken } = refreshTokenResponse.data;
                TokenProvider.setAllNewToken(token, refreshToken);
                originalRequest.headers.Authorization = `Bearer ${token}`;
                processQueue(null, token);
                return request(originalRequest);
            } catch (err) {
                processQueue(err, null);
                return Promise.reject(err);
            } finally {
                isRefreshing = false;
            }
        }
        error.message = errorMessage || DEFAULT_ERROR_MESSAGE;
        error.keyMessage = errorKey || '';
        return Promise.reject(error.message);
});

export {
    axiosInstance,
    setToken
};
