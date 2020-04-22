import React from 'react';
import { stylesCommon } from "../styles/styleCommon";
import { View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';
import { STR_QUESTION_HEIGHT, STR_BACK, STR_CONTINUE, STR_EMAIL_PLACE_HOLDER, STR_EMAIL_CONFIRM_PLACE_HOLDER, STR_PASSWORD_PLACE_HOLDER, STR_PASSWORD_CONFIRM_PLACE_HOLDER, 
      STR_ERROR, STR_ANNONCE_TRYING, STR_PREFIX_HEIGHT, minHeight, maxHeight, initialValueHeight } from "../../utils/constantstring";
import { useState } from 'react';
import { TextField } from 'react-native-material-textfield';
import Slider from '../styles/slider'
function QuestionHeight(props){
    const [visibleError, setVisibleError] = useState(false);
    const [height, setHeight] = useState(initialValueHeight)
    const backScreen = () => {
        props.backScreen();
    };

    const nextScreen = () => {
        props.nextScreen(height);
    };

    

    const _renderErrorView =  () => {
        if (visibleError)
        {
           return( <View style = {styles.containerError}>
            <Text style = {styles.textError} >{STR_ERROR} </Text> 
            <Text style = {styles.textAnnonce} >{STR_ANNONCE_TRYING} </Text>
           </View>)
        }else{
            return null
        } 
    }
        return (
            
            <View style={styles.container}>
                 <Text style = {stylesCommon.titleQuestionStyle}>{STR_QUESTION_HEIGHT}</Text>
                 
                <View style = {styles.containerSlider}>
                    <Slider  min = {minHeight}  max = {maxHeight}  initialValue = {initialValueHeight}  prefixesStr = {STR_PREFIX_HEIGHT} setValueCurrent = {setHeight} ></Slider>
                </View>
                {_renderErrorView()}
                <TouchableOpacity style = {stylesCommon.backButton} onPress = {backScreen}>
                        <Text style = {stylesCommon.titleButtonStyleBack}>{STR_BACK}</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {stylesCommon.continueButton} onPress = {nextScreen}>
                        <Text style = {stylesCommon.titleButtonContinue}>{STR_CONTINUE}</Text>
                </TouchableOpacity>
                
            </View>
        );
      

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        height: "100%",
        
    },

    cell: {
        flex: 1,
        borderWidth: 10,
        justifyContent: "center"
    },

    dropdown_1: {
        flex: 1,
        top: 32,
        left: 8,
    },

    containerSlider: {
        height: '60%',
        justifyContent: "center",
        alignSelf:"center",
        marginTop: '10%'
      },

    

    containerError:{
        width: '100%',
        alignSelf:"center",
        marginTop:0,
        height: "50%",

    },

    textError: {
        width: "56%",
        marginTop: "10%",
        fontSize: 16, 
        color: "white",
        alignSelf: "center",
        
    },

    textAnnonce : {
        width: "100%",
        fontSize: 16, 
        color: "#cc6600",
        textAlign: "center",
        justifyContent:'center',
        fontWeight: "bold",
    },

    textInput: {
        marginTop: 20,
        width: "85%",
        alignSelf: "center",
        borderBottomColor: "#6F8FA5",
        borderBottomWidth: 1.5,
        color: "#6F8FA5",
        height: 40,
        fontSize: 18,
        fontWeight: "bold",
        
    },

    textFieldStyle: {
        width: '85%',  
        borderBottomColor: '#6F8FA5',  
        borderBottomWidth: 1.5, 
        alignSelf: "center", 
    },


    textForgotPassword: {
        marginTop: 30,
        fontSize: 18, 
        fontWeight: "bold",
        color: "#cc6600",
        alignSelf: "center",
    },
    icon: {
        position: 'absolute',
        top: 33,
        right: 20
    }

    
})

export default QuestionHeight
