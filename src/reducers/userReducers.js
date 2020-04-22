import * as types from '../utils/actiontypes';
import { ENUM_USER_STATUS } from '../utils/enum'

const initUser = {
    name: '',
    status: '',
    numberStatus: -1,
}

const checkStatusUser = (status) => {
    let userStatus = '';
    Object.keys(ENUM_USER_STATUS).map(item => {
        if (ENUM_USER_STATUS[item] == status) {
            userStatus = item;
        }
    });
    return userStatus;
}

const userReducers = (state = initUser, action) => {
    switch (action.type) {
        case types.GET_STATUS_USER_REDUX:
            let user = { ...state };
            if (action.response) {
                user = {
                    name: action.response.name,
                    status: checkStatusUser(action.response.status),
                    numberStatus: action.response.status,
                }
            }
            return {
                ...state,
                ...user,
            }
        default:
            return state
    }
}
export default userReducers;