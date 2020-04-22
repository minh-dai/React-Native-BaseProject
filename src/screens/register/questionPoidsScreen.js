import React from 'react';
import QuestionPoids   from "../../component/register/questionPoids";
import * as loginActions from '../../actions/loginAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigation} from "react-navigation-hooks";
import ModelRegister from "../../model/ModelRegister";
function QuestionPoidsScreen(props){
    const {goBack, navigate} = useNavigation();

    const backScreen = () =>{
        goBack();
    }
    const moveNextScreen = (weight) => {
        ModelRegister.getInstance().setWeight(weight);
        console.log( ModelRegister.getInstance().getParams());
        navigate("BodyQuestionScreen");
    }

        return (
            <QuestionPoids backScreen = {backScreen} 
            nextScreen = {moveNextScreen} >
                
            </QuestionPoids>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPoidsScreen);