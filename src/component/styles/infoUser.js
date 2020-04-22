import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { STATUT, COMPATIBILITE } from "../../utils/constantstring";
import { myHeight, myWidth } from '../../utils/dimension'
import { ColorCustom } from "../../utils/color";
import icon_ring from '../../../res/icon_ring.png'
const initUser = {
    name: '',
    status: ''
}
const infoUser = (userInfo = initUser, partnerDiplayName = '', compatibilite = '') => {
    return (
        <View style={styles.roundStyle}>
            <ImageBackground
                source={icon_ring}
                style={styles.imageStyle}
            >
                <Text style={styles.textAmicaleStyle}>{userInfo.name}</Text>
                <Text style={styles.textAmicaleStyle}>{STATUT}<Text style={styles.statusStyle}> {userInfo.status}</Text></Text>
                {partnerDiplayName.length > 0 ? <Text style={styles.statusStyle}>{partnerDiplayName}</Text> : null}
                {compatibilite.length > 0 && <Text
                    style={styles.textAmicaleStyle}>{COMPATIBILITE}:
                <Text style={styles.textCompatibilyte}>{compatibilite}%</Text>
                </Text>}
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    roundStyle: {
        height: myWidth / 2,
        width: myWidth / 2,
        // borderRadius: myWidth / 4,
        // borderWidth: 1,
        // borderColor: ColorCustom.GLACIER,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },

    imageStyle: {
        height: myWidth / 2,
        width: myWidth / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textAmicaleStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: ColorCustom.WHITE
    },

    statusStyle: {
        fontSize: 13,
        color: ColorCustom.MAIN_COLOR_WHITE_OPACITY
    },

    textCompatibilyte: {
        fontSize: 13,
        color: ColorCustom.MAIN_COLOR_BLUE_OPACITY
    }
});

export default infoUser
