import React from 'react';
import { stylesCommon } from "../styles/styleCommon";
import { View, StyleSheet, Button, TextInput, Text, TouchableOpacity, Image} from 'react-native';
import { STR_NEW_PASSWORD_SENT, STR_BACK} from "../../utils/constantstring";
import { myWidth} from '../../utils/dimension'
import {ColorCustom} from '../../utils/color';
function ForgotPasswordConfirm(props){ 
    const backScreenLogin = () => {
        props.backScreenLogin();
    };

        return (
            <View style={styles.container} >
                 
                 <View style = {styles.containerAccount}>
                   <View style = {styles.circleShapeView}>
                         <Image source={require('../../../res/ic_check.png')} style = {styles.imageCheckStyle} />
                   </View>

                   <Text style = {styles.textTitleMessage}>
                       <Text>{STR_NEW_PASSWORD_SENT}</Text>
                        <Text style = {styles.textMail} >{"e-mail"}</Text>
                        
                   </Text>
                </View>
               
                <TouchableOpacity style = {stylesCommon.backButton} onPress = {backScreenLogin}>
                        <Text style = {stylesCommon.titleButtonStyleBack}>{STR_BACK}</Text>
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
    containerAccount:{
        width: '90%',
        alignSelf:"center",
        marginTop:"40%",
        paddingTop: 20,
        paddingBottom: 20,
        height: "100%",
    },

    circleShapeView: {
        width: (myWidth*45/100),
        height: (myWidth*45/100),
        borderRadius: (myWidth*45/200),
        backgroundColor: 'black',
        borderWidth: 3,
        borderColor: "#6F8FA5",
        justifyContent : "center",
        alignSelf: "center",
    },

    imageCheckStyle: {
        width : 90,
        height : 59,
        alignSelf: "center",
    },

    textTitleMessage: {
        fontSize : 18,
        fontWeight: "bold",
        color: 'white',
        width: "80%",
        marginHorizontal: 0,
        textAlign: "center",
        marginTop: 50,
        alignSelf: "center"
    },

    textMail: {
        fontSize : 18,
        fontWeight: "bold",
        color: ColorCustom.MAIN_COLOR_BLUE,
        width: "80%",
        marginHorizontal: 0,
        textAlign: "center",
        marginTop: 50,
        alignSelf: "center"
    },


  
})

export default ForgotPasswordConfirm