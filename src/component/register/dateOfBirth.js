import React from 'react';
import { stylesCommon } from "../styles/styleCommon";
import { View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';
import { STR_ERROR_DATE_OF_BIRTHDAY, STR_ANNONCE_TRYING, STR_QUESTION_DATE_OF_BIRTH, STR_BACK, STR_CONTINUE, ErrorRegisterScreen} from "../../utils/constantstring";
import { useState } from 'react'
import DatePicker from 'react-native-datepicker'
function DateOfBirth(props){
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [visibleError, setVisibleError] = useState(false);
    const [msgError, setMsgError] = useState(false);
    const backScreen = () => {
        props.backScreen();
    };

    let dateOfBirthFormat = "";
    const nextScreen = () => {
        if(this.dateOfBirthFormat == "")
        {
            setVisibleError(true);
        }else{
            props.nextScreen(dateOfBirthFormat);
        }
        

    };
    
    const _renderErrorView =  () => {
        if (visibleError)
        {
           return( <View style = {styles.containerError}>
            <Text style = {styles.textError} >{msgError} </Text> 
           </View>)
        }else{
            return null
        } 
    }

    const _convertStringDate = (datePicker) => {
        setDateOfBirth(datePicker);
    }

    const _checkDateOfBirth = () => {
        
        //console.log("Date Of Birth", dateOfBirth);
        
        if(dateOfBirth == "")
        {
            setMsgError(ErrorRegisterScreen.STR_DATE_OF_BITH_EMPTY)
            setVisibleError(true);
            return;
        }
        
        const dateCurrent = new Date().getDate();
        const monthCurrent = new Date().getMonth() + 1;
        const yearCurrent = new Date().getFullYear();
        
        const dateOfBirthConvert = String(dateOfBirth).split('/');
        const myDate = parseInt(dateOfBirthConvert[0]);
        const myMonth = parseInt(dateOfBirthConvert[1]);
        const myYear = parseInt(dateOfBirthConvert[2]);
        
        
        let myAge = yearCurrent - myYear;
        console.log("Age", myAge);
        
        if (myAge < 0)
        {
           
            setMsgError(STR_ERROR_DATE_OF_BIRTHDAY)
            setVisibleError(true)
            return;
        }else if (myAge > 18){
            dateOfBirthFormat = dateOfBirthConvert[2] + "/" + dateOfBirthConvert[1] + "/" + dateOfBirthConvert[0];
            setVisibleError(false)
            nextScreen();
            return;
        }else{
            var month = monthCurrent - myMonth;
            if (month < 0 || (month === 0 && dateCurrent < myDate)) {
                myAge = myAge - 1
            }
            if (myAge >= 18)
            {
                dateOfBirthFormat = dateOfBirthConvert[2] + "/" + dateOfBirthConvert[1] + "/" + dateOfBirthConvert[0];
                setVisibleError(false)
                nextScreen();
            }else{
                setMsgError(STR_ERROR_DATE_OF_BIRTHDAY)
                setVisibleError(true)
            }
        }
        

    }
    //View Parent
        return (
            <View style={styles.container}>
                 <Text style = {[stylesCommon.titleQuestionStyle, {width: "60%", fontSize: 25}]}>{STR_QUESTION_DATE_OF_BIRTH}</Text>
                <TouchableOpacity style = {stylesCommon.backButton} onPress = {backScreen}>
                    <Text style = {stylesCommon.titleButtonStyleBack}>{STR_BACK}</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {stylesCommon.continueButton} onPress = {_checkDateOfBirth}>
                    <Text style = {stylesCommon.titleButtonContinue}>{STR_CONTINUE}</Text>
                </TouchableOpacity> 
                <DatePicker
                    style={{width: "80%", alignSelf:"center", marginTop : "20%"}}
                    mode="date"
                    date={dateOfBirth}
                    placeholder="JJ/MM/AAAA"
                    format="DD/MM/YYYY"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    showIcon= {false}
                    placeholderTextColor = "#6F8FA5"
                    customStyles={{
                        placeholderText:{
                            color: "#6F8FA5",
                            textAlign: "left",
                            width: "100%",
                            marginLeft: 10,
                            fontSize: 18,
                            opacity: 0.5,
                        },
                        dateText:{
                            color: "#6F8FA5",
                            textAlign: "left",
                            width: "100%",
                            marginLeft: 10,
                            fontSize: 18,
                        },
                        dateInput: {
                        borderWidth: 0,
                        borderBottomWidth: 1,
                        borderBottomColor: 'rgba(111,143,165, .5)',
                        }
                    }}
                onDateChange={(date) => {_convertStringDate(date)}} 
                />

                {_renderErrorView()}
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
        width: "70%",
        marginTop: "20%",
        fontSize: 18, 
        color: "red",
        alignSelf: "center",
        textAlign: "center"
        
    },
    
})

export default DateOfBirth
