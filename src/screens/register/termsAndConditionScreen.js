import React from 'react';
import  TermsAndConditions  from "../../component/register/termsAndConditions";
import * as registerAction from '../../actions/registerAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigation } from "react-navigation-hooks";
import ModelRegister from "../../model/ModelRegister";
function TermsAndConditionsScreen(props){
    const {goBack, navigate} = useNavigation();

    const backScreen = () =>{
        goBack();
    }
    const moveNextScreen = () => {
        navigate("PhotoAndIdentityScreen");
        
    }

    const moveToDetailTermsScreen = () =>
    {
        navigate("TermsDetailsScreen");
    }

    const moveToDetailTermsDataSensitiveScreen = () =>
    {
        navigate("TermsCondtionsDataSensitiveScreen");
    }

        return (
            <TermsAndConditions 
                    backScreen = {backScreen} 
                    nextScreen = {moveNextScreen}
                    moveToDetailTermsScreen = {moveToDetailTermsScreen}
                    moveToDetailTermsDataSensitiveScreen = {moveToDetailTermsDataSensitiveScreen} >              
            </TermsAndConditions>
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

export default connect(mapStateToProps, mapDispatchToProps)(TermsAndConditionsScreen);
