import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import { STR_ACCUEIL, RENCONTREZ_BUTTON, RENCONTREZ } from "../../utils/constantstring";
import { ColorCustom } from "../../utils/color";
import LoadingIndicator from '../styles/loadingIndicator'
import InfoUser from '../styles/infoUser'
import { EnumStatusCategory } from '../../utils/constant'
import { myHeight, myWidth } from "../../utils/dimension";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import HeaderNotification from "../styles/HeaderNotification"

export default function NotificationComponent(props) {

    const { showLoading, userInfo, checkPersonnal } = props;

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
            <View style={styles.containerViewAfterStatusBar}>
                <HeaderNotification name={STR_ACCUEIL} isBack={false} />
                <View style={styles.containerViewFlatListStyle}>
                    <View style={styles.contentGifStyle}>
                        {InfoUser(userInfo)}
                    </View>
                    <View style={styles.contentStyle}>
                        <Text style={styles.textAmoureStyle}>{RENCONTREZ}</Text>

                        <TouchableOpacity
                            style={styles.amicaleStyle}
                            onPress={checkPersonnal}
                        >
                            <Text style={styles.textAmicaleStyle}>{RENCONTREZ_BUTTON}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {renderLoading()}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: Platform.OS === "android" ? 0 : 20
    },

    contentStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
    },

    contentGifStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20
    },

    containerViewAfterStatusBar: {
        flex: 1,
    },

    containerViewFlatListStyle: {
        width: "100%",
        height: "90%",
        justifyContent: "center"
    },

    amicaleStyle: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        minHeight: 55,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    textAmicaleStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: ColorCustom.WHITE
    },

    textAmoureStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        marginVertical: 10,
    },
})