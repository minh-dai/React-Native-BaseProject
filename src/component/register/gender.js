import React from 'react';
import { stylesCommon } from "../styles/styleCommon";
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { STR_ERROR, STR_ANNONCE_TRYING, STR_QUESTION_MY_GENDER, STR_BACK, STR_CONTINUE, STR_MAN, STR_WOMAN} from "../../utils/constantstring";
import { useState } from 'react';
import {ColorCustom} from "../../utils/color"
import {ErrorRegisterScreen} from "../../utils/constantstring";
function Gender(props){
    const [visibleError, setVisibleError] = useState(false);
    const [bg, setBg] = useState({
        bgMan: 'black',
        bgWoman: 'black'
      });
    const [textColor, setTextColor] = useState({
        textColorMan: 'white',
        textColorWoman: 'white'
    });
    const [gender, setGender] = useState(-1);

    const backScreenRegister = () => {
        props.backScreen();
    };

    const nextToGenderPartnerScreen = () => {
        if (gender == -1)
        {
            setVisibleError(true)
        }else{
            props.nextScreen(gender);
        }
       
    };
    
    const _renderErrorView =  () => {
        if (visibleError)
        {
           return( <View style = {styles.containerError}>
            <Text style = {styles.textError} >{ErrorRegisterScreen.STR_ERROR_SELECT}</Text> 
            <Text style = {styles.textAnnonce} >{STR_ANNONCE_TRYING} </Text>
           </View>)
        }else{
            return null
        } 
    }

    const _chooseGender = (gender) => {
        setVisibleError(false)
        setGender(gender);
        if (gender == 1)
        {
            setBg({
                ...bg,
                bgMan:"white",
                bgWoman: "black"
              });

              setTextColor({
                ...textColor,
                textColorMan:"black",
                textColorWoman: "white"
              });
        }else if ( gender == 2)
        {
            setBg({
                ...bg,
                bgMan:"black",
                bgWoman: "white"
              });

              setTextColor({
                ...textColor,
                textColorMan:"white",
                textColorWoman: "black"
              });
        }
    }

    //View Parent
        return (
            
            <View style={styles.container}>
                 <Text style = {stylesCommon.titleQuestionStyle}>{STR_QUESTION_MY_GENDER}</Text>

                <TouchableOpacity 
                        style = {[stylesCommon.selectBoxBorderPremier, {backgroundColor: bg.bgMan}]} 
                        activeOpacity={1.0} 
                        onPress = {() => _chooseGender(1)}
                        backgroundColor = "white">
                    <Text style = {[stylesCommon.textInSelectBoxStyle, {color: textColor.textColorMan}]}>{STR_MAN}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                        style = {[stylesCommon.selectBoxBorderSecond, {backgroundColor: bg.bgWoman}]} 
                        activeOpacity={1.0} 
                        onPress = {() => _chooseGender(2)}>
                    <Text style = {[stylesCommon.textInSelectBoxStyle, {color: textColor.textColorWoman}]}>{STR_WOMAN}</Text>
                </TouchableOpacity>

                {_renderErrorView()}

                <TouchableOpacity style = {stylesCommon.backButton} onPress = {backScreenRegister}>
                    <Text style = {stylesCommon.titleButtonStyleBack}>{STR_BACK}</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {stylesCommon.continueButton} onPress = {nextToGenderPartnerScreen}>
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
        flexDirection: "column"
        
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
        marginTop: 10
    },

    
})

export default Gender
