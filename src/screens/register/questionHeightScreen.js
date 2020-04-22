import React from 'react';
import QuestionHeight   from "../../component/register/questionHeight";
import * as loginActions from '../../actions/loginAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import ModelRegister from "../../model/ModelRegister";
function QuestionHeightScreen(props){
    const {goBack, navigate} = useNavigation();

    const backScreen = () =>{
        goBack();
    }
    const moveNextScreen = (height) => {
        ModelRegister.getInstance().setHeight(height);
        console.log( ModelRegister.getInstance().getParams());
        navigate("QuestionPoids");
    }

        return (
            <QuestionHeight backScreen = {backScreen} 
            nextScreen = {moveNextScreen} >
                
            </QuestionHeight>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionHeightScreen);