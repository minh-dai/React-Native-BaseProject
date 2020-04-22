import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import { STR_ACCUEIL, STR_EFFECTUER } from "../../../utils/constantstring";
import { ColorCustom } from "../../../utils/color";
import Sizings from "../../../utils/sizings"
import { useNavigation } from "react-navigation-hooks";
import { myHeight, myWidth } from "../../../utils/dimension";
import HeaderNotification from "../../styles/HeaderNotification"
import InfoUser from '../../styles/infoUser'

export default function FeedBackComponent(props) {
    const { data, userInfo } = props;
    const { goBack, navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <View style={styles.contentStyle}>
                <HeaderNotification name={STR_ACCUEIL} />

                <View style={styles.contentStyle}>
                    <View style={[styles.contentStyle, { justifyContent: 'flex-end' }]}>
                        {InfoUser(userInfo, data.partnerDiplayName, data.compatibilite)}
                    </View>

                    <View style={[styles.contentStyle]}>

                        <TouchableOpacity
                            onPress={() => navigate('RuptureScreen')}
                            style={styles.amicaleStyle}
                        >
                            <Text style={styles.textAmicaleStyle}>{STR_EFFECTUER}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorCustom.BLACK,
        paddingTop: Platform.OS === "android" ? 0 : 20
    },

    contentStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textAmicaleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: ColorCustom.PIZAZZ
    },

    amicaleStyle: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        fontWeight: "bold",
        paddingHorizontal: 15,
    },
})