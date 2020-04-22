import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import { STR_RENDEZ_VOUS, STR_SUIVANT, STR_PARTNER_SUCCESS, STR_POSITION } from "../../utils/constantstring";
import { ColorCustom } from "../../utils/color";
import Sizings from "../../utils/sizings"
import { useNavigation } from "react-navigation-hooks";
import LoadingIndicator from '../styles/loadingIndicator'
import InfoUser from '../styles/infoUser'
import { EnumStatusCategory } from '../../utils/constant'
import { myHeight, myWidth } from "../../utils/dimension";
import HeaderNotification from "../styles/HeaderNotification"

export default function PositionComponent(props) {

    const { showLoading, userInfo, dataNotifi, position, nextScreen } = props;
    const { goBack, navigate } = useNavigation();

    const renderLoading = () => {
        if (showLoading) {
            return (<LoadingIndicator />)
        }
        return null
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <View style={styles.contentStyle}>
                <HeaderNotification name={STR_RENDEZ_VOUS} />
                {position ?
                    <View style={styles.contentStyle}>
                        <View style={[styles.contentStyle, { alignItems: 'center', justifyContent: 'center' }]}>
                            {InfoUser(userInfo, position.partnerDiplayName)}
                        </View>

                        <View style={[styles.contentStyle, { alignItems: 'center', }]}>
                            <Text>{STR_PARTNER_SUCCESS}</Text>

                            <Text style={styles.textAmoureStyle}>{STR_POSITION}<Text style={styles.textAmicaleStyle}>{position.addressName}</Text>
                                <Text style={styles.addressStyle}> {position.addressDetail}</Text>
                            </Text>

                            <TouchableOpacity
                                style={styles.amicaleStyle}
                                onPress={() => nextScreen('PlanTimeScreen')}
                            >
                                <Text style={styles.textAmicaleStyle}>{STR_SUIVANT}</Text>
                            </TouchableOpacity>
                        </View>
                    </View> : null}
            </View>
            {renderLoading()}
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
        fontSize: 15,
        fontWeight: "bold",
        color: ColorCustom.WHITE
    },

    textAmoureStyle: {
        fontSize: 15,
        color: ColorCustom.WHITE,
        textAlign: 'center',
        marginHorizontal: 25,
        marginVertical: 20,
    },

    addressStyle: {
        fontSize: 15,
        color: ColorCustom.MAIN_COLOR_BLUE
    },

    textDetailStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: ColorCustom.WHITE,
        marginVertical: 20,
        width: Sizings.percent_80,
        textAlign: 'center'
    },

    amicaleStyle: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        minHeight: 50,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
})