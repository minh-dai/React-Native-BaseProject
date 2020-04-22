const env = {
    dev: 'dev', test: 'test', stg: 'stg', product: 'product', local: 'local',
};
const API_URL = {
    local: 'http://172.16.11.179:21021/',
    dev: 'http://172.16.11.179:21021/',
    test: 'http://172.16.11.179:21021/',
    stg: 'http://172.16.11.179:21021/',
    product: 'http://172.16.11.179:21021/',
};

// const API_URL = {
//     local: 'http://172.16.14.36:21021/',
//     dev: 'http://172.16.14.36:21021/',
//     test: 'http://172.16.14.36:21021/',
//     stg: 'http://172.16.14.36:21021/',
//     product: 'http://172.16.14.36:21021/',
// };

const currentEnv = env.local;

export const BASE_API_URL = API_URL[currentEnv];
export const USER_TOKEN = 'USER_TOKEN';

//URL LOGIN
export const LOGIN_API = "api/TokenAuth/Authenticate";
export const FORGOT_PASSWORD_API = "/api/services/app/Account/ForgotPassword";

//URL REGISTER
export const GET_LIST_QUESTION_API = "/api/services/app/Question/GetSystemQuestions";
export const GET_ETHNIC_ANSWERS_API = '/api/services/app/Ethnic/GetEthnics';
export const CHECK_EXIST_EMAIL_API = "/api/services/app/Account/CheckIfEmailExists";

export const GET_COUNTRY_API = "/api/services/app/Location/GetCountries";
export const GET_VILLE_API = "/api/services/app/Location/GetCities";
export const GET_CODE_POSTAL_API = "/api/services/app/Location/GetPostalCodes";

export const REGISTER_USER_API = "/api/services/app/Account/Register";

export const GET_TERMS_CONDTIONS_API = "/api/services/app/Setting/GetTermAndConditional"
export const GET_TERMS_CONDTIONS_DATA_SENSITIVE_API = "/api/services/app/Setting/GetSensitiveDataCondition"

export const GET_CATEGORY_API = "/api/services/app/Category/GetCategories"
export const GET_DETAIL_CATEGORY_API = "/api/services/app/Question/GetQuestionsByCategory"

//URL HISTORY
export const GET_HISTORY = "api/services/app/UserManager/GetHistory"
export const GET_COMPATIBILY_FIND_USER = "api/services/app/CompatibilityCheckRequest/FindUser"
export const GET_STATUS_USER = "/api/services/app/CompatibilityCheckRequest/GetNameAndStatusCurrentInfo"
export const ACCEPTER_COMPATIBILY = "api/services/app/CompatibilityCheckRequest/AcceptCompatibility"
export const REJECT_COMPATIBILY = "api/services/app/CompatibilityCheckRequest/RejectCompatibility"
export const POST_DELETE_DATING = '/api/services/app/Appointment/ChangeAppointmentGuestStatus'

//URL MAIN
export const UPDATE_DEVICE_TOKEN = "api/services/app/Device/CreateOrUpdateDeviceToken"
export const POST_USER_SELECT_ANSWER = '/api/services/app/Question/UserSelectAnswer'
export const PUT_RELIGION = '/api/services/app/Religion/UpdateUserReligion'
export const PUT_UPDATE_LOCATION = '/api/services/app/Location/UpdateLocation'
export const POST_IMAGE = 'api/services/app/ImageUpload/InsertOrUpdatePhotoToCloud'
export const GET_IMAGE = '/api/services/app/ImageUpload/GetPhotos'

//URL HOME
export const GET_HOME_PERSONAL = "/api/services/app/UserManager/PerformAction"
export const GET_APPOINTMENT_GUEST = '/api/services/app/Appointment/GetAppointmentGuest'
export const GET_APPOINTMENT_TIME = 'api/services/app/PlannedTime/GetAppointmentTime'
export const POST_SAVE_PLAN_TIME = 'api/services/app/Appointment/CreateOrUpdateDatingTimeSelection'
export const POST_DELAY_DATING = 'api/services/app/Appointment/AppointmentGuestDelay'
export const POST_SEND_FEED_BACK = '/api/services/app/Appointment/SendFeedBack'
export const GET_LASTER_NOTIFICATION = 'api/services/app/Notification/GetLatestNofitication'
export const POST_DELETE_NOTIFICATION = 'api/services/app/Notification/ViewedNotification'

// URL SETTING
export const POST_DELETE_ACCOUNT = '/api/services/app/Account/Deactivate'
export const POST_CHANGE_USER_EMAIL = '/api/services/app/Account/ChangeUserEmail'
export const POST_CHANGE_PASS_ACCOUNT = '/api/services/app/Account/ChangePassword'
export const POST_LOGOUT = 'api/services/app/Device/MobileLogout'