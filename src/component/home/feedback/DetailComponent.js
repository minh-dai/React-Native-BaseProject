import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, TextInput, Keyboard ,Modal} from 'react-native';
import { STR_SUIVANT, STR_DETAIL_FEED_BACK, STR_DETAIL_QUESTION, STR_FEED_SUCCESS, STR_FEED_REMERCIONS, STR_RUPTURE } from "../../../utils/constantstring";
import { ColorCustom } from "../../../utils/color";
import Sizings from "../../../utils/sizings"
import { useNavigation } from "react-navigation-hooks";
import { myHeight, myWidth } from "../../../utils/dimension";
import HeaderNotification from "../../styles/HeaderNotification"
import ic_tick from '../../../../res/ic_tick.png'
import LoadingIndicator from '../../styles/loadingIndicator'

export default function DetailComponent(props) {
    const { isShowModal, setTextDetail, textDetail, sendFeedBack, showLoading } = props;
    const isClick = textDetail.trim().length == 0;
    const { goBack, navigate } = useNavigation();

    const renderSuccess = () => {
        return (
            <View style={styles.contentStyle}>
                <Modal
                    visible={isShowModal}
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

                            <Text style={styles.textDetailStyle}>{STR_FEED_SUCCESS}</Text>
                            <Text style={[styles.textDetailStyle, { color: ColorCustom.MAIN_COLOR_BLUE_OPACITY }]}>{STR_FEED_REMERCIONS}</Text>

                            <TouchableOpacity
                                onPress={() => navigate('HomeTab')}
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

    const renderLoading = () => {
        if (showLoading) {
            return (<LoadingIndicator />)
        }
        return null;
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <View style={styles.contentStyle}>
                <HeaderNotification name={STR_RUPTURE} isBack={true} />
                <View style={[styles.contentStyle, { alignItems: 'center', }]}>

                    <Text style={styles.textAmoureStyle}>{STR_DETAIL_FEED_BACK}</Text>
                    <Text style={styles.textDetailStyle}>{STR_DETAIL_QUESTION}</Text>

                    <TextInput
                        style={styles.inputStyle}
                        value={textDetail}
                        onChangeText={text => setTextDetail(text)}
                        multiline={true}
                        numberOfLines={5}
                        autoFocus={true}
                        returnKeyType="done"
                        onSubmitEditing={() => Keyboard.dismiss()}
                    />

                    <TouchableOpacity
                        disabled={isClick}
                        onPress={sendFeedBack}
                        style={isClick ? styles.amicaleStyle : styles.amicaleBgStyle}
                    >
                        <Text style={isClick ? styles.textAmicaleStyle : styles.textBgStyle}>{STR_SUIVANT}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {isShowModal ? renderSuccess() : null}
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

    containerViewAfterStatusBar: {
        flex: 1,
        backgroundColor: ColorCustom.BLACK
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

    alertDeleteDating: {
        width: Sizings.percent_100,
        paddingHorizontal: Sizings.percent_20,
        marginVertical: 20,
    },

    imageStyle: {
        height: myHeight / 10,
        width: myHeight / 10,
        resizeMode: 'contain'
    },

    textAmicaleStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: ColorCustom.WHITE
    },

    textBgStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: ColorCustom.BLACK
    },

    textAmoureStyle: {
        fontSize: 13,
        color: ColorCustom.MAIN_COLOR_WHITE_OPACITY,
        textAlign: 'center',
        marginHorizontal: 20,
    },

    textDetailStyle: {
        fontSize: 14,
        color: ColorCustom.WHITE,
    },

    amicaleStyle: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        height: 50,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    amicaleBgStyle: {
        borderRadius: 20,
        backgroundColor: ColorCustom.WHITE,
        height: 50,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    inputStyle: {
        marginVertical: 20,
        height: myHeight / 2,
        width: Sizings.deviceWidth - 50,
        borderWidth: 1,
        borderColor: "gray",
        padding: 5,
        color: ColorCustom.WHITE
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
})