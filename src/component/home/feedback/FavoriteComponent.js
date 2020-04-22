import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, FlatList } from 'react-native';
import { STR_SUIVANT, STR_PHYSIQUE, STR_RUPTURE, STR_QUESTION_FEED } from "../../../utils/constantstring";
import { ColorCustom } from "../../../utils/color";
import Sizings from "../../../utils/sizings"
import { useNavigation } from "react-navigation-hooks";
import { myHeight, myWidth } from "../../../utils/dimension";
import HeaderNotification from "../../styles/HeaderNotification"


export default function FavoriteComponent(props) {
    const { onItemClick, arrayFeedBack, home, nextScreen, isClick } = props;    
    const { goBack, navigate } = useNavigation();

    const renderItem = (item) => {
        const isCheck = item.item.isCheck;
        return (
            <View style={styles.itemStyle}>
                <TouchableOpacity
                    onPress={() => onItemClick(item.index)}
                    style={!isCheck ? styles.amicaleStyle : styles.amicaleBgStyle}
                >
                    <Text style={styles.textAmoureStyle}>{item.item.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <View style={styles.contentStyle}>
                <HeaderNotification name={STR_RUPTURE} isBack={true} />
                <View style={[styles.contentStyle, { alignItems: 'center', paddingTop: 30 }]}>

                    <Text style={styles.textAmoureStyle}>{STR_QUESTION_FEED}
                        <Text style={styles.textDetailStyle}> {home.partnerDiplayName}</Text>
                    </Text>

                    <View style={styles.flatlistStyle}>
                        <FlatList
                            style={styles.flatlistStyle}
                            data={arrayFeedBack}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => String(index)}
                        />
                    </View>


                    <TouchableOpacity
                        onPress={nextScreen}
                        style={!isClick ? styles.amicaleStyle : styles.amicaleSuivantStyle}
                        disabled={!isClick}
                    >
                        <Text style={!isClick ? styles.textAmicaleStyle : styles.textSuivantStyle}>{STR_SUIVANT}</Text>
                    </TouchableOpacity>
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
        fontSize: 18,
        fontWeight: "bold",
        color: ColorCustom.WHITE
    },

    textSuivantStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: ColorCustom.BLACK
    },

    textAmoureStyle: {
        fontSize: 15,
        color: ColorCustom.WHITE,
    },

    textDetailStyle: {
        fontSize: 15,
        color: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
    },

    amicaleStyle: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        height: 50,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },

    amicaleSuivantStyle: {
        borderRadius: 20,
        borderWidth: 1,
        height: 50,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: ColorCustom.WHITE,
    },

    amicaleBgStyle: {
        borderRadius: 20,
        borderWidth: 1,
        backgroundColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        height: 50,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },

    flatlistStyle: {
        marginTop: 10,
        height: Sizings.deviceHeight / 2,
        width: Sizings.percent_100,
    },

    itemStyle: {
        width: Sizings.deviceWidth,
        justifyContent: 'center',
        alignItems: 'center'
    }
})