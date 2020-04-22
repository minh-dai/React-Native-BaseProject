import React from 'react';
import { stylesCommon } from "../styles/styleCommon";
import { View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';
import { STR_EMAIL_PLACE_HOLDER, STR_EMAIL_CONFIRM_PLACE_HOLDER, STR_PASSWORD_PLACE_HOLDER, STR_PASSWORD_CONFIRM_PLACE_HOLDER, 
    STR_BACK, STR_CONTINUE, STR_ANNONCE_TRYING} from "../../utils/constantstring";
import { useState } from 'react';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ColorCustom} from '../../utils/color'
import LoadingIndicator from '../styles/loadingIndicator'
function Register(props){ 
    
    const [hiddenPassword, setHiddenPassword] = useState(true);
    const {visibleError, strError, visibleIcon, showLoading} = props
    const backScreenFromRegisterScreen = () => {
        props.backScreen();
    };

    const checkExistEmail = () => {
        props.checkExistEmail();
    };

    const changePwdType = () => {
        setHiddenPassword(!hiddenPassword)
    }
    

    const renderIcon = () => {
        if(visibleIcon)
        {
            return(
                <Icon style={styles.icon}
                        name={hiddenPassword ? "visibility-off" : "visibility" }
                        size={25}
                        color={ColorCustom.MAIN_COLOR_BLUE_OPACITY}
                        onPress={changePwdType}
                    />

            )
        }else{
            return null;
        }
    }
    const _renderErrorView =  () => {
        if (visibleError)
        {
           return( <View style = {styles.containerError}>
            <Text style = {styles.textError} >{strError}</Text> 
            <Text style = {styles.textAnnonce} >{STR_ANNONCE_TRYING} </Text>
           </View>)
        }else{
            return null
        } 
    }

    const renderLoading = () => {
        if (showLoading)
        {
           return( <LoadingIndicator></LoadingIndicator>)
        }else{
            return null
        } 
    }
        return (
            
            <View style={styles.container} >
                
                 <View style = {styles.containerAccount}>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={STR_EMAIL_PLACE_HOLDER}
                        placeholderTextColor = {ColorCustom.MAIN_COLOR_BLUE_OPACITY}
                        onChangeText = {(value) => props.setEmail(value)}
                    />
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={STR_EMAIL_CONFIRM_PLACE_HOLDER}
                        placeholderTextColor = {ColorCustom.MAIN_COLOR_BLUE_OPACITY}
                        onChangeText = {(value) => props.setEmailConfirm(value)}
                    />
                </View>

                <View style = {styles.containerPassword}>
                    <View>
                    <TextField 
                        style ={{color: ColorCustom.MAIN_COLOR_BLUE, fontSize : 18, fontWeight: "bold"}}
                        inputContainerStyle = {[styles.textFieldStyle]}
                        placeholder = {STR_PASSWORD_PLACE_HOLDER} 
                        placeholderTextColor = {ColorCustom.MAIN_COLOR_BLUE_OPACITY}
                        secureTextEntry={hiddenPassword}
                        onChangeText={(value) => props.setPassword({value})}
                        value = {props.password}
                        multiline = {false}
                        >
                    </TextField>

                   {renderIcon()}

                    </View>
                   
                    <View>
                    <TextField 
                        style ={{color: ColorCustom.MAIN_COLOR_BLUE, fontSize : 18, fontWeight: "bold"}}
                        inputContainerStyle = {[styles.textFieldStyle]}
                        placeholder = {STR_PASSWORD_CONFIRM_PLACE_HOLDER} 
                        placeholderTextColor = {ColorCustom.MAIN_COLOR_BLUE_OPACITY}
                        secureTextEntry={hiddenPassword}
                        onChangeText={(value) => props.setPasswordConfirm({value})}
                        value = {props.passwordConfirm}
                        multiline = {false}
                        >
                    </TextField>
                    </View>

                    
                </View> 
               
                {_renderErrorView()}
                <TouchableOpacity style = {stylesCommon.backButton} onPress = {() => backScreenFromRegisterScreen()}>
                        <Text style = {stylesCommon.titleButtonStyleBack}>{STR_BACK}</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {stylesCommon.continueButton} onPress = {() => checkExistEmail()}>
                        <Text style = {stylesCommon.titleButtonContinue}>{STR_CONTINUE}</Text>
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
        marginTop:"10%",
        paddingTop: 20,
        paddingBottom: 20,

    },

    containerPassword:{
        width: '90%',
        alignSelf:"center",
        marginTop:"5%",
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'center'

    },

    containerError:{
        width: '100%',
        alignSelf:"center",
        marginTop:0,
        height: "50%",
        flexDirection: "column"

    },

    textError: {
        width: "59%",
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
        marginTop: 20
    },


    textInput: {
        marginTop: 20,
        width: "85%",
        alignSelf: "center",
        borderBottomColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        borderBottomWidth: 1.5,
        color: "#6F8FA5",
        height: 40,
        fontSize: 18,
        fontWeight: "bold",
        
    },

    textFieldStyle: {
        width: '85%',  
        borderBottomColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,  
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

export default Register

