import React from 'react';
import { stylesCommon } from "../styles/styleCommon";
import { View, StyleSheet, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { STR_EMAIL_PLACE_HOLDER, STR_PASSWORD_PLACE_HOLDER, STR_FORGOT_PASSWORD, 
    STR_BACK, STR_CONTINUE, STR_TITLE_LOGIN, STR_ERROR, STR_ANNONCE_TRYING} from "../../utils/constantstring";
import { useState, useEffect } from 'react';
import { ColorCustom } from '../../utils/color';
import LoadingIndicator from '../styles/loadingIndicator';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Login(props){ 
    const {showLoading} = props
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [hiddenPassword, setHiddenPassword] = useState(true);
    const [visibleIcon, setVisibleIcon] = useState(false);
    
    useEffect(() => {
        if(user.password == '' || user.password.length <= 0)
        {
            setVisibleIcon(false);
        } else{
            setVisibleIcon(true);
        }
     }, [user.password]);

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
        } else{
            return null;
        }
    }

    const backScreenFromLoginScreen = () => {
        props.backScreen();
    };

    const login = () => {
        props.login(user.email, user.password);
    };

    const forgotPassword = () => {
        props.forgotPassword();
    }
    
    const _renderErrorView =  () => {
        if (props.visibleError)
        {
           return( <View style = {styles.containerError}>
            <Text style = {styles.textError} >{props.strMessage} </Text> 
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
            <View style={styles.container}>
                 
                 <View style = {styles.containerAccount}>
                    <Text style = {styles.textNameApplication}>
                        {STR_TITLE_LOGIN}
                     </Text>
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={STR_EMAIL_PLACE_HOLDER}
                        placeholderTextColor = {ColorCustom.MAIN_COLOR_BLUE_OPACITY}
                        onChangeText = {(value) => setUser({...user, email: value})}
                    />
                    <View>
                        <TextInput
                            style={[styles.textInput]}
                            secureTextEntry={hiddenPassword}
                            placeholder={STR_PASSWORD_PLACE_HOLDER}
                            placeholderTextColor = {ColorCustom.MAIN_COLOR_BLUE_OPACITY}
                            onChangeText = {(value) => setUser({...user, password: value})}
                            />
                        {renderIcon()}
                    </View>
                    <Text style = {styles.textForgotPassword} onPress = {forgotPassword} >
                        {STR_FORGOT_PASSWORD}
                    </Text>
                </View>
                {_renderErrorView()}

                <TouchableOpacity style = {stylesCommon.backButton} onPress = {backScreenFromLoginScreen}>
                        <Text style = {stylesCommon.titleButtonStyleBack}>{STR_BACK}</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {stylesCommon.continueButton} onPress = {login}>
                        <Text style = {stylesCommon.titleButtonContinue}>{STR_CONTINUE}</Text>
                </TouchableOpacity>
                {renderLoading()}

            </View>
        );
      

}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
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


    textNameApplication: {
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

    textForgotPassword: {
        marginTop: 30,
        fontSize: 18, 
        fontWeight: "bold",
        color: "#cc6600",
        alignSelf: "center",
    },
    icon: {
        position: 'absolute',
        top: 28,
        right: 0
    }
})

export default Login

