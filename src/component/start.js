import React from 'react';
import {STR_LOGIN, STR_NAME_APPLICATION, STR_START, STR_TITLE} from '../utils/constantstring';
import { View, StyleSheet, Button, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import icon_app from '../../res/icon_app.png';
function Start(props){
        console.log("test " , props);
        moveToLogin = () => {
            props.moveToLogin();
        };

        getListQuestionForRegister = () => {
            props.getListQuestionForRegister();
        };

        return (
            <View style={styles.container} >
                <StatusBar backgroundColor="blue" barStyle="light-content" />

                <View style = {styles.containerViewTitlle}>
                    <Image source={icon_app} style={styles.imageIcon} />
                    <Text style = {styles.textNameApplication}>
                        {STR_NAME_APPLICATION}
                    </Text>
                </View>
                 <Text style = {styles.labelRegister}>
                        {STR_TITLE}
                    </Text>
                 <View style = {styles.containerStart}>
                    <TouchableOpacity style = {styles.buttonStyleRegister} onPress = {getListQuestionForRegister}>
                        <Text style = {styles.titleButtonRegisterStyle}>{STR_START}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonStyleLogin} onPress = {moveToLogin}>
                        <Text style = {styles.titleButtonLoginStyle}>{STR_LOGIN}</Text>
                    </TouchableOpacity>
                 </View>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        height: "100%",
        justifyContent: "center",
        flexDirection: "column"
    },
    containerStart: {
        backgroundColor: 'black',
        width: "100%",
        alignItems: 'center',
        paddingBottom: 20, 
        paddingTop: 20,
    },

    containerViewTitlle : {
        width: 'auto',
        height : 'auto',
        flexDirection : 'row',
        alignSelf:'center',
        position: 'absolute',
        top : '25%'
    },

    textNameApplication: {
        fontSize : 36,
        fontWeight: "bold",
        color: 'white',
        width: "auto",
        left: 10,
    },

    labelRegister: {
        top: "32%",
        fontSize : 20,
        color: '#6F8FA5',
        width: "100%",
        textAlign: "center",
        position:"absolute"
    },

    buttonStyleRegister: {
       width : "50%",
       backgroundColor:"white",
       borderRadius:25,
       borderWidth: 1,
       borderColor: "white",
       height: 55,
       justifyContent: "center"
    },

    buttonStyleLogin: {
        marginTop: 20,    
        //bottom : 30,
        //left: 30,
        width : "50%",
        backgroundColor:"black",
        borderRadius:25,
        borderWidth: 1,
        borderColor: "white",
        height: 55,
        justifyContent: "center"
        //position: "absolute",
        //alignSelf: 'center',
     },

    titleButtonLoginStyle: {
        textAlign: "center",
        fontSize : 20,
        fontWeight: "bold",
        color: 'white',
 
     },

     titleButtonRegisterStyle: {
        textAlign: "center",
        width:"100%",
        fontSize : 20,
        fontWeight: "bold",
        color: 'black',

     },

     imageIcon : {
         width : 60,
         height : (60*111)/178,
         alignSelf : 'center'
     }
})

export default Start