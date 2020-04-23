"dependencies": {
    "@material-ui/core": "^4.8.1",
    "@react-native-community/netinfo": "^5.2.0",
    "@react-native-community/push-notification-ios": "^1.0.6",
    "@react-native-firebase/app": "^6.3.4",
    "@react-native-firebase/messaging": "^6.3.4",
 	"react-native-keyboard-aware-scroll-view": "^0.9.1",
    "axios": "^0.19.0",
    "install": "^0.13.0",
    "npm": "^6.13.7",
    "react": "^16.9.0",
    "react-dom": "^16.12.0",
    "react-native": "0.61.5",
    "react-native-datepicker": "^1.7.2",
    "react-native-gesture-handler": "^1.5.2",
    "react-native-hide-show-password-input": "^1.1.0",
    "react-native-image-picker": "^2.3.1",
    "react-native-material-dialog": "^0.7.7",
    "react-native-parsed-text": "0.0.21",
    "react-native-push-notification": "^3.1.9",
    "react-native-reanimated": "^1.4.0",
    "react-native-screens": "^2.2.0",
    "react-native-slider": "^0.11.0",
    "react-native-vector-icons": "^6.6.0",
    "react-navigation": "^4.0.10",
    "react-navigation-hooks": "^1.1.0",
    "react-navigation-stack": "^1.10.3",
    "react-navigation-tabs": "^2.7.0",
    "react-redux": "^7.1.3",
    "redux-saga": "^1.1.3",
    "styled-components": "^5.0.0-fixhoist"
  },

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import creatSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/rootSaga';
import allReducers from './src/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createRootNavigator from './src/navigation/router';
import { getAutoLogin } from './src/utils/storage'

const sagaMiddleware = creatSagaMiddleware()
let store = createStore(allReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const App: () => React$Node = () => {
  const [isSigned, setIsSigned] = useState(false);

  checkLogin = async () => {
    let checkAutoLogin = await getAutoLogin();
    if (checkAutoLogin == true) {
      setIsSigned(true)
      console.log("Is signed", isSigned)
    }
  }
  useLayoutEffect(() => {
    checkLogin();
    //setIsSigned(checkAutoLogin)
  }, []);

  const Layout = createRootNavigator(isSigned)
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;