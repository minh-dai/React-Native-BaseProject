import * as types from '../utils/actiontypes';

const initUser = {
    userTimeSelections: [],
    priority: 0,
    numberOfWeekSkip: 0,
    status: -1,
    guestId: "",
    appointmentId: "",
    addressName: "",
    addressDetail: "",
    datingTime: "",
    id: ""
}

const homeReducers = (state = initUser, action) => {
    switch (action.type) {
        case types.GET_STATUS_HOME_REDUCER:
            return {
                ...action.response,
            }
        default:
            return state
    }
}
export default homeReducers;