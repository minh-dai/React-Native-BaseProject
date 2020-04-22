import React from 'react';
import  Register  from "../../component/register/register";
import * as registerAction  from '../../actions/registerAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigation} from "react-navigation-hooks";
import { useState,useEffect } from 'react';
import {ErrorRegisterScreen} from "../../utils/constantstring";
import ModelRegister from "../../model/ModelRegister";

function RegisterScreen(props){
    const {goBack, navigate} = useNavigation();
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [visibleError, setVisibleError] = useState(false);
    const [strError, setStrError] = useState("");
    const [visibleIcon, setVisibleIcon] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    useEffect(() => {
       if(password == '' || password.value.length <= 0)
       {
           setVisibleIcon(false);
       }else{
           setVisibleIcon(true);
       }
    }, [password]);
    

    const backScreen = () =>{
        goBack();
    }


    const checkExistEmail = () => {
        if (!validateEmail())
        {
            return;
        }

        if(!validatePassword())
        {
            return;
        }
        setShowLoading(true);
        setVisibleError(false);
        const params = {emailAddress : email};
        props.actions.register.checkEmailExist(params, onSucess, onError);
    }


    const onSucess = (response) => {
        if (response.result)
        {   setShowLoading(false);
            setVisibleError(true);
            setStrError(ErrorRegisterScreen.STR_EMAIL_EXISTE);
        }else
        {
            ModelRegister.getInstance().setEmailForParam(email);
            ModelRegister.getInstance().setPasswordForParam(password.value);
            moveNextScreen();
        }
    }
    const onError = (response) => {
        //console.log(response);
        
    }

    const validateEmail = () =>
    {
        if(email == '')
        {
            setVisibleError(true);
            setStrError(ErrorRegisterScreen.STR_EMPTY_EMAIL);
            return false
        }
        if(email != emailConfirm)
        {   
            setVisibleError(true);
            setStrError(ErrorRegisterScreen.STR_EMAIL_CONFIRM_NOT_SAME_EMAIL);
            return false
        }
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;        
        if(reg.test(email) == false)
        {
            setVisibleError(true);
            setStrError(ErrorRegisterScreen.STR_EMAIL_NOT_VALIDATE);
            return false
        }

        return true
    }

    const validatePassword = () =>
    {
        if(password == '')
        {
            setVisibleError(true);
            setStrError(ErrorRegisterScreen. STR_EMPTY_PASSWORD);
            return false
        }
        
        if(password.value.length < 6 || password.value.length > 32)
        {
            setVisibleError(true);
            setStrError(ErrorRegisterScreen. STR_ERROR_LONG_PASS);
            return false
        }

        if(password.value != passwordConfirm.value)
        {   
            setVisibleError(true);
            setStrError(ErrorRegisterScreen.STR_EMAIL_CONFIRM_NOT_SAME_EMAIL);
            return false
        }

        return true
    }

   
    const moveNextScreen = () => {
        setShowLoading(false);
        navigate("GenderScreen");
    }

        return (
            
            <Register backScreen = {backScreen} 
            checkExistEmail = {checkExistEmail}

            setPassword = {setPassword}
            setPasswordConfirm = {setPasswordConfirm}
            setEmail = {setEmail}
            setEmailConfirm = {setEmailConfirm} 
            password = {password}
            passwordConfirm = {passwordConfirm}
            email = {email}
            emailConfirm = {emailConfirm}
            visibleError = {visibleError}
            strError = {strError}
            visibleIcon = {visibleIcon}
            showLoading = {showLoading}
            >    
            </Register>
        );
}
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            register: bindActionCreators(registerAction, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
