import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationConfigs from '../../navigation/config/options';
import { isIos } from 'utilities/helper';
import { AUTHENTICATE_ROUTE } from 'navigation/config/routes';
import LoginScreen from 'screens/authentication/LoginScreen';

import RegisterScreen from 'screens/authentication/RegisterScreen';
import ForgotPasswordScreen from 'screens/authentication/ForgotPwdScreen';
import SendOTP from 'screens/authentication/SendOtp';
import ChangePass from 'screens/authentication/ChangePass';

const MainStack = createStackNavigator();

const AuthStack = () => (
    <MainStack.Navigator screenOptions={navigationConfigs} keyboardHandlingEnabled={isIos}>
        <MainStack.Screen name={AUTHENTICATE_ROUTE.LOGIN} component={LoginScreen} />
        <MainStack.Screen name={AUTHENTICATE_ROUTE.REGISTER} component={RegisterScreen} />
        <MainStack.Screen name={AUTHENTICATE_ROUTE.FORGOT_PASS} component={ForgotPasswordScreen} />
        <MainStack.Screen name={AUTHENTICATE_ROUTE.SEND_OTP} component={SendOTP} />
        <MainStack.Screen name={AUTHENTICATE_ROUTE.CHANGE_PASS} component={ChangePass} />
    </MainStack.Navigator>
);

export default AuthStack;
