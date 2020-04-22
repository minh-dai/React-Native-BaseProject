import { StyleSheet } from 'react-native';
import { ColorCustom } from '../../utils/color';
import { myWidth, myHeight } from '../../utils/dimension';
import { getActiveChildNavigationOptions } from 'react-navigation';
export const stylesCommon = StyleSheet.create({
	backButton: {
		bottom: 25,
		width: "30%",
		backgroundColor: "black",
		borderColor: "black",
		position: "absolute",
		//alignSelf: 'center',
	},

	titleButtonStyleBack: {
		fontSize: 18,
		color: ColorCustom.GRAY,
		textAlign: 'left',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 30
	},

	continueButton: {
		bottom: 25,
		right: 0,
		width: "30%",
		backgroundColor: "black",
		borderColor: "black",
		position: "absolute",
	},

	titleButtonContinue: {
		fontSize: 18,
		color: ColorCustom.WHITE,
		textAlign: 'right',
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 30
	},

	titleQuestionStyle: {
		fontSize: 20,
		marginTop: "10%",
		color: 'white',
		width: "100%",
		textAlign: 'center',
		fontWeight: "bold",
		flexWrap: "wrap",
		alignSelf: "center"
	},

	selectBoxBorderPremier: {
		width: '70%',
		height: "10%",
		alignSelf: "center",
		marginTop: (myHeight * 10) / 100,
		justifyContent: "center",
		borderRadius: 40,
		borderWidth: 1,
		borderColor: ColorCustom.MAIN_COLOR_BLUE,
		backgroundColor: 'black',
	},

	selectBoxBorderSecond: {
		width: "70%",
		height: "10%",
		marginTop: (myHeight * 5) / 100,
		backgroundColor: 'black',
		borderWidth: 1,
		borderColor: ColorCustom.MAIN_COLOR_BLUE,
		borderRadius: 40,
		alignSelf: "center",
		justifyContent: "center",

	},

	textInSelectBoxStyle: {
		fontSize: 20,
		color: 'white',
		width: '100%',
		fontWeight: "bold",
		alignSelf: 'center',
		textAlign: "center",
		justifyContent: 'center',
	},

	boldText: {
		fontWeight: 'bold'
	},

	underlineText: {
		textDecorationLine: 'underline'
	},

})