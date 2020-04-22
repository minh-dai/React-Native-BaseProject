import { all, fork } from 'redux-saga/effects';
import { watchLogin, watchResetPassword } from "./loginSaga";
import {
    watchCheckEmailExist,
    watchGetListQuestion,
    watchGetVille,
    watchGetCodePostal,
    watchGetCountry,
    watchRegisterNewAccount,
    watchGetTermsCondtion,
    watchGetTermsCondtionDataSensitive,
    watchGetEthnicAnswers
} from "./registerSaga";
import {
    watchGetCategory,
    watchGetDetailCategory,
    watchUpdateDeviceToken,
    watchSendUserAnswer,
    watchSendUserReligion,
    watchSendUserLocation,
    watchSendNotifi,
    watchDeleteNotifi,
    watchPostImage,
    watchGetImage
} from "./mainSaga";
//import { watchLogin,watchFetchUserInfo } from '../sagas/loginSagas';
import {
    watchGetNotification,
    watchGetUserInfo,
    watchFindUserCompatibily,
    watchAccepterCompatibily,
    watchRejectCompatibily
} from './notiSage'

import {
    watchGetHomePersonal,
    watchGetPosition,
    watchGetPlanTime,
    watchPostPlanTime,
    watchDelayDating,
    watchRePlanTime,
    watchSendFeedBack,
    watchGetLastNoti,
    watchDeleteNoti,
    watchLogout
} from './homeSaga'

import {
    watchDeleteAccount,
    watchChangeEmail,
    watchChangePass,
} from './settingSaga'

function* rootSaga() {
    yield all([
        //it will looking for the TYPES in the Class
        watchLogin(),
        watchResetPassword(),
        watchCheckEmailExist(),
        watchGetListQuestion(),
        watchGetVille(),
        watchGetCodePostal(),
        watchGetCountry(),
        watchRegisterNewAccount(),
        watchGetTermsCondtion(),
        watchGetTermsCondtionDataSensitive(),
        watchGetEthnicAnswers(),
        //watchFetchUserInfo()

        //Watch MainScreen
        watchGetCategory(),
        watchGetDetailCategory(),
        watchUpdateDeviceToken(),
        watchSendUserReligion(),
        watchSendUserAnswer(),
        watchSendUserLocation(),
        watchSendNotifi(),
        watchDeleteNotifi(),
        watchPostImage(),
        watchGetImage(),
        
        //Notification
        watchGetNotification(),
        watchGetUserInfo(),
        watchFindUserCompatibily(),
        watchRejectCompatibily(),
        watchAccepterCompatibily(),

        //Home
        watchGetHomePersonal(),
        watchGetPosition(),
        watchGetPlanTime(),
        watchPostPlanTime(),
        watchDelayDating(),
        watchRePlanTime(),
        watchSendFeedBack(),
        watchGetLastNoti(),
        watchDeleteNoti(),
        watchLogout(),

        //setting
        watchDeleteAccount(),
        watchChangeEmail(),
        watchChangePass()
    ])
}
export default rootSaga