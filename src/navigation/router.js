import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Image } from 'react-native';
import React from 'react';
import StartScreen from "../screens/startScreen";
import LoginScreen from "../screens/login/loginScreen";
import ForgotPasswordScreen from "../screens/login/forgotPasswordScreen"
import ForgotPasswordConfirmScreen from "../screens/login/forgotPasswordConfirmScreen"
import RegisterScreen from "../screens/register/registerScreen"
import QuestionHeightScreen from "../screens/register/questionHeightScreen"
import QuestionPoidsScreen from "../screens/register/questionPoidsScreen"
import GenderScreen from "../screens/register/genderScreen"
import GenderPartnerScreen from "../screens/register/genderPartnerScreen"
import DateOfBirthScreen from "../screens/register/dateOfBirthScreen"
import LocationScreen from "../screens/register/locationScreen"
import BodyQuestionScreen from "../screens/register/bodyQuestionScreen"
import EthenicQuestionScreen from "../screens/register/ethenicQuestionScreen"
import TermsAndConditionScreen from "../screens/register/termsAndConditionScreen"
import TermsDetailsScreen from "../screens/register/termsDetailScreen"
import TermsCondtionsDataSensitiveScreen from "../screens/register/termsCondtionsDataSensitiveScreen"
import PhotoAndIdentityScreen from "../screens/register/photoAndIdentityScreen"
import CompleteRegistrationScreen from "../screens/register/completeRegistrationScreen"

//Personal Catogery
import PersonalCategoryScreen from "../screens/personal/personalCategoryScreen"
import QuestionsProfesionalScreen from "../screens/personal/questions/questionsProfesionalScreen"
import QuestionReligion from '../screens/personal/questions/questionReligionScreen'
import IntellectScreen from '../screens/personal/questions/IntellectScreen'
import PersnnaliteScreen from '../screens/personal/questions/PersnnaliteScreen'
import LocationPersionalScreen from '../screens/personal/questions/LocationPersionalScreen'
import PhotoScreen from '../screens/personal/questions/PhotoScreen'
import DetailPhotoScreen from '../screens/personal/questions/DetailPhotoScreen'

//Notification
import NotificationScreen from "../screens/notification/NotificationScreen"
import LancerUnTestScreen from "../screens/notification/LancerUnTestScreen"
import FindUserScreen from "../screens/notification/FindUserScreen"
import CompatibilyScreen from "../screens/notification/CompatibilyScreen"
import SuccessMatchingScreen from "../screens/notification/SuccessMatchingScreen"
import CheckCompatibilityScreen from "../screens/notification/CheckCompatibilityScreen"

// Home
import HomeScreen from "../screens/home/HomeScreen"
import LoadingPersonalScreen from '../screens/home/LoadingPersonalScreen'
import ErrorPersonalScreen from '../screens/home/ErrorPersonalScreen'
import PartnerSuccessScreen from '../screens/home/PartnerSuccessScreen'
import PositionScreen from '../screens/home/PositionScreen'
import PlanTimeScreen from '../screens/home/PlanTimeScreen'
import CountDownScreen from '../screens/home/CountDownScreen'
import DelayScreen from '../screens/home/DelayScreen'
import FeedBackScreen from '../screens/home/feedBack/FeedBackScreen'
import FavoriteScreen from '../screens/home/feedBack/FavoriteScreen'
import RuptureScreen from '../screens/home/feedBack/RuptureScreen'
import DetailScreen from '../screens/home/feedBack/DetailScreen'

// Setting
import SettingScreen from '../screens/setting/SettingScreen'
import DeleteAccountComponent from '../screens/setting/deleteAccount/DeleteAccountScreen'
import WarningDeleteAcccountScreen from '../screens/setting/deleteAccount/WarningDeleteAcccountScreen'
import ChangeEmailScreen from '../screens/setting/changeEmail/ChangeEmailScreen'
import ChangePassScreen from '../screens/setting/ChangePassScreen'

let SlideFromRight = (index, position, width) => {
    const translateX = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [width, 0],
    })

    return { transform: [{ translateX }] }
};

