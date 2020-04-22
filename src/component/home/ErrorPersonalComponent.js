import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import { COMPATIBILITE, STR_PERSONNALISER, STR_BACK, STR_ERREUR, STR_ERREUR_DETAIL } from "../../utils/constantstring";
import { ColorCustom } from "../../utils/color";
import Sizings from "../../utils/sizings"
import { useNavigation } from "react-navigation-hooks";
import { myHeight, myWidth } from "../../utils/dimension";
import HeaderNotification from "../styles/HeaderNotification"

export default function ErrorPersonalComponent(props) {
    const { goBack, navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <View style={styles.contentStyle}>
                <HeaderNotification name={COMPATIBILITE} />

                <View style={styles.contentStyle}>
                    <View style={[styles.contentStyle, { alignItems: 'center', justifyContent: 'center' }]}>

                        <Text style={styles.titleStyle}>{STR_ERREUR}</Text>

                        <Text style={styles.detailStyle}>{STR_ERREUR_DETAIL}</Text>

                    </View>

                    <View style={[styles.contentStyle, { alignItems: 'center', }]}>

                        <TouchableOpacity
                            style={styles.amoureuseStyle}
                            onPress={() => navigate('PersonalTab')}
                        >
                            <Text style={styles.textAmoureStyle}>{STR_PERSONNALISER}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.amicaleStyle}
                            onPress={() => goBack()}
                        >
                            <Text style={styles.textAmicaleStyle}>{STR_BACK}</Text>
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
    },

    roundStyle: {
        height: myWidth / 2,
        width: myWidth / 2,
        borderRadius: myWidth / 4,
        borderWidth: 1,
        borderColor: ColorCustom.GLACIER,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Sizings.percent_20
    },

    textAmicaleStyle: {
        fontSize: 13,
        fontWeight: "bold",
        color: ColorCustom.WHITE
    },

    textAmoureStyle: {
        fontSize: 13,
        fontWeight: "bold",
        color: ColorCustom.BLACK
    },

    textDetailStyle: {
        fontSize: 13,
        fontWeight: "bold",
        color: ColorCustom.WHITE,
        marginVertical: 20,
        width: Sizings.percent_80,
        textAlign: 'center'
    },

    amoureuseStyle: {
        backgroundColor: ColorCustom.WHITE,
        borderRadius: 20,
        minHeight: 50,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "bold",
    },

    amicaleStyle: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        minHeight: 50,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        fontWeight: "bold",
    },

    titleStyle: {
        fontSize: 20,
        color: ColorCustom.PIZAZZ,
        marginVertical: 10,
    },

    detailStyle: {
        fontSize: 15,
        color: ColorCustom.WHITE,
        marginVertical: 10,
        width: Sizings.percent_70,
        textAlign: 'center'
    }
})