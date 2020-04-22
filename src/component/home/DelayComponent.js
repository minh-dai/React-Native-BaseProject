import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Image, FlatList, Modal } from 'react-native';
import {
    STR_DETAIL_DATING,
    STR_DATING,
    STR_SUIVANT,
    STR_MINUTES,
    STR_HEADER_RETARD,
    ANNULER,
    STR_DELAY_SUCCESS_DETAIL,
    STR_DELAY_SUCCESS
} from "../../utils/constantstring";
import { ColorCustom } from "../../utils/color";
import Sizings from "../../utils/sizings"
import { useNavigation } from "react-navigation-hooks";
import LoadingIndicator from '../styles/loadingIndicator'
import ic_tick from '../../../res/ic_tick.png'
import HeaderNotification from "../styles/HeaderNotification"
import { myHeight, myWidth } from "../../utils/dimension";
import sizings from '../../utils/sizings';

export default function DelayComponent(props) {

    const { showLoading, data, onClickItem, isCheck, onSubmitDelay, isShowModal, partnerDiplayName } = props;
    const { goBack, navigate } = useNavigation();

    const renderItem = (item) => {
        const time = item.item.time;
        const check = item.item.isCheck;
        return (
            <View style={styles.itemStyle}>
                <TouchableOpacity
                    onPress={() => onClickItem(item.index)}
                    style={!check ? styles.amicaleStyle : styles.itemBackgroud}>
                    <Text style={styles.textItemStyle}>{time} {STR_MINUTES}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    if (isShowModal) {
        return (
            <View style={styles.contentStyle}>
                <Modal
                    visible={isShowModal}
                >
                    <View style={[styles.containerViewAfterStatusBar, { justifyContent: 'center', alignItems: 'center' }]}>
                        <View style={styles.contentGifStyle}>
                            <Image source={ic_tick} style={styles.imageStyle} />
                        </View>

                        <View style={styles.contentTextStyle}>
                            <Text style={styles.textAmoureStyle}>{STR_DELAY_SUCCESS_DETAIL}</Text>
                            <Text style={styles.textPartnerStyle}>{STR_DELAY_SUCCESS} {partnerDiplayName}</Text>

                            <TouchableOpacity
                                style={styles.bottomStyle}
                                onPress={() => goBack(null)}
                            >
                                <Text style={styles.textBgStyle}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

    const renderLoading = () => {
        if (showLoading) {
            return (<LoadingIndicator />)
        }
        return null;
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <View style={styles.containerViewAfterStatusBar}>
                <HeaderNotification name={STR_HEADER_RETARD} isBack={true} />
                <View style={styles.containerViewAfterStatusBar}>

                    <View style={styles.contentTextStyle}>
                        <Text style={styles.textTimeStyle}>{STR_DATING}</Text>
                        <Text style={styles.textStyle}>{STR_DETAIL_DATING}</Text>
                    </View>

                    <FlatList
                        style={styles.contentStyle}
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => String(index)}
                    />

                    <View style={styles.contentTextStyle}>
                        <TouchableOpacity
                            onPress={onSubmitDelay}
                            disabled={!isCheck}
                            style={isCheck ? styles.anicaleBgStyle : styles.amicaleStyle}
                        >
                            <Text style={isCheck ? styles.textBgStyle : styles.textAmicaleStyle}>{STR_SUIVANT}</Text>
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
        paddingTop: Platform.OS === "android" ? 0 : 20,
        backgroundColor: ColorCustom.BLACK,
    },

    containerViewAfterStatusBar: {
        flex: 1,   
        backgroundColor: ColorCustom.BLACK,     
    },

    contentGifStyle: {
        height: myWidth / 2,
        width: myWidth / 2,
        borderRadius: myWidth / 4,
        borderWidth: 3,
        borderColor: ColorCustom.GLACIER,
        justifyContent: 'center',
        alignItems: 'center',
    },

    contentStyle: {
        flex: 1,        
    },

    contentTextStyle: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textTimeStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: ColorCustom.WHITE,
        marginTop: 25,
        width: Sizings.percent_80,
        textAlign: 'center'
    },

    textStyle: {
        fontSize: 13,
        marginVertical: 5,
        color: ColorCustom.MAIN_COLOR_WHITE_OPACITY,
        width: Sizings.percent_80,
        textAlign: 'center'
    },

    amicaleStyle: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        minHeight: 55,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },

    anicaleBgStyle: {
        borderRadius: 20,
        backgroundColor: ColorCustom.WHITE,
        minHeight: 55,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },

    bottomStyle: {
        borderRadius: 20,
        backgroundColor: ColorCustom.WHITE,
        minHeight: 55,
        paddingHorizontal: Sizings.percent_15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    itemBackgroud: {
        minHeight: 55,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 20,
        backgroundColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY
    },

    textAmicaleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: ColorCustom.WHITE
    },

    textBgStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: ColorCustom.BLACK
    },

    textItemStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: ColorCustom.WHITE
    },

    itemStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageStyle: {
        height: myHeight / 10,
        width: myHeight / 10,
        resizeMode: 'contain'
    },

    textAmoureStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: ColorCustom.WHITE,
        textAlign: 'center'
    },

    textPartnerStyle: {
        fontSize: 13,
        fontWeight: "bold",
        color: ColorCustom.MAIN_COLOR_BLUE,
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: Sizings.percent_20
    }
})