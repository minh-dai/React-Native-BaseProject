import React from 'react';
import  TermsDetail  from "../../component/register/termsDetail";
import * as registerAction from '../../actions/registerAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigation } from "react-navigation-hooks";
import { useState, useEffect } from 'react';
import ModelRegister from "../../model/ModelRegister";

function TermsDetailsScreen(props){
    const {goBack, navigate} = useNavigation();
    const [textCondtions, setTextConditions] = useState("");
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
        setShowLoading(true)
       props.actions.register.getTermsCondition(onSucess, onError)
    }, []);
    const backScreen = () =>{
        goBack();
    }


    const onSucess = (response) => {
        //console.log(response);
        setShowLoading(false)
        setTextConditions(response.result);
    }
    const onError = (response) => {
        setShowLoading(false)
        //console.log(response);
        
    }

        return (
            <TermsDetail 
                    backScreen = {backScreen} 
                    textCondtions = {textCondtions}
                    showLoading = {showLoading}
             >              
            </TermsDetail>
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

export default connect(mapStateToProps, mapDispatchToProps)(TermsDetailsScreen);
