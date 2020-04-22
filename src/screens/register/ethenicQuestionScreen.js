import React from 'react';
import EthenicQuestion   from "../../component/register/ethnicQuestion";
import * as loginActions from '../../actions/loginAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import { useNavigation } from "react-navigation-hooks";
import { useState, useEffect } from 'react';
import ModelRegister from "../../model/ModelRegister";
import * as registerActions from '../../actions/registerAction';

function EthenicQuestionScreen(props){
    const {goBack, navigate} = useNavigation();
    const [selectedId, setSelectedId] = useState(-1);
    const [visibleError, setVisibleError] = useState(false);
    const [questionAnswers, setQuestionAnswers] = useState([]);
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        props.actions.register.getEthnicAnswers(setEthnicAnswers, onError);
    }, []);

    const backScreen = () =>{
        goBack();
    }

    const moveNextScreen = () => {
        console.log("Ethnic", ModelRegister.getInstance()._ethnic );
        if (!selectedId)
        {
            setVisibleError(true);
            return;
        }else{
            ModelRegister.getInstance().pushAnswersEthnic(selectedId);
            console.log('moveNextScreen -> selectedId', selectedId)
            console.log( ModelRegister.getInstance().getParams());
            navigate("TermsAndConditionScreen");;
        }
       
    }

    const setEthnicAnswers = (response) => {
        setQuestionAnswers(response.result)
        setShowLoading(false)
    }

    const onError = (response) => {
        console.error(response)
        setShowLoading(false)
    }

    return (
        <EthenicQuestion 
            backScreen = {backScreen} 
            nextScreen = {moveNextScreen}
            setSelectedId = {setSelectedId}
            visibleError = {visibleError}
            setVisibleError = {setVisibleError}
            questionAnswers={questionAnswers}
            showLoading={showLoading}>
        </EthenicQuestion>
    );
}
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            login: bindActionCreators(loginActions, dispatch),
            register: bindActionCreators(registerActions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EthenicQuestionScreen);