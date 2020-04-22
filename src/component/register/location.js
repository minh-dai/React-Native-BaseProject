import React from 'react';
import { stylesCommon } from "../styles/styleCommon";
import { View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';
import { STR_ANNONCE_LOCATION, STR_BACK, STR_CONTINUE, STR_PAYS, STR_VILLE, STR_CODEPOSTAL,
    STR_QUESTION_LOCATION, STR_SELECT_VILLE, STR_SELECT_COUNTRY, STR_SELECT_POSTCODE} from "../../utils/constantstring";
import { useState, useRef } from 'react';
import {ColorCustom} from "../../utils/color";
import {myHeight} from "../../utils/dimension";
import {CustomSinglePickerDialog}   from '../styles/customSinglePickerDialog';
import LoadingIndicator from '../styles/loadingIndicator'
function Location(props){
   
    const {countryInfo, villeInfo, codePostalInfo, showLoading} = props
    const backScreen = () => {
        props.backScreen();
    };

    const nextScreen = () => {
        props.nextScreen();
    };
    
    const _renderErrorView =  () => {
        return( <View style = {styles.containerError}>
            <Text style = {styles.textAnnonce} >{STR_ANNONCE_LOCATION} </Text>
           </View>)
    }

    function _onPressItemCountry(indexCountry){
        let nameCountry = props.listCountry[indexCountry].name;
        props.setCountryInfo({
            ...countryInfo,
            name: nameCountry,
            index: indexCountry,
            id : props.listCountry[indexCountry].id
          });
        props.setVisibleDialogCountry(false)
        
    }

    function _onPressItemVille(indexVille){
        let nameVille = props.listVille[indexVille].name;
        props.setVilleInfo({
            ...villeInfo,
            name: nameVille,
            index: indexVille,
            id : props.listVille[indexVille].id
          });
          props.setVisibleDialogVille(false)
    }

    function _onPressItemPostCode(indexCodePostal){
        let codePostal = props.listCodePostal[indexCodePostal].name;
        props.setCodePostalInfo({
            ...codePostalInfo,
            name: codePostal,
            index: indexCodePostal,
            id: props.listCodePostal[indexCodePostal].id,
            code: props.listCodePostal[indexCodePostal].code
          });
          console.log("IndexPostCode", indexCodePostal);
          props.setVisibleDialogCodePostal(false)
    }

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
                 <Text style = {stylesCommon.titleQuestionStyle}>
                    {STR_QUESTION_LOCATION}
                </Text>

                <View style={styles.containerInfomation}>
                    <TouchableOpacity 
                        style = {styles.containerText}
                        activeOpacity={1.0} 
                        onPress = {() => props.selectCountry()}>
                        <Text 
                            style = {[styles.textTitle, 
                            {color: (countryInfo.name == '' ) ? ColorCustom.MAIN_COLOR_BLUE_OPACITY : ColorCustom.MAIN_COLOR_BLUE}]}>
                            {(countryInfo.name == '' ) ? STR_PAYS : countryInfo.name}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.containerText}
                        activeOpacity={1.0} 
                        onPress = {() => props.selectVille() }>
                        <Text  style = {[styles.textTitle, 
                            {color: (villeInfo.name == '' ) ? ColorCustom.MAIN_COLOR_BLUE_OPACITY : ColorCustom.MAIN_COLOR_BLUE}]}>
                              {(villeInfo.name == '' ) ? STR_VILLE : villeInfo.name} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.containerText}
                        activeOpacity={1.0} 
                        onPress = {() => props.selectCodePostal() }>
                        <Text style = {[styles.textCodePostal, 
                               {color: (codePostalInfo.name == '' ) ? ColorCustom.MAIN_COLOR_BLUE_OPACITY : ColorCustom.MAIN_COLOR_BLUE}]}>
                                    {(codePostalInfo.name == '' ) ? STR_CODEPOSTAL : codePostalInfo.code + " " +codePostalInfo.name}</Text>
                    </TouchableOpacity>
                </View>
                
                {/*  Component Dialog */}
                <CustomSinglePickerDialog
                    title={STR_SELECT_COUNTRY}
                    scrolled = {true}
                    items={props.listCountry.map((row, index) => ({ value: index, label: row.name }))}
                    visible={props.visibleDialogCountry}
                    heightList = {myHeight*30/100}
                    onCancel = {() => props.setVisibleDialogCountry(false)}
                    _onPressItem = {_onPressItemCountry}
                 />

                <CustomSinglePickerDialog
                    title={STR_SELECT_VILLE}
                    scrolled = {true}
                    items={props.listVille.map((row, index) => ({ value: index, label: row.name}))}
                    visible={props.visibleDialogVille}
                    heightList = {myHeight*30/100}
                    onCancel = {() => props.setVisibleDialogVille(false)}
                    _onPressItem = {_onPressItemVille}
                 />

                <CustomSinglePickerDialog
                    title={STR_SELECT_VILLE}
                    scrolled = {true}
                    items={props.listCodePostal.map((row, index) => ({ value: index, label: (row.code + " " + row.name)}))}
                    visible={props.visibleDialogCodePostal}
                    heightList = {myHeight*30/100}
                    onCancel = {() => props.setVisibleDialogCodePostal(false)}
                    _onPressItem = {_onPressItemPostCode}
                 />

                 {_renderErrorView()}



                
                <TouchableOpacity style = {stylesCommon.backButton} onPress = {backScreen}>
                    <Text style = {stylesCommon.titleButtonStyleBack}>{STR_BACK}</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {stylesCommon.continueButton} onPress = {nextScreen}>
                    <Text style = {stylesCommon.titleButtonContinue}>{STR_CONTINUE}</Text>
                </TouchableOpacity>

                {renderLoading()}
            </View>
            
        );
}

const LONG_LIST = [
    "Afghanistan",
    "Aland Islands",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua And Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia And Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, Democratic Republic",
    "Cook Islands",
    "Costa Rica",
    "Cote D\"Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        height: "100%",
        flexDirection: "column"
        
    },

    containerInfomation: {
        marginTop: "10%",
        backgroundColor: 'black',
        flexDirection: "column"
    },

    containerText: {
        backgroundColor: "black",
        marginTop: (myHeight*7/100),
        alignSelf: "center",
        width: "70%",
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY
    },

    textTitle: {
        width: "100%",
        textAlign: "left",
        color: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        fontSize: 23
    },

    textCodePostal: {
        width: "100%",
        textAlign: "left",
        color: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        fontSize: 23
    },

    containerError:{
        width: '100%',
        alignSelf:"center",
        marginTop:0,
        height: "50%",
    },
    textAnnonce : {
        marginTop: "15%",
        width: "75%",
        fontSize: 14, 
        color: "white",
        textAlign: "center",
        justifyContent:'center',
        fontWeight: "bold",
        alignSelf:"center",
        opacity: 0.7
    },

    containerDialog:{
        width: '100%',
        alignSelf:"center",
        height: 400,
    },

    
})

export default Location
