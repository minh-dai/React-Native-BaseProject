import React from 'react';
import GenderPartner from "../../component/register/genderPartner";
import * as loginActions from '../../actions/loginAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import { useNavigation, useNavigationParam, useNavigationState } from "react-navigation-hooks";
import { useEffect, useState } from 'react';
import ModelRegister from "../../model/ModelRegister";
function GenderPartnerScreen(props){
    const {goBack, navigate} = useNavigation();
    const {routeName, key} = useNavigationState();
    const {changeState, setChangeState} = useState(true);
    
    const backScreen = () =>{
       goBack();

    }
    const moveNextScreen = (gender) => {
        ModelRegister.getInstance().setPartnerGender(gender);
        console.log( ModelRegister.getInstance().getParams());
        
        navigate("LocationScreen");
    }

        return (
            <GenderPartner backScreen = {backScreen} 
                nextScreen = {moveNextScreen} >
                
            </GenderPartner>
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

export default connect(mapStateToProps, mapDispatchToProps)(GenderPartnerScreen);