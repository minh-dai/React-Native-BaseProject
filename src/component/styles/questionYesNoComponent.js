import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { ColorCustom } from '../../utils/color';
import { STR_YES, STR_NO } from "../../utils/constantstring";
import { myHeight } from "../../utils/dimension";

export default function QuestionYesNoComponent(props) {

    const [bg, setBg] = useState({
        bgYes: 'black',
        bgNo: 'black'
    });
    const { question, setIsTrueOrFalse, arrQuestions } = props
    const [textColor, setTextColor] = useState({
        textColorYes: 'white',
        textColorNo: 'white'
    });

    const _chooseAnswer = (answer) => {
        // 1: YES
        // 2: NO
        if (answer == 1) {
            setBg({
                ...bg,
                bgYes: ColorCustom.BACKGROUND_SELECTED_ANSWER_YESNO,
                bgNo: "black"
            });
            if (arrQuestions) setIsTrueOrFalse({ selectedId: [arrQuestions.answers[0]._id], parentId: arrQuestions._parentAnswerIds, questionId: arrQuestions._id });
            else setIsTrueOrFalse(true);
        } else if (answer == 2) {
            setBg({
                ...bg,
                bgYes: "black",
                bgNo: ColorCustom.BACKGROUND_SELECTED_ANSWER_YESNO
            });
            if (arrQuestions) setIsTrueOrFalse({ selectedId: [arrQuestions.answers[1]._id], parentId: arrQuestions._parentAnswerIds, questionId: arrQuestions._id });
            else setIsTrueOrFalse(false);
        }
    }

    useEffect(() => {
        if(arrQuestions){
            if (arrQuestions.answers[0]._selected) {
                setBg({
                    ...bg,
                    bgYes: ColorCustom.BACKGROUND_SELECTED_ANSWER_YESNO,
                    bgNo: "black"
                });
            } else {
                setBg({
                    ...bg,
                    bgYes: "black",
                    bgNo: ColorCustom.BACKGROUND_SELECTED_ANSWER_YESNO
                });
            }
        }else{
            setBg({
                ...bg,
                bgYes: ColorCustom.BACKGROUND_SELECTED_ANSWER_YESNO,
                bgNo: "black"
            });
        }        
    }, [])


    return (
        <View style={styles.backGroundStyle}>
            <Text style={styles.questionStyle}>
                {question}
            </Text>

            <View style={styles.viewParentButtonStyle}>
                <View style={styles.viewButton}>

                    <TouchableOpacity
                        style={[styles.buttonBoxBorder, { backgroundColor: bg.bgYes }]}
                        activeOpacity={1.0}
                        onPress={() => _chooseAnswer(1)}
                    >
                        <Text style={[styles.textInButton, { color: textColor.textColorYes }]}>{STR_YES}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewButton}>
                    <TouchableOpacity
                        style={[styles.buttonBoxBorder, { backgroundColor: bg.bgNo }]}
                        activeOpacity={1.0}
                        onPress={() => _chooseAnswer(2)}>
                        <Text style={[styles.textInButton, { color: textColor.textColorNo }]}>{STR_NO}</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    viewParentStyle:
    {
        width: "100%",
        flexDirection: 'column',
        alignSelf: "center"
    },

    questionStyle: {
        alignSelf: "center",
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        fontSize: 16,
        width: "100%",
        marginTop: 10
    },

    viewParentButtonStyle: {
        width: "50%",
        flexDirection: 'row',
        marginTop: 20,
        alignSelf: "center",

    },

    viewButton: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "center"
    },


    buttonBoxBorder: {
        width: "80%",
        height: (myHeight * 5) / 100,
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: ColorCustom.MAIN_COLOR_BLUE,
        borderRadius: 80,
        alignSelf: "center",
        justifyContent: "center",
    },


    textInButton: {
        fontSize: 14,
        color: 'white',
        width: '80%',
        alignSelf: 'center',
        textAlign: "center",
        justifyContent: 'center',
    },
});
