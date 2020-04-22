import React from 'react';
import Gender from "../../component/register/gender";
import * as loginActions from '../../actions/loginAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import { useEffect, useState } from 'react';
import ModelRegister from "../../model/ModelRegister";
function GenderScreen(props){
    const {goBack, navigate} = useNavigation();


    const backScreen = () =>{
        goBack();
    }
    const moveNextScreen = (myGender) => {

        ModelRegister.getInstance().setMyGender(myGender);
        navigate("GenderPartnerScreen");
    }

        return (
            <Gender backScreen = {backScreen} 
                nextScreen = {moveNextScreen} >
                
            </Gender>
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

export default connect(mapStateToProps, mapDispatchToProps)(GenderScreen);