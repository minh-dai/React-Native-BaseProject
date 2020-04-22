import { useNavigation, useNavigationParam } from "react-navigation-hooks";
export function actionMoveScreen (nameScreen){
    const {navigate} = useNavigation();
    navigate(nameScreen);
};

