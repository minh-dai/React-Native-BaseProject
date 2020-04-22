import React from 'react';
import DateOfBirth   from "../../component/register/dateOfBirth";
import * as loginActions from '../../actions/loginAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import ModelRegister from "../../model/ModelRegister";
function DateOfBirthScreen(props){
    const {goBack, navigate} = useNavigation();

   const backScreen = () =>{
        goBack();
    }
    const moveNextScreen = (dateOfBirth) => {
        ModelRegister.getInstance().setDateOfBirth(dateOfBirth);
        console.log( ModelRegister.getInstance().getParams());
        navigate("QuestionHeight");
    }

        return (
            <DateOfBirth backScreen = {backScreen} 
                nextScreen = {moveNextScreen} 
               >
                
            </DateOfBirth>
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

export default connect(mapStateToProps, mapDispatchToProps)(DateOfBirthScreen);