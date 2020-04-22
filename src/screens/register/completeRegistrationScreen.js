import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import CompleteRegistration from "../../component/register/completeRegistration";

function CompleteRegistrationScreen(props) {
    const { navigate } = useNavigation();
    const userInfor = useNavigationParam('userInfor')

    const moveNextScreen = () => {
        navigate("Start")
    }

    return (
        <CompleteRegistration
            userInfor={{name: userInfor.displayName, status: userInfor.status}}
            nextScreen={() => moveNextScreen()}
        />
    );
}
const mapStateToProps = () => {
    return {}
}
const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CompleteRegistrationScreen);