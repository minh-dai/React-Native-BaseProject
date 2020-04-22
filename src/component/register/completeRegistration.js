import React from 'react';
import { stylesCommon } from '../styles/styleCommon';
import { ColorCustom } from '../../utils/color';
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import {
    STR_CONTINUE,
    STR_COMPLETE_REGISTRATION_NOTIFY,
    STR_COMPLETE_REGISTRATION_EMAIL_CONFIRMATION
} from '../../utils/constantstring';
import InfoUser from '../styles/infoUser';

function CompleteRegistration(props) {
    const {userInfor} = props

    const nextScreen = () => {
        props.nextScreen();
    };

    return (
        <View style={styles.container}>
            <View style={styles.pageBody}>
                <View style={styles.userInfor}>
                    {InfoUser(userInfor)}
                </View>
                <View>
                <Text style={[styles.description, stylesCommon.boldText]}>{STR_COMPLETE_REGISTRATION_NOTIFY}</Text>
                <Text style={styles.description}>{STR_COMPLETE_REGISTRATION_EMAIL_CONFIRMATION}</Text>
                </View>
            </View>

            <TouchableOpacity
                style={stylesCommon.continueButton}
                onPress={nextScreen}>
                <Text style={stylesCommon.titleButtonContinue}>{STR_CONTINUE}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorCustom.BLACK,
        paddingTop: Platform.OS == 'android' ? 0 : 20,
    },
    pageBody: {
        paddingHorizontal: 40,
        paddingTop: 40,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    description: {
        textAlign: "center",
        fontSize: 18,
        paddingHorizontal: 35,
        paddingBottom: 35,
        color: ColorCustom.WHITE,
    },
    userInfor: {
        marginTop: 50,
        marginBottom: 70,
    }
});

export default CompleteRegistration;
