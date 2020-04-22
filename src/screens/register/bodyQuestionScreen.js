import React from 'react';
import BodyQuestion   from "../../component/register/bodyQuestion";
import * as loginActions from '../../actions/loginAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import ModelRegister from "../../model/ModelRegister";
import { useState, useEffect} from 'react';
function BodyQuestionScreen(props){
    const {goBack, navigate} = useNavigation();
    const [selectedId, setSelectedId] = useState('');
    const [visibleError, setVisibleError] = useState(false);
    useEffect(() => {
    }, []);
    const backScreen = () =>{
        goBack();
    }
    const moveNextScreen = () => {
        let idAnswer = "";
        if (!selectedId)
        {
            setVisibleError(true);
            return;
        }else{
            if( ModelRegister.getInstance().getParams().genderId == 1)
            {
                
               idAnswer = selectedId;
                 
            }else{
                idAnswer = selectedId;
            }
            ModelRegister.getInstance().pushAnswersBody(idAnswer);
            console.log( ModelRegister.getInstance().getParams());
            navigate("EthenicQuestionScreen");
        }
       
    }

        return (
            <BodyQuestion backScreen = {backScreen} 
            nextScreen = {moveNextScreen}
            setSelectedId = {setSelectedId}
            visibleError = {visibleError}
            setVisibleError = {setVisibleError}
            >
            </BodyQuestion>
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

export default connect(mapStateToProps, mapDispatchToProps)(BodyQuestionScreen);