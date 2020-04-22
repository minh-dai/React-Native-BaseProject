import * as types from '../utils/actiontypes';

const loginReducer = (state = null, action) => {
    switch (action.type) {
        case types.FETCH_USER_INFO:
            return { ...state, ...{ userInfo: action.data } }
        default:
            return state
    }
}
export default loginReducer