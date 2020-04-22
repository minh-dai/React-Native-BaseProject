import React from 'react';
import { stylesCommon } from "../styles/styleCommon";
import { View, StyleSheet, TextInput, Text, TouchableOpacity, ScrollView} from 'react-native';
import {STR_BACK, STR_TITLE_TERMS_DETAILS} from "../../utils/constantstring";
import { useState, useRef } from 'react';
import {ColorCustom} from "../../utils/color"
import {myWidth, myHeight} from "../../utils/dimension"
import LoadingIndicator from '../styles/loadingIndicator'
function TermsDetail(props){
    const {textCondtions, showLoading} = props;
    const backScreen = () => {
        props.backScreen();
    };
    const renderLoading = () => {
        if (showLoading)
        {
           return( <LoadingIndicator></LoadingIndicator>)
        }else{
            return null
        } 
    }
    //View Parent
        return (
            <View style={styles.container}>

                <Text style = {[stylesCommon.titleQuestionStyle, {marginTop:"15%"} ]}>{STR_TITLE_TERMS_DETAILS}</Text>

                <ScrollView style = {[styles.scrollView]}>
                    <Text style = {[styles.textCondition]}>{textCondtions}</Text>
                </ScrollView>
                
                
                <TouchableOpacity style = {stylesCommon.backButton} onPress = {backScreen}>
                    <Text style = {stylesCommon.titleButtonStyleBack}>{STR_BACK}</Text>
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
        flexDirection: "column"
        
    },

    scrollView: {
        marginTop: "10%",
        backgroundColor: 'black',
        marginBottom: "20%",
      },

    textCondition: {
        width: "100%",
        alignSelf: "center",
        paddingLeft:20,
        paddingRight:20,
        paddingBottom: 20,
        color: "white",
        fontSize: 18
    },


    
})

export default TermsDetail
