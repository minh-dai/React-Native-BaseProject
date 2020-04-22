import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigation } from "react-navigation-hooks";
import PhotoAndIdentity from "../../component/register/photoAndIdentity";
import ModelRegister from "../../model/ModelRegister";
import * as registerActions from '../../actions/registerAction';
import { bindActionCreators } from 'redux';

function PhotoAndIdentityScreen(props) {
    const { goBack, navigate } = useNavigation();
    const [isJoined, setIsJoined] = useState(false);

    const backScreen = () => {
        goBack();
    }

    const onSucsess = (response) => {
        navigate("CompleteRegistrationScreen", {userInfor: response.result});
    }

    const register = () => {
        let params = ModelRegister.getInstance().getParams();
        props.actions.register.registerNewAccount(params, onSucsess, onError);
    }

    const onError = (response) => {
        console.log("onError -> response", response);
    }

    return (
        <PhotoAndIdentity
            isJoined={isJoined}
            toggleJoin={() => setIsJoined(!isJoined)}
            backScreen={() => backScreen()}
            nextScreen={() => register()}
        />
    );
}
const mapStateToProps = () => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            register: bindActionCreators(registerActions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoAndIdentityScreen);