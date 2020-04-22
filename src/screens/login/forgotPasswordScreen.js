import React from 'react';
import ForgotPassword from '../../component/login/forgotPassword'
import * as loginActions from '../../actions/loginAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigation, useNavigationParam, useNavigationState} from "react-navigation-hooks";
import { useState } from 'react';
import { ErrorRegisterScreen} from "../../utils/constantstring";

import FunctionCommun from '../../model/userDataManager'
function ForgotPasswordScreen(props){
    const {goBack, navigate} = useNavigation();
    const {routeName, key} = useNavigationState();
    const [showLoading, setShowLoading] = useState();
    const [visibleError, setVisibleErr] = useState(false);
    const [strError, setStrError] = useState(false);
    const backScreen = () =>{
        goBack();
    }

    const forgotPassword = (emailAddress) => {
        if (emailAddress == '')
        {
            setVisibleErr(true);
            setStrError(ErrorRegisterScreen.STR_EMAIL_EMPTY_FORGOT_PASSWORD)
            return;

        }
        if(FunctionCommun.checkEmailValidate(emailAddress))
        {
            setShowLoading(true);
            const params = {emailAddress : emailAddress };
            props.actions.login.resetPassword(params, onSucess, onError);
        }else{
            setStrError(ErrorRegisterScreen.STR_EMAIL_NOT_VALIDATE)
            setVisibleErr(true);
            return;
        }
    }

    const onSucess = (response) => {
        setShowLoading(false);
        if (response.result)
        {
            idLoginScreen = key;
            navigate("ForgotPasswordConfirm");
        }
    }

    const onError = (response) => {
        setShowLoading(false);
        console.log(response)
    }

    return (
        <ForgotPassword 
        backScreen = {backScreen} 
        forgotPassword = {forgotPassword} 

        showLoading = {showLoading}
        strError = {strError}
        visibleError = {visibleError}
        >
        </ForgotPassword>
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen);