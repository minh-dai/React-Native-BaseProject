import React from 'react';
import  TermsCondtionsDataSensitive  from "../../component/register/termsConditonsDataSensitive";
import * as registerAction from '../../actions/registerAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigation } from "react-navigation-hooks";
import { useState, useEffect } from 'react';
import ModelRegister from "../../model/ModelRegister";
function TermsCondtionsDataSensitiveScreen(props){
    const {goBack, navigate} = useNavigation();
    const [textCondtions, setTextConditions] = useState("");
    const [showLoading, setShowLoading] = useState(false);
    useEffect(() => {
        setShowLoading(true)
       props.actions.register.getTermsConditionDataSensitive(onSucess, onError)
    }, []);
    const backScreen = () =>{
        goBack();
    }

    const onSucess = (response) => {
        setShowLoading(false)
        console.log(response);
        setTextConditions(response.result);
    }
    const onError = (response) => {
        setShowLoading(false)
        console.log(response);
        
    }

        return (
            <TermsCondtionsDataSensitive 
                    backScreen = {backScreen} 
                    textCondtions = {textCondtions}
                    showLoading = {showLoading}
             >              
            </TermsCondtionsDataSensitive>
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

export default connect(mapStateToProps, mapDispatchToProps)(TermsCondtionsDataSensitiveScreen);
