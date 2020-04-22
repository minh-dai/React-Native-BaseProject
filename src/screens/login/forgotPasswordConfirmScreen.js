import React from 'react';
import ForgotPasswordConfirm from '../../component/login/forgotPasswordConfirm'
import * as loginActions from '../../actions/loginAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigation, useNavigationParam, useNavigationState } from "react-navigation-hooks";


function ForgotPasswordConfirmScreen(props){
    const {goBack, navigate} = useNavigation();
    const {routeName, key} = useNavigationState();
    const backScreenLogin = () =>{
        goBack(idLoginScreen);
    }
    return (
        <ForgotPasswordConfirm backScreenLogin = {backScreenLogin}>
        </ForgotPasswordConfirm>
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordConfirmScreen);