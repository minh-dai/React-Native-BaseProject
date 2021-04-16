import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app-redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigation/NavigationService';
import Navigation from './navigation/scene/RootScenes';

const App: React.FunctionComponent = () => (
    <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
            <Navigation />
        </NavigationContainer>
    </Provider>
);

export default App;
