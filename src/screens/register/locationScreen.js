import React from 'react';
import Location   from "../../component/register/location";
import * as registerActions from '../../actions/registerAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import { useState, useEffect } from 'react';
import ModelRegister from "../../model/ModelRegister";
function LocationScreen(props){
    
    useEffect(() => {
        console.log("TEST FIRST TIME");
    }, []);

    const {goBack, navigate} = useNavigation();
    const [visibleDialogCountry, setVisibleDialogCountry] = useState(false);
    const [visibleDialogVille, setVisibleDialogVille] = useState(false);
    const [visibleDialogCodePostal, setVisibleDialogCodePostal] = useState(false);

    const [arrItemCountry, setArrItemCountry] = useState([]);
    const [arrItemVille, setArrayItemVille] = useState([]);
    const [arrItemPostCode, setArrauItemPostCode] = useState([]);

    const [showLoading, setShowLoading] = useState(false);

    const [countryInfo, setCountryInfo] = useState({
        name: '',
        index: -1,
        id: '',
      });

    const [villeInfo, setVilleInfo] = useState({
        name: '',
        index: -1,
        id: '',
     });

    const [codePostalInfo, setCodePostalInfo] = useState({
        name: '',
        index: -1,
        id: '',
        code: '',
    });
    

    const backScreen = () =>{
        goBack();
    }
    const moveNextScreen = () => {
        if (codePostalInfo.id != '')
        {
            ModelRegister.getInstance().setPostalCodeId(codePostalInfo.id);
            console.log("Params, ",  ModelRegister.getInstance().getParams() )
            navigate("DateOfBirthScreen");
        }
        
    }

    const selectCountry = () => {
        console.log("array", arrItemCountry);
        if(arrItemCountry.length == 0)
        {
            setShowLoading(true)
            props.actions.register.getCountry(getListCountryOnSuccess, getListCountryOnError);
        }else{
            setVisibleDialogCountry(true)
        }
        
    }

    const selectVille = () =>
    {
        console.log("Select ville", countryInfo.id);
        
        if(countryInfo.id != '')
        {
            setShowLoading(true)
            const params = {countryId : countryInfo.id};
            props.actions.register.getVille(params, getListVilleOnSuccess, getListCountryOnError);
        }else{
           
        }
    }

    const selectCodePostal = () => {

        if(villeInfo.id != '')
        {
            setShowLoading(true)
            const params = {cityId : villeInfo.id};
            props.actions.register.getPostCode(params, getListCodePostalOnSuccess, getListCodePostalnError);
        }else{

        }
    }

    const getListCountryOnSuccess = (response) =>
    {
        setShowLoading(false)
        let tmpArrItemCountry = [];
        for (let i=0; i < response.result.length; i++) {
            tmpArrItemCountry.push(response.result[i]);
        }
        setVisibleDialogCountry(true)
        setArrItemCountry(tmpArrItemCountry);
    }

    const getListCountryOnError = (response) =>
    {
        setShowLoading(false);               
    }

    const getListVilleOnSuccess = (response) =>
    {
        setShowLoading(false)
        let tmpArrItemVille = [];
        for (let i=0; i < response.result.length; i++) {
            tmpArrItemVille.push(response.result[i]);
        }
        setVisibleDialogVille(true)
        setArrayItemVille(tmpArrItemVille);
    }

    const getListVilleOnError = (response) =>
    {
        setShowLoading(false)
    }

    const getListCodePostalOnSuccess = (response) =>
    {
        setShowLoading(false)
        let tmpArrItemPostCode= [];
        for (let i=0; i < response.result.length; i++) {
            tmpArrItemPostCode.push(response.result[i]);
        }
        setVisibleDialogCodePostal(true)
        setArrauItemPostCode(tmpArrItemPostCode);
    }

    const getListCodePostalnError = (response) =>
    {
        setShowLoading(false)
    }

        return (
            <Location backScreen = {backScreen} 
                nextScreen = {moveNextScreen} 
                
                selectCountry = {selectCountry}
                selectVille = {selectVille}
                selectCodePostal = {selectCodePostal}
                
                listCountry = {arrItemCountry}
                listVille = {arrItemVille}
                listCodePostal = {arrItemPostCode}

                visibleDialogCountry = {visibleDialogCountry}
                setVisibleDialogCountry = {setVisibleDialogCountry}
                
                visibleDialogVille = {visibleDialogVille}
                setVisibleDialogVille = {setVisibleDialogVille}
                
                visibleDialogCodePostal = {visibleDialogCodePostal}
                setVisibleDialogCodePostal = {setVisibleDialogCodePostal}

                setCountryInfo = {setCountryInfo}
                setVilleInfo = {setVilleInfo}
                setCodePostalInfo = {setCodePostalInfo}

                countryInfo = {countryInfo}
                villeInfo = {villeInfo}
                codePostalInfo = {codePostalInfo}

                showLoading = {showLoading}

                >
            </Location>
        );
}
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            register: bindActionCreators(registerActions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationScreen);