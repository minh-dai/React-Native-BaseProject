import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, } from 'react-native';
import { STR_CONFIRMER, STR_BACK, STR_DELETE_FEED, STR_FEED_CONFIRMER, STR_RUPTURE } from "../../../utils/constantstring";
import { ColorCustom } from "../../../utils/color";
import Sizings from "../../../utils/sizings"
import { useNavigation } from "react-navigation-hooks";
import { myHeight, myWidth } from "../../../utils/dimension";
import HeaderNotification from "../../styles/HeaderNotification"
import InfoUser from '../../styles/infoUser'

export default function RuptureComponent(props) {
    const { nextScreen, userInfo, data } = props;
    const { goBack, navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <View style={styles.contentStyle}>
                <HeaderNotification name={STR_RUPTURE} isBack={true} />

                <View style={styles.contentStyle}>
                    <View style={[styles.contentStyle, { justifyContent: 'flex-end' }]}>
                        {InfoUser(userInfo, '', data.compatibilite)}
                    </View>

                    <View style={styles.contentStyle}>

                        <View style={{ width: Sizings.percent_60, marginTop: 20 }}>
                            <Text style={styles.textDetailStyle}>
                                <Text style={[styles.textDetailStyle, { color: ColorCustom.MAIN_COLOR_BLUE_OPACITY }]}>{data.partnerDiplayName} </Text>
                                {STR_DELETE_FEED}
                            </Text>
                        </View>
                        <Text style={styles.textAmicaleStyle}>{STR_FEED_CONFIRMER}</Text>

                        <TouchableOpacity
                            onPress={() => nextScreen('FavoriteScreen')}
                            style={styles.amoureuseStyle}
                        >
                            <Text style={styles.textAmoureStyle}>{STR_CONFIRMER}</Text>
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
        alignItems: 'center',
    },

    textAmicaleStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: ColorCustom.WHITE
    },

    textAmoureStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: ColorCustom.BLACK
    },

    textDetailStyle: {
        fontSize: 14,
        color: ColorCustom.WHITE,
    },

    amoureuseStyle: {
        backgroundColor: ColorCustom.WHITE,
        borderRadius: 20,
        height: 50,
        width: Sizings.deviceWidth / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    amicaleStyle: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        height: 50,
        width: Sizings.deviceWidth / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

})