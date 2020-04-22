import { combineReducers } from 'redux';
import loginReducers from './loginReducers';
import userReducers from './userReducers';
import homeReducers from './homeReducers'
import notifiReducer from './notifiReducers';

const allReducers = combineReducers({
    login: loginReducers,
    user: userReducers,
    home: homeReducers,
    notifi: notifiReducer,
})
export default allReducers