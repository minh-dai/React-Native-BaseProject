import React from 'react';
import { stylesCommon } from "../styles/styleCommon";
import { View, StyleSheet, Button, TextInput, Text, TouchableOpacity } from 'react-native';
import { STR_FORGOT_PASSWORD_QUESTION, STR_EMAIL_PLACE_HOLDER, STR_SEND, 
    STR_BACK, STR_MAIL_SUCCESS, STR_ANNONCE_TRYING} from "../../utils/constantstring";
import { useState } from 'react';
import LoadingIndicator from '../styles/loadingIndicator'
import {ColorCustom} from '../../utils/color';
function ForgotPassword(props){ 
    const {showLoading} = props
    const [emailAddress, setEmailAddress] = useState("");
    const {visibleError, strError} = props
    const backScreenFromForgotPassword = () => {
        props.backScreen();
    };

    const _sendResetPasseToEmail = () => {
        props.forgotPassword(emailAddress);
    }

    const renderLoading = () => {
        if (showLoading)
        {
           return( <LoadingIndicator></LoadingIndicator>)
        }else{
            return null
        } 
    }

    const _renderErrorView =  () => {
        console.log("visible error", visibleError);
        if (visibleError)
        {  
           return( <View style = {styles.containerError}>
            <Text style = {styles.textError} >{props.strError} </Text> 
            <Text style = {styles.textAnnonce} >{STR_ANNONCE_TRYING} </Text>
           </View>)
        }else{
            return null
        } 
    }

        return (
            <View style={styles.container} >
                 
                 <View style = {styles.containerAccount}>
                    <Text style = {styles.textTitleHeader}>
                        {STR_FORGOT_PASSWORD_QUESTION}
                     </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={STR_EMAIL_PLACE_HOLDER}
                        placeholderTextColor= {ColorCustom.MAIN_COLOR_BLUE_OPACITY}
                        onChangeText = {(value) => setEmailAddress(value)}
                    />
                     <Text style = {styles.textEmailAnnonce} >{STR_MAIL_SUCCESS} </Text> 
                </View>

                {_renderErrorView()}
                <TouchableOpacity style = {stylesCommon.backButton} onPress = {backScreenFromForgotPassword}>
                        <Text style = {stylesCommon.titleButtonStyleBack}>{STR_BACK}</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {stylesCommon.continueButton} onPress = {_sendResetPasseToEmail}>
                        <Text style = {stylesCommon.titleButtonContinue}>{STR_SEND}</Text>
                </TouchableOpacity>

                {renderLoading()}
                
            </View>
        );
      

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        height: "100%",
        
    },
    containerAccount:{
        width: '90%',
        alignSelf:"center",
        marginTop:"30%",
        paddingTop: 20,
        paddingBottom: 20,

    },
    textEmailAnnonce: {
        width: "75%",
        marginTop: "10%",
        fontSize: 17, 
        color: "white",
        alignSelf: "center",
        fontStyle: "italic",
        textAlign: "center"
        
    },
    textTitleHeader: {
        fontSize : 24,
        fontWeight: "bold",
        color: 'white',
        width: "100%",
        marginHorizontal: 0,
        textAlign: "center",
        marginBottom: 30
    },

    textInput: {
        marginTop: 20,
        width: "100%",
        alignSelf: "center",
        borderBottomColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        borderBottomWidth: 1.5,
        color: ColorCustom.MAIN_COLOR_BLUE,
        height: 40,
        fontSize: 18,
        fontWeight: "bold",
       
        
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
        textAlign: "center"
        
    },

    textAnnonce : {
        width: "100%",
        fontSize: 16, 
        color: "#cc6600",
        textAlign: "center",
        justifyContent:'center',
        fontWeight: "bold",
    },


  
})

export default ForgotPassword