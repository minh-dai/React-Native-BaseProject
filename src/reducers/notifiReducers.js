import * as types from '../utils/actiontypes';

const notifiReducer = (state = null, action) => {
    switch (action.type) {
        case types.GET_NOTIFI:
            const data = action.response;
            return { ...state, ...data };
        case types.DELETE_NOTIFI:
            return null;
        default:
            return state
    }
}
export default notifiReducer