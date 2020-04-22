import React from 'react';
import { stylesCommon } from "../styles/styleCommon";
import { View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';
import { STR_ERROR_TERMS, STR_ANNONCE_TRYING, STR_QUESTION_TERMS_CONDITIONS, STR_CERTIFICATE, STR_BACK, STR_CONTINUE, STR_DATA_SENSITIVE} from "../../utils/constantstring";
import { useState, useRef } from 'react';
import {ColorCustom} from "../../utils/color"
import {myWidth, myHeight} from "../../utils/dimension"
import ParsedText from 'react-native-parsed-text';

const typeCondition = {
    conditionNormal: 1,
    conditionData: 2,
}
function TermsAndConditions(props){
    const [visibleError, setVisibleError] = useState(false)
    const [conditionChecked, setCondition] = useState({
        conditionTerm: false,
        dataSensitive: false
      });

    const backScreen = () => {
        props.backScreen();
    };

    const nextScreen = () => {
        if (conditionChecked.conditionTerm == false || conditionChecked.dataSensitive == false)
        {
            setVisibleError(true);
            return;
        }
        props.nextScreen();
    };
    
    const _renderErrorView =  () => {
        if (visibleError)
        {
           return( <View style = {styles.containerError}>
            <Text style = {styles.textError} >{STR_ERROR_TERMS} </Text> 
           </View>)
        }else{
            return null
        } 
    }

    const dataSensitive = () =>{
        props.moveToDetailTermsDataSensitiveScreen();
    }

    const conditionTerms = () =>{
        props.moveToDetailTermsScreen();
    }

    


    const _acceptCondition = (condition) => {
        if (condition == typeCondition.conditionNormal)
        {
            setCondition({
                ...conditionChecked,
                conditionTerm:!conditionChecked.conditionTerm,
                dataSensitive: conditionChecked.dataSensitive 
              });

        }else if ( condition == typeCondition.conditionData)
        {
            setCondition({
                ...conditionChecked,
                conditionTerm:conditionChecked.conditionTerm,
                dataSensitive: !conditionChecked.dataSensitive 
              });
        }
    }

    //View Parent
        return (
            <View style={styles.container}>
                 <Text style = {stylesCommon.titleQuestionStyle}>{STR_QUESTION_TERMS_CONDITIONS}</Text>
                 <View style = {styles.containerCondition}>

                    <TouchableOpacity 
                        style = {[styles.selectBox, {backgroundColor: conditionChecked.conditionTerm ? ColorCustom.MAIN_COLOR_BLUE : 'black'}]}  
                        activeOpacity={1.0} 
                        onPress = {() => _acceptCondition(typeCondition.conditionNormal)}>
                    </TouchableOpacity>
                    <ParsedText
                        style={styles.textConditionCommon}
                        parse={
                        [
                         {pattern: /conditions generals/, 
                          style: styles.textCondition,
                          onPress: conditionTerms
                        },
                        ]
                        }
                        childrenProps={{allowFontScaling: false}}>
                        {STR_CERTIFICATE}
                    </ParsedText>
                </View>

                <View style = {styles.containerDataSensitive}>

                    <TouchableOpacity 
                        style = {[styles.selectBox, {backgroundColor: conditionChecked.dataSensitive ? ColorCustom.MAIN_COLOR_BLUE : 'black'}]}  
                        activeOpacity={1.0} 
                        onPress = {() => _acceptCondition(typeCondition.conditionData)}
                        >
                    </TouchableOpacity>
                    <ParsedText
                        style={styles.textConditionCommon}
                        parse={
                        [
                         {pattern: /mes donnees sensibles/, 
                          style: styles.textCondition,
                          onPress: dataSensitive,
                         }
                        ]
                        }
                        childrenProps={{allowFontScaling: false}}>
                        {STR_DATA_SENSITIVE}
                    </ParsedText>
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
        flexDirection: "column"
        
    },

    containerCondition: {
        marginTop: (myHeight*10/100),
        backgroundColor: 'black',
        flexDirection: "row",
        width: "100%",
        alignSelf: "center",
        backgroundColor:"black",
        paddingLeft:20,
        paddingRight:20,
    },

    containerDataSensitive: {
        marginTop: (myHeight*5/100),
        backgroundColor: 'black',
        flexDirection: "row",
        width: "100%",
        alignSelf: "center",
        backgroundColor:"black",
        paddingLeft:20,
        paddingRight:20,
        
    },

    selectBox : {
        width: (myWidth*5/100),
        height: (myWidth*5/100),
        borderRadius: (myWidth*5/200),
        borderColor : ColorCustom.MAIN_COLOR_BLUE,
        borderWidth : 1,
        alignSelf: "center",
    },


    containerError:{
        width: '80%',
        alignSelf:"center",
        marginTop:0,
        height: "50%",
    },

    textError: {
        width: "90%",
        marginTop: "50%",
        fontSize: 16, 
        color: "#cc6600",
        textAlign: "center",
        alignSelf: "center",
        fontWeight:'bold',
        
    },

    textAnnonce : {
        width: "100%",
        fontSize: 16, 
        color: "#cc6600",
        textAlign: "center",
        justifyContent:'center',
        fontWeight: "bold",
    },

    textCondition: {
        color: 'white',
        fontWeight:'bold',
        fontSize: 18,
    },

    textConditionCommon: {
        marginLeft: 20,
        color: ColorCustom.MAIN_COLOR_WHITE_OPACITY,
        fontSize: 17,
        flexWrap:"wrap",
        width: "80%"
      },

    
})

export default TermsAndConditions
