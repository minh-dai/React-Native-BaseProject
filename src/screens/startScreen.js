import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native'
import Start from '../component/start';
import * as registerAction from '../actions/registerAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import ModelRegister from "../model/ModelRegister";

function StartScreen(props) {
    const { navigate } = useNavigation();
    const moveTologin = () => {
        navigate("Login");
    }

    const getListQuestionForRegister = () => {
        //moveToRegister();
        props.actions.register.getListQuestionSystem(onSuccess, onError);
    }

    const onSuccess = (response) => {
        let modelRegister = ModelRegister.getInstance();
        modelRegister.parseDataJson(response);
        moveToRegister();
    }

    const onError = (response) => {

    }

    moveToRegister = () => {
        navigate("Register");
    }
    return (
        <Start
            moveToLogin={moveTologin}
            getListQuestionForRegister={getListQuestionForRegister}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);