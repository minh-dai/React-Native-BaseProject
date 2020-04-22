import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import { STR_EN_RECHERCHE, STR_TEMPS_D_ATTENTE, STR_RECHERCHE_EN_COURS } from "../../utils/constantstring";
import { ColorCustom } from "../../utils/color";
import Sizings from "../../utils/sizings"
import { useNavigation } from "react-navigation-hooks";
import { myHeight, myWidth } from "../../utils/dimension";
import HeaderNotification from "../styles/HeaderNotification"
import chargement from "../../../res/chargement.gif"

export default function LoadingPersonalComponent(props) {
    const { goBack, navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <View style={styles.contentStyle}>
                <HeaderNotification name={STR_EN_RECHERCHE} isBack={false}/>

                <View style={styles.contentStyle}>
                    <View style={[styles.contentStyle, { alignItems: 'center', justifyContent: 'center' }]}>
                        <Image source={chargement} style={styles.chargementStyle} />
                    </View>

                    <View style={[styles.contentStyle, { alignItems: 'center', }]}>

                        <Text style={styles.textAmoureStyle}>{STR_RECHERCHE_EN_COURS}</Text>
                        <Text style={styles.textAmicaleStyle}>{STR_TEMPS_D_ATTENTE}</Text>
                        <Text style={styles.textNumberStyle}>Environ 7 jours</Text>
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
    },

    textAmicaleStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: ColorCustom.WHITE,
        marginTop: 10,
    },

    textNumberStyle:{
        fontSize: 13,
        color: ColorCustom.WHITE,
    },

    textAmoureStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: ColorCustom.MAIN_COLOR_BLUE,
        marginVertical: 10,
    },

    chargementStyle: {
        height: myHeight / 2,
        width: myWidth,
        marginTop: -50,
    },
})