const TransitionConfiguration = () => {
    return {
        transitionSpec: {
            duration: 100,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: (sceneProps) => {
            const { layout, position, scene } = sceneProps;
            const width = layout.initWidth;
            const height = layout.initHeight;
            const { index, route } = scene
            const params = route.params || {};
            const transition = params.transition || 'default';
            return {
                default: SlideFromRight(index, position, width),
            }[transition];
        },
    }
}
const LoginStack = createStackNavigator({
    Start: {
        screen: StartScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null,
        }

    },

    Login: {
        screen: LoginScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },

    ForgotPassword: {
        screen: ForgotPasswordScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },

    ForgotPasswordConfirm: {
        screen: ForgotPasswordConfirmScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },

    Register: {
        screen: RegisterScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },

    GenderScreen: {
        screen: GenderScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },

    GenderPartnerScreen: {
        screen: GenderPartnerScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },

    DateOfBirthScreen: {
        screen: DateOfBirthScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },

    LocationScreen: {
        screen: LocationScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },


    QuestionHeight: {
        screen: QuestionHeightScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },

    QuestionPoids: {
        screen: QuestionPoidsScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },

    BodyQuestionScreen: {
        screen: BodyQuestionScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },

    EthenicQuestionScreen: {
        screen: EthenicQuestionScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },


    TermsAndConditionScreen: {
        screen: TermsAndConditionScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },

    TermsDetailsScreen: {
        screen: TermsDetailsScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },

    TermsCondtionsDataSensitiveScreen: {
        screen: TermsCondtionsDataSensitiveScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },

    PhotoAndIdentityScreen: {
        screen: PhotoAndIdentityScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },

    CompleteRegistrationScreen: {
        screen: CompleteRegistrationScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },

    PhotoScreen:{
        screen: PhotoScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },

    DetailPhotoScreen:{
        screen: DetailPhotoScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
});

const DeleteStack = createStackNavigator({
    WarningDeleteAcccountScreen: {
        screen: WarningDeleteAcccountScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    DeleteAccount: {
        screen: DeleteAccountComponent,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    }
});

const SettingStack = createStackNavigator({
    Setting: {
        screen: SettingScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    DeleteStack: {
        screen: DeleteStack,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    ChangeEmailScreen: {
        screen: ChangeEmailScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    ChangePassScreen: {
        screen: ChangePassScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    }
})

const PersonalStack = createStackNavigator({
    PersonalCategoryScreen: {
        screen: PersonalCategoryScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },

    QuestionsProfesionalScreen: {
        screen: QuestionsProfesionalScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    QuestionReligion: {
        screen: QuestionReligion,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    IntellectScreen: {
        screen: IntellectScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    PersnnaliteScreen: {
        screen: PersnnaliteScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    LocationPersionalScreen: {
        screen: LocationPersionalScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    PhotoScreen:{
        screen: PhotoScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    DetailPhotoScreen:{
        screen: DetailPhotoScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    SettingStack: {
        screen: SettingStack,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
});

const NotificationStack = createStackNavigator({
    Notification: {
        screen: NotificationScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    CheckCompatibilityScreen: {
        screen: CheckCompatibilityScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    LancerUnTestScreen: {
        screen: LancerUnTestScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    FindUserScreen: {
        screen: FindUserScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    CompatibilyScreen: {
        screen: CompatibilyScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    SuccessMatchingScreen: {
        screen: SuccessMatchingScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    SettingStack: {
        screen: SettingStack,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
}, {
    initialRouteName: 'Notification',
});

const FeedBackStack = createStackNavigator({
    FeedBackScreen: {
        screen: FeedBackScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    RuptureScreen: {
        screen: RuptureScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    FavoriteScreen: {
        screen: FavoriteScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    DetailScreen: {
        screen: DetailScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    }
})

const HomeStack = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    LoadingPersonalScreen: {
        screen: LoadingPersonalScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    ErrorPersonalScreen: {
        screen: ErrorPersonalScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    PartnerSuccessScreen: {
        screen: PartnerSuccessScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    PositionScreen: {
        screen: PositionScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    PlanTimeScreen: {
        screen: PlanTimeScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    CountDownScreen: {
        screen: CountDownScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    DelayScreen: {
        screen: DelayScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    SettingStack: {
        screen: SettingStack,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    FeedBackStack: {
        screen: FeedBackStack,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    }
})

const BottomTabNavigator = createBottomTabNavigator(
    {
        NotificationTab: {
            screen: NotificationStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (

                    focused ?
                        <Image
                            source={require('../../res/ic_tab_main_screen/icon_left_selected.png')}
                            style={{ width: 35, height: 35 }}
                        />
                        :
                        <Image
                            source={require('../../res/ic_tab_main_screen/icon_left.png')}
                            style={{ width: 35, height: 35 }}
                        />
                )
            }
        },
        HomeTab: {
            screen: HomeStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (

                    focused ?
                        <Image
                            source={require('../../res/ic_tab_main_screen/icon_middle_selected.png')}
                            style={{ width: 35, height: 35 }}
                        />
                        :
                        <Image
                            source={require('../../res/ic_tab_main_screen/icon_middle.png')}
                            style={{ width: 35, height: 35 }}
                        />
                ),
                tabBarOnPress({ navigation, defaultHandler }) {
                    if (navigation.isFocused()) {
                    } else {
                        defaultHandler();
                    }
                }
            }
        },

        PersonalTab: {
            screen: PersonalStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    focused ?
                        <Image
                            source={require('../../res/ic_tab_main_screen/icon_right_selected.png')}
                            style={{ width: 35, height: 35 }}
                        />
                        :
                        <Image
                            source={require('../../res/ic_tab_main_screen/icon_right.png')}
                            style={{ width: 35, height: 35 }}
                        />
                )
            }
        },
    },
    {
        initialRouteName: 'PersonalTab',
        tabBarOptions: {
            showLabel: false,
            style: {
                borderTopWidth: 0,
                backgroundColor: "black",
                borderTopWidth: 0
            }
        }
    }
);

const MainStack = createSwitchNavigator({
    MainStack: {
        screen: BottomTabNavigator,
        navigationOptions: {
            gesturesEnabled: false,
            header: null

        }
    },
    Login: {
        screen: LoginStack,
        navigationOptions: {
            gesturesEnabled: false,
            header: null

        }
    },

});

const RouterAuthStack = createSwitchNavigator(
    {
        Login: LoginStack,
        Personal: MainStack
    },
    {
        initialRouteName: "Login"
    }

);


export default createRootNavigator = (signedIn) => {

    if (signedIn) {
        return createAppContainer(MainStack);
    } else {
        return createAppContainer(RouterAuthStack);
    }


};

//export default createAppContainer(MainStack);