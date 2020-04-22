import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, FlatList } from 'react-native';
import {
    STR_RENDEZ_VOUS,
    STR_DETAIL_PLAN_TIME,
    STR_SUIVANT,
    STR_DETAIL_AUCUN,
    STR_DETAIL_NOT_PLAN_TIME,
    STR_DETAIL_NOT_PLAN_TIME_DETAIL
} from "../../utils/constantstring";
import { ColorCustom } from "../../utils/color";
import Sizings from "../../utils/sizings"
import { ENUM_DAY } from "../../utils/enum"
import { useNavigation } from "react-navigation-hooks";
import LoadingIndicator from '../styles/loadingIndicator'
import { myHeight, myWidth } from "../../utils/dimension";
import moment from "moment";
import HeaderNotification from "../styles/HeaderNotification"


export default function PlanTimeComponent(props) {

    const { showLoading, saveTimesSelect, dataTimes, newTime, onClickItem, resetTime, position } = props;
    const { goBack, navigate } = useNavigation();
    const numberChoose = dataTimes ? dataTimes.numberChoose : 0;

    const renderLoading = () => {
        if (showLoading) {
            return (<LoadingIndicator />)
        }
        return null
    }

    const renderItem = (item) => {
        const isCheck = item.item.isCheck;
        const time = item.item.time;
        const date = moment(time).format("DD/MM/YYYY");
        let day = moment(time).format('dddd');
        let hour = moment.utc(time);
        hour = new Date(hour);
        hour = moment(hour).format('h:mm');
        hour = hour.replace(':', 'h')
        for (let i = 0; i < ENUM_DAY.length; ++i) {
            const key = Object.keys(ENUM_DAY[i]);
            if (key == day) {
                day = ENUM_DAY[i][day];
                break;
            }
        }

        return (
            <TouchableOpacity
                style={!isCheck ? styles.amicaleStyle : [styles.amicaleStyle, { backgroundColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY }]}
                onPress={() => onClickItem(item.index)}
            >
                <Text style={styles.textItemBgStyle}>
                    <Text style={styles.textItemDayStyle}>{day} </Text>
                    {date}
                    <Text style={!isCheck ? styles.textItemHourStyle : styles.textItemHourBgStyle}> {hour} </Text>
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <View style={styles.containerViewAfterStatusBar}>
                <HeaderNotification name={STR_RENDEZ_VOUS} />
                {dataTimes && dataTimes.plannedTimeOutputs ?
                    <View style={styles.contentStyle}>

                        {!resetTime ? <Text style={styles.textDetailStyle}>{STR_DETAIL_PLAN_TIME}</Text>
                            : <Text style={styles.textlStyle}>{STR_DETAIL_NOT_PLAN_TIME} <Text style={styles.textDetailStyle}>{position.partnerDiplayName}</Text> {STR_DETAIL_NOT_PLAN_TIME_DETAIL}
                            </Text>}

                        <View style={styles.listStyle}>
                            <FlatList
                                data={dataTimes.plannedTimeOutputs}
                                renderItem={renderItem}
                                keyExtractor={(item, index) => String(index)}
                            />
                        </View>
                        <View style={styles.contentStyle}>
                            <TouchableOpacity
                                style={styles.amicaleStyle}
                                onPress={newTime}
                                disabled={numberChoose > 0}
                            >
                                <Text style={styles.textItemStyle}>{STR_DETAIL_AUCUN}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={numberChoose > 0 ? styles.amoureuseStyle : styles.amicaleStyle}
                                disabled={numberChoose == 0}
                                onPress={saveTimesSelect}
                            >
                                <Text style={numberChoose > 0 ? styles.textAmoureStyle : styles.textItemStyle}>{STR_SUIVANT}</Text>
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

    containerViewAfterStatusBar: {
        flex: 1,
    },

    contentStyle: {
        flex: 1,
        alignContent: 'center',
    },

    textDetailStyle: {
        fontSize: 15,
        color: ColorCustom.WHITE,
        marginHorizontal: 20,
        textAlign: 'center',
    },

    textlStyle: {
        fontSize: 15,
        color: ColorCustom.MAIN_COLOR_WHITE_OPACITY,
        marginHorizontal: 20,
        textAlign: 'center',
    },

    listStyle: {
        flex: 2,
    },

    amoureuseStyle: {
        backgroundColor: ColorCustom.WHITE,
        borderRadius: 20,
        minHeight: 50,
        marginHorizontal: Sizings.percent_30,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "bold",
        marginVertical: 10
    },

    textAmoureStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: ColorCustom.BLACK,
    },

    textItemStyle: {
        fontSize: 15,
        color: ColorCustom.WHITE,
        textAlign: 'center',
    },

    textItemBgStyle: {
        fontSize: 15,
        color: ColorCustom.MAIN_COLOR_WHITE_OPACITY,
        textAlign: 'center',
    },

    textItemDayStyle: {
        fontSize: 15,
        color: ColorCustom.WHITE,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    textItemHourStyle: {
        fontSize: 15,
        color: ColorCustom.MAIN_COLOR_BLUE,
        textAlign: 'center',
    },

    textItemHourBgStyle:{
        fontSize: 15,
        color: ColorCustom.WHITE,
        textAlign: 'center',
    },

    amicaleStyle: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        minHeight: 50,
        marginHorizontal: Sizings.percent_15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    }
})