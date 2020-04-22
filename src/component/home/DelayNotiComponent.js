import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';
import { COMPATIBILITE, AMOUREUSE, DETAIL_AMOUREUSE } from "../../utils/constantstring";
import { ColorCustom } from "../../utils/color";
import Sizings from "../../utils/sizings"
import { useNavigation } from "react-navigation-hooks";
import InfoUser from '../styles/infoUser'
import { EnumStatusCategory } from '../../utils/constant'
import { myHeight, myWidth } from "../../utils/dimension";
import HeaderNotification from "../styles/HeaderNotification"

export default function DelayNotiComponent(props) {

    const { userInfo, notifi, setIsShowDelay } = props;
    const { goBack, navigate } = useNavigation();

    return (
        <View style={styles.containerViewAfterStatusBar}>
            <HeaderNotification name={COMPATIBILITE} isBack={true} />

            <View style={styles.contentStyle}>

                {InfoUser(userInfo, notifi.AnotherGuest)}

                <Text style={styles.textDetailStyle}>{notifi.messagehidden}</Text>

                <TouchableOpacity
                    onPress={() => setIsShowDelay(false)}
                    style={styles.amoureuseStyle}
                >
                    <Text style={styles.textAmoureStyle}>{AMOUREUSE}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorCustom.BLACK,
    },

    containerViewAfterStatusBar: {
        flex: 1,
    },

    contentStyle: {
        flex: 1,
        alignItems: 'center'
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

    amoureuseStyle: {
        backgroundColor: ColorCustom.WHITE,
        borderRadius: 20,
        minHeight: 50,
        width: Sizings.percent_50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Sizings.percent_15,
    },

    textDetailStyle: {
        fontSize: 13,
        fontWeight: "bold",
        color: ColorCustom.WHITE,
        textAlign: 'center',
        marginTop: 20,
        marginHorizontal: 20
    }
})