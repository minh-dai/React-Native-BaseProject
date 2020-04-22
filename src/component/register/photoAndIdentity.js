import React from 'react';
import { stylesCommon } from '../styles/styleCommon';
import { ColorCustom } from '../../utils/color';
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from "react-navigation-hooks";
import {
    STR_PHOTOS_AND_IDENTITY,
    STR_JOIN,
    STR_JOIN_LATER,
    STR_PHOTOS_AND_IDENTITY_TOP_DES,
    STR_PHOTOS_AND_IDENTITY_MID_DES,
    STR_PHOTOS_AND_IDENTITY_BOT_DES,
    STR_BACK,
    STR_CONTINUE,
} from '../../utils/constantstring';
import ParsedText from 'react-native-parsed-text';

function PhotoAndIdentity(props) {
    const { goBack, navigate } = useNavigation();

    const { isJoined } = props

    const backScreen = () => {
        props.backScreen();
    };

    const nextScreen = () => {
        props.nextScreen();
    };

    const goToUpload = () => {
        // To Do
        navigate('PhotoScreen', { register: 'register' })
    }

    const renderContinueButton = () => {
        if (isJoined) {
            return (
                <TouchableOpacity
                    style={stylesCommon.continueButton}
                    onPress={goToUpload}>
                    <Text style={stylesCommon.titleButtonContinue}>{STR_CONTINUE}</Text>
                </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity
                style={styles.joinLaterButton}
                onPress={nextScreen}>
                <Text style={styles.joinLaterButtonText}>{STR_JOIN_LATER}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={stylesCommon.titleQuestionStyle}>{STR_PHOTOS_AND_IDENTITY}</Text>

            <View style={styles.pageBody}>
                <Text style={[styles.description, styles.topDescription]}>{STR_PHOTOS_AND_IDENTITY_TOP_DES}</Text>

                <ParsedText
                    style={[styles.description, styles.midDescription]}
                    parse={
                        [
                            {
                                pattern: /plan moyen/,
                                style: stylesCommon.underlineText,
                            },
                            {
                                pattern: /plan américain/,
                                style: stylesCommon.underlineText,
                            },
                            {
                                pattern: /plan rapproché/,
                                style: stylesCommon.underlineText,
                            },
                            {
                                pattern: /720x1080/,
                                style: { color: ColorCustom.MAIN_COLOR_BLUE },
                            }
                        ]
                    }
                    childrenProps={{ allowFontScaling: false }}>
                    {STR_PHOTOS_AND_IDENTITY_MID_DES}
                </ParsedText>

                <TouchableOpacity style={[styles.joinButton, isJoined ? styles.activeJoinButton : {}]} onPress={() => { props.toggleJoin() }}>
                    <Text style={[styles.joinButtonText, isJoined ? styles.activeJoinButtonText : {}]}>{STR_JOIN}</Text>
                </TouchableOpacity>

                <ParsedText
                    style={[styles.description, styles.bottomDescription]}
                    parse={
                        [
                            {
                                pattern: /strictement confidentiels/,
                                style: stylesCommon.underlineText,
                            }
                        ]
                    }
                    childrenProps={{ allowFontScaling: false }}>
                    {STR_PHOTOS_AND_IDENTITY_BOT_DES}
                </ParsedText>
            </View>

            <TouchableOpacity style={stylesCommon.backButton} onPress={backScreen}>
                <Text style={stylesCommon.titleButtonStyleBack}>{STR_BACK}</Text>
            </TouchableOpacity>

            {renderContinueButton()}
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
        fontSize: 14
    },
    topDescription: {
        color: ColorCustom.GRAY,

        marginBottom: 15
    },
    midDescription: {
        color: ColorCustom.WHITE,
        marginBottom: 50
    },
    bottomDescription: {
        color: ColorCustom.MAIN_COLOR_BLUE,
    },
    joinButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        borderWidth: 1,
        width: 150,
        height: 60,
        borderRadius: 25,
        marginBottom: 25
    },
    joinButtonText: {
        color: ColorCustom.WHITE,
        fontSize: 22
    },
    activeJoinButton: {
        backgroundColor: ColorCustom.WHITE,
    },
    activeJoinButtonText: {
        color: ColorCustom.BLACK
    },
    joinLaterButton: {
        ...stylesCommon.continueButton,
        width: '50%',
    },
    joinLaterButtonText: {
        ...stylesCommon.titleButtonContinue,
    }
});

export default PhotoAndIdentity;
