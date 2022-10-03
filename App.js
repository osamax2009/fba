import React, { useContext } from 'react';
import { LogBox, StatusBar } from 'react-native';
import Navigation from './src/navigation/Navigation';
import {AuthProvider} from './src/context/AuthContext';
import { COLOR } from './src/constants/theme';
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
const App = () => {


  return <>
  <AuthProvider>
    <StatusBar backgroundColor={COLOR.blue}/>
    <Navigation/>
  </AuthProvider>
  </>
};

export default App;
