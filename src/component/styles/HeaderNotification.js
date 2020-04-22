import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import { ColorCustom } from "../../utils/color";
import Sizings from "../../utils/sizings"
import { useNavigation } from "react-navigation-hooks";
import { myHeight, myWidth } from "../../utils/dimension";
import iconSeting from '../../../res/ic_category/icon_setting.png'
import iconSetingColor from '../../../res/ic_category/icon_setting_color.png'

const initProps = {
    name: '',
    isBack: true,
}
export default function HeaderNotification(props = initProps) {
    const name = props.name;
    const isBack = props.isBack;
    const customColor = props.color ? true : false;

    const { goBack, navigate } = useNavigation();

    return (
        <View style={styles.containerViewTitileStyle}>
            {isBack &&
                <TouchableOpacity
                    onPress={() => goBack(null)}
                    style={styles.touchOpacityPrevStyle}
                >
                    <Image style={styles.iconBack} source={require('../../../res/ic_category/ic_previous.png')} />
                </TouchableOpacity>}

            <Text style={styles.textTtileStyle}>{name}</Text>

            <TouchableOpacity
                onPress={() => navigate('SettingStack')}
                style={styles.touchOpacitySettingStyle}
            >
                <Image style={styles.iconSettingStyle} source={!customColor ? iconSeting : iconSetingColor} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerViewTitileStyle: {
        width: Sizings.percent_100,
        height: Sizings.percent_10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    textTtileStyle: {
        alignSelf: "center",
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        fontSize: 15,
    },

    iconBack: {
        width: 20,
        height: 20,
        alignSelf: "center",
    },

    iconSettingStyle: {
        width: (myWidth * 8 / 100),
        height: (myWidth * 8.5 / 100),
        tintColor: ColorCustom.GLACIER,
        alignSelf: "center"
    },

    touchOpacitySettingStyle: {
        right: 10,
        position: "absolute",
    },

    touchOpacityPrevStyle: {
        left: 10,
        position: "absolute",
    },
})