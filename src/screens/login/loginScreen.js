import React from 'react';
import Login from "../../component/login/login";
import * as loginActions from '../../actions/loginAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Platform } from 'react-native';
import { useNavigation, useNavigationParam, useNavigationState } from "react-navigation-hooks";
import { STR_ERROR, STR_ANNONCE_TRYING, ErrorRegisterScreen } from "../../utils/constantstring";
import { useState, useEffect } from 'react';
import FunctionCommun from '../../model/userDataManager';
import UserEntity from '../../model/UserEntity';
import { setDataJson, getDeviceToken } from '../../utils/storage'
import { KEY_ACCESS_TOKEN } from '../../utils/constantKeyStorage'
function LoginScreen(props) {
    const [visibleError, setVisibleError] = useState(false);
    const [strMessage, setStrMessage] = useState(STR_ERROR);
    const { goBack, navigate } = useNavigation();
    const [showLoading, setShowLoading] = useState(false);
    const backScreen = () => {
        goBack();
    }
    useEffect(() => {
        setShowLoading(false);
    }, []);
    const login = async (email, password) => {
        if (validate(email, password)) {
            const deviceToken = await getDeviceToken();
            setShowLoading(true);
            const params = {
                userNameOrEmailAddress: email,
                password: password,
                rememberClient: true,
                deviceSerialNumber: deviceToken,
                os: Platform.OS
            };
            props.actions.login.login(params, onSucess, onError);
        } else {
            setVisibleError(true);
        }

    }

    const forgotPassword = () => {
        navigate("ForgotPassword");
    }

    const onSucess = (response) => {
        let user = new UserEntity(response);
        setDataJson(KEY_ACCESS_TOKEN, user);
        setShowLoading(false);
        setVisibleError(false);
        goPersonalCategory();
        //setStrMessage("Login Successfully");

    }

    const onError = (response) => {
        console.log("Response login: ", response);
        setShowLoading(false);
        setVisibleError(true);
        setStrMessage(STR_ERROR);
    }

    const goPersonalCategory = () => {
        navigate("MainStack")
    }

    const validate = (email, password) => {
        if (email.length == 0) {
            setVisibleError(true);
            setStrMessage(ErrorRegisterScreen.STR_EMPTY_EMAIL);
            return false
        }

        if (password.length == 0) {
            setVisibleError(true);
            setStrMessage(ErrorRegisterScreen.STR_EMPTY_PASSWORD);
            return false
        }

        if (!FunctionCommun.checkEmailValidate(email)) {
            setVisibleError(true);
            setStrMessage(ErrorRegisterScreen.STR_EMAIL_NOT_VALIDATE);
        }

        return true;
    }



    return (
        <Login backScreen={backScreen}
            login={login}
            forgotPassword={forgotPassword}
            visibleError={visibleError}
            strMessage={strMessage}

            showLoading={showLoading}
        >
        </Login>
    );
}
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            login: bindActionCreators(loginActions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
