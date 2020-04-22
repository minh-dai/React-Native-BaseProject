import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import { COMPATIBILITE, STR_SUIVANT, STR_PARTNER_SUCCESS, PARTENRAIRE_TROUVE, COMPATIBILITE_UPPERCASE } from "../../utils/constantstring";
import { ColorCustom } from "../../utils/color";
import Sizings from "../../utils/sizings"
import { useNavigation } from "react-navigation-hooks";
import LoadingIndicator from '../styles/loadingIndicator'
import InfoUser from '../styles/infoUser'
import { EnumStatusCategory } from '../../utils/constant'
import { myHeight, myWidth } from "../../utils/dimension";
import HeaderNotification from "../styles/HeaderNotification"

export default function PartnerSuccessComponent(props) {

    const { showLoading, userInfo, dataNotifi, _nextScreenWithData} = props;
    const { goBack, navigate } = useNavigation();

    let data;
    let userMatchingPoint;
    let maxPoint;

    if (dataNotifi) {
        maxPoint = dataNotifi.overalPointing.maxPoint;
        userMatchingPoint = dataNotifi.overalPointing.userMatchingPoint;
        data = Math.round(userMatchingPoint / maxPoint * 100);
    }

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
                <HeaderNotification name={PARTENRAIRE_TROUVE} />

                <View style={styles.contentStyle}>
                    <View style={[styles.contentStyle, { alignItems: 'center', justifyContent: 'center' }]}>
                        {InfoUser(userInfo, dataNotifi.AnotherGuest)}
                    </View>

                    <View style={[styles.contentStyle, { alignItems: 'center', }]}>
                        <Text style={styles.textDetailStyle}>{STR_PARTNER_SUCCESS}</Text>
                        <Text
                            style={[styles.textDetailStyle, { color: ColorCustom.WHITE, fontSize: 15 }]}
                            >{COMPATIBILITE_UPPERCASE} : <Text style={styles.textDetailValuesStyle}>{data} %</Text>
                        </Text>

                        <TouchableOpacity
                            onPress={() => _nextScreenWithData('PositionScreen')}
                            style={styles.amicaleStyle}
                        >
                            <Text style={styles.textAmicaleStyle}>{STR_SUIVANT}</Text>
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
        backgroundColor: ColorCustom.BLACK,
        paddingTop: Platform.OS === "android" ? 0 : 20
    },

    contentStyle: {
        flex: 1,
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
        color: ColorCustom.WHITE,
        width: Sizings.percent_70,
        textAlign: 'center'
    },

    amoureuseStyle: {
        backgroundColor: ColorCustom.WHITE,
        borderRadius: 20,
        minHeight: 50,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    amicaleStyle: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        minHeight: 50,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },

    textDetailValuesStyle: {
        fontSize: 30,
        fontWeight: "bold",
        color: ColorCustom.MAIN_COLOR_BLUE,
        textAlign: 'center',
        marginTop: 20,
        marginHorizontal: 10
    }
})