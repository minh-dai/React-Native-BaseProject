import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { ColorCustom } from "../../utils/color";
import Sizings from "../../utils/sizings"
import * as Strings from '../../utils/constantstring'

function DetailPhotoLine(props) {
    const { number } = props;
    let textLine1 = '';
    let textLine2 = '';

    if (number == 2) {
        textLine1 = Strings.STR_DETAIL_TITLE_LINE2;
        textLine2 = Strings.STR_PHOTO_UP_LINE2;
    }
    else if (number == 3) {
        textLine1 = Strings.STR_DETAIL_TITLE_LINE3;
        textLine2 = Strings.STR_PHOTO_UP_LINE3;
    } else if (number == 4) {
        textLine1 = Strings.STR_DETAIL_TITLE_LINE4;
        textLine2 = Strings.STR_PHOTO_UP_LINE4;
    }
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{textLine1}</Text>
            <Text style={[styles.textStyle, { color: ColorCustom.WHITE, marginTop: 15 }]}>{Strings.STR_DETAIL_LINE}</Text>
            <Text style={[styles.textStyle, { color: ColorCustom.MAIN_COLOR_BLUE }]}>{Strings.STR_PHOTO_NOT_SHOW}</Text>
            {/* <Text style={styles.textStyle}>{textLine2}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Sizings.percent_10,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 15,
        color: ColorCustom.MAIN_COLOR_WHITE_OPACITY,

    }
});

export default DetailPhotoLine;
