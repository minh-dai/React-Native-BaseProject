import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Image, Modal } from 'react-native';
import {
    STR_RENDEZ_VOUS,
    STR_SCHEDULE,
    STR_VOUS,
    STR_DELAY,
    STR_CANCEL_APPOINTMENT,
    STR_DELETE_DATING,
    STR_YES,
    STR_NO,
    STR_DELETE_DATING_QUESTION,
    STR_DELETE_DATING_SUCCESS,
    STR_TITLE,
    RENCONTREZ_BUTTON,
    STR_CONFIRMER,
    ANNULER,
    STR_DELETE_DELAY,
} from "../../utils/constantstring";
import { ColorCustom } from "../../utils/color";
import Sizings from "../../utils/sizings"
import { useNavigation } from "react-navigation-hooks";
import LoadingIndicator from '../styles/loadingIndicator'
import InfoUser from '../styles/infoUser'
import { myHeight, myWidth } from "../../utils/dimension";
import ic_tick from '../../../res/ic_tick.png'
import HeaderNotification from "../styles/HeaderNotification"

export default function CountDownComponent(props) {

    const {
        showLoading,
        userInfo,
        time,
        data,
        delayDating,
        showModal,
        setShowModal,
        deleteDating,
        onClickYesModal,
        showModalPlanTime,
        onClickPhanTime,
        onClickNoPlanTime,
        showSuccessDelete,
        reFindUser,
        isShowCheckPlanTime,
        notifi,
        onClickRePlanTime,
        isShowDelay,
        accessDelay,
    } = props;
    const { goBack, navigate } = useNavigation();

    const renderLoading = () => {
        if (showLoading) {
            return (
                <View style={styles.viewModal}>
                    <Modal
                        visible={showLoading}
                        animationType='fade'
                        transparent={false}
                    >
                        <LoadingIndicator />

                    </Modal>
                </View>
            )
            // return ()
        }
        return null;
    }

    const renderModal = () => {
        return (
            <View style={styles.viewModal}>
                <Modal
                    visible={showModal}
                    animationType='fade'
                    transparent={false}
                >
                    <View style={styles.contenntModalStyle}>
                        <Text style={styles.textDetailStyle}>{STR_VOUS} {data.addressName} {data.addressDetail}</Text>

                        <Text style={styles.textDetailStyle}>{STR_DELETE_DATING}</Text>

                        <View style={styles.viewButtonStyle}>
                            <TouchableOpacity
                                onPress={onClickYesModal}
                                style={styles.yesStyle}
                            >
                                <Text style={styles.textDetailStyle}>{STR_YES}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => setShowModal(false)}
                                style={styles.noStyle}
                            >
                                <Text style={styles.textDetailStyle}>{STR_NO}</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </Modal>
            </View>
        )
    }

    const renderPlanTime = () => {
        return (
            <View style={styles.viewModal}>
                <Modal
                    visible={showModalPlanTime}
                    animationType='fade'
                    transparent={false}
                >
                    <View style={styles.containerViewAfterStatusBar}>

                        <View style={[styles.containerViewAfterStatusBar, { alignItems: 'center', justifyContent: 'flex-end' }]}>
                            {InfoUser(userInfo)}
                        </View>

                        <View style={[styles.contentStyle, { paddingTop: Sizings.percent_10 }]}>
                            <Text style={styles.textModalStyle}><Text style={styles.addressStyle}>{userInfo.name}</Text> {STR_DELETE_DATING_QUESTION}</Text>

                            <View style={styles.viewButtonStyle}>
                                <TouchableOpacity
                                    onPress={onClickPhanTime}
                                    style={styles.yesStyle}
                                >
                                    <Text style={styles.textDetailStyle}>{STR_YES}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={onClickNoPlanTime}
                                    style={styles.noStyle}
                                >
                                    <Text style={styles.textDetailStyle}>{STR_NO}</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

    const renderSuccessDelete = () => {
        return (
            <View style={styles.viewModal}>
                <Modal
                    visible={showSuccessDelete}
                    animationType='fade'
                    transparent={false}
                >
                    <View style={styles.containerViewAfterStatusBar}>
                        <View style={[styles.contentStyle, { justifyContent: 'flex-end' }]}>
                            <View style={styles.roundStyle}>
                                <Image source={ic_tick} style={styles.imageStyle} />
                            </View>
                        </View>
                        <View style={styles.contentStyle}>
                            <View style={styles.alertDeleteDating}>
                                <Text style={styles.addressStyle}>{data.partnerDiplayName} <Text style={styles.textAmicaleStyle}>{STR_DELETE_DATING_SUCCESS}</Text></Text>
                            </View>

                            <View style={styles.alertDeleteDating}>
                                <Text style={[styles.addressStyle, { fontSize: 15 }]}>{STR_TITLE}</Text>
                            </View>

                            <TouchableOpacity
                                onPress={reFindUser}
                                style={[styles.noStyle, { width: Sizings.percent_50 }]}
                            >
                                <Text style={styles.textDetailStyle}>{RENCONTREZ_BUTTON}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

    const renderCheckPlanTime = () => {
        return (
            <View style={styles.viewModal}>
                <Modal
                    visible={isShowCheckPlanTime}
                    animationType='fade'
                    transparent={false}
                >
                    <View style={styles.containerViewAfterStatusBar}>

                        <View style={[styles.contenntModalStyle, { justifyContent: 'flex-end' }]}>
                            {InfoUser(userInfo, data.partnerDiplayName)}
                        </View>
                        <View style={[styles.contentStyle, { paddingTop: Sizings.percent_10 }]}>
                            <Text style={styles.addressStyle}>{notifi.AnotherGuest} <Text style={styles.textAmicaleStyle}>{notifi.message}</Text></Text>
                            <View style={{ marginVertical: 20 }} />
                            <TouchableOpacity
                                onPress={onClickRePlanTime}
                                style={styles.cancelStyle}
                            >
                                <Text style={styles.textCancelStyle}>{STR_CONFIRMER}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={onClickNoPlanTime}
                                style={styles.amicaleStyle}
                            >
                                <Text style={styles.textAmicaleStyle}>{ANNULER}</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

    const renderDelay = () => {
        return (
            <View style={styles.viewModal}>
                <Modal
                    visible={isShowDelay}
                    animationType='fade'
                    transparent={false}
                >
                    <View style={styles.containerViewAfterStatusBar}>
                        <View style={[styles.contenntModalStyle, { justifyContent: 'flex-end' }]}>
                            {InfoUser(userInfo, data.partnerDiplayName)}
                        </View>
                        <View style={[styles.contentStyle, { paddingTop: Sizings.percent_10 }]}>
                            <Text style={styles.textAmicaleStyle}>{notifi.message}</Text>
                            <View style={{ marginVertical: 20 }} />
                            <TouchableOpacity
                                onPress={() => onClickNoPlanTime()}
                                style={styles.cancelStyle}
                            >
                                <Text style={styles.textCancelStyle}>{STR_DELETE_DELAY}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => accessDelay()}
                                style={styles.amicaleStyle}
                            >
                                <Text style={styles.textAmicaleStyle}>{STR_YES}</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <View style={styles.containerViewAfterStatusBar}>
                <HeaderNotification name={STR_RENDEZ_VOUS} />
                <View style={styles.containerViewAfterStatusBar}>
                    <View style={[styles.containerViewAfterStatusBar, { alignItems: 'center', }]}>
                        {InfoUser(userInfo, data.partnerDiplayName)}
                    </View>

                    <View style={styles.contentStyle}>
                        <Text style={styles.textDetailTimeStyle}>{STR_SCHEDULE}</Text>
                        <Text style={styles.textTimeStyle}>{time}</Text>

                        <Text style={styles.textDetailStyle}>{STR_VOUS} {data.addressName} {data.addressDetail}</Text>

                        <TouchableOpacity
                            onPress={deleteDating}
                            style={styles.cancelStyle}
                        >
                            <Text style={styles.textCancelStyle}>{STR_CANCEL_APPOINTMENT}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={delayDating}
                            style={styles.amicaleStyle}
                        >
                            <Text style={styles.textAmicaleStyle}>{STR_DELAY}</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            {renderLoading()}
            {showModal ? renderModal() : null}
            {showModalPlanTime ? renderPlanTime() : null}
            {showSuccessDelete ? renderSuccessDelete() : null}
            {isShowCheckPlanTime ? renderCheckPlanTime() : null}
            {isShowDelay ? renderDelay() : null}
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
        backgroundColor: ColorCustom.BLACK
    },

    viewModal: {
        position: 'absolute',
        top: Platform.OS === "android" ? 0 : 20,
        left: 0,
        right: 0,
        bottom: 0,
    },

    viewButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 25,
    },

    contenntModalStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorCustom.BLACK
    },

    contentStyle: {
        flex: 1.5,
        alignItems: 'center',
    },

    roundStyle: {
        height: myWidth / 2,
        width: myWidth / 2,
        borderRadius: myWidth / 4,
        borderWidth: 3,
        borderColor: ColorCustom.GLACIER,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },

    imageStyle: {
        height: myHeight / 10,
        width: myHeight / 10,
        resizeMode: 'contain'
    },

    textAmicaleStyle: {
        fontSize: 13,
        fontWeight: "bold",
        color: ColorCustom.WHITE
    },

    textCancelStyle: {
        fontSize: 13,
        fontWeight: "bold",
        color: ColorCustom.BLACK
    },

    textAmoureStyle: {
        fontSize: 13,
        color: ColorCustom.WHITE,
        textAlign: 'center',
        marginHorizontal: 25,
    },

    textModalStyle: {
        fontSize: 13,
        color: ColorCustom.WHITE,
        textAlign: 'center',
        marginHorizontal: Sizings.percent_15,
        width: Sizings.percent_80
    },

    addressStyle: {
        fontSize: 13,
        color: ColorCustom.MAIN_COLOR_BLUE,
        textAlign: 'center'
    },

    textDetailStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: ColorCustom.WHITE,
        marginVertical: 10,
        width: Sizings.percent_80,
        textAlign: 'center'
    },

    textTimeStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: ColorCustom.WHITE,
        marginVertical: 5,
        width: Sizings.percent_60,
        textAlign: 'center'
    },

    textDetailTimeStyle: {
        fontSize: 14,
        fontWeight: "bold",
        color: ColorCustom.MAIN_COLOR_BLUE,
        width: Sizings.percent_80,
        textAlign: 'center',
        marginTop: 15,
    },

    amicaleStyle: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        minHeight: 50,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },

    cancelStyle: {
        borderRadius: 20,
        borderWidth: 1,
        backgroundColor: ColorCustom.WHITE,
        height: 50,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    noStyle: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        height: 45,
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: Sizings.percent_10
    },

    yesStyle: {
        borderRadius: 20,
        borderWidth: 1,
        backgroundColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        height: 45,
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Sizings.percent_10
    },

    alertDeleteDating: {
        width: Sizings.percent_100,
        paddingHorizontal: Sizings.percent_20,
        marginVertical: 20,
    },
})