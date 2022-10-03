import React, { useContext } from 'react';
import { CardStyleInterpolators, createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/SplashLogo';
import { StyleSheet, View } from 'react-native';
import Terms from '../screens/Terms';
import { COLOR } from '../constants/theme';
import { Avatar } from 'react-native-elements';
import Tabs from './Tabs';
import Signin from '../screens/SignIn';
import ForgetPassword from '../screens/ForgotPassword';
import SignUp from '../screens/SignUp';
import Otp from '../screens/Otp';
import SetRadius from '../screens/SetRadius';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AddFamilyMembers from '../screens/AddFamilyMembers';
import Register from '../screens/Register';
import VideoContent from '../screens/Videos';
import { AuthContext } from '../context/AuthContext';

const Stack = createStackNavigator();
const Navigation=()=>{
    const {userInfo, isSplashLoading, token} = useContext(AuthContext);
  return (
    <GestureHandlerRootView style={{flex:1, backgroundColor:COLOR.blue}}>   
    <NavigationContainer theme={DarkTheme} >
      <Stack.Navigator
        screenOptions={{
          gestureEnabled:true,
          gestureDirection:'horizontal',
          cardStyle:{backgroundColor:COLOR.blue},
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
      {isSplashLoading?(
        <Stack.Screen name='Splash' component={Splash}
          options={{
          headerShown: false,
          title: 'SignIn',
          headerStyle: Styles.header,
          headerTintColor: '#ffffff'
          }}
        ></Stack.Screen>
      ): token?(
        <>
        <Stack.Screen name='Tabs' component={Tabs}
          options={{
          headerShown: false,
          }}
        ></Stack.Screen>
        <Stack.Screen name='AddFamilyMembers' component={AddFamilyMembers}
          options={{
          title: 'Add Family Members',
          headerStyle: Styles.header,
          headerTintColor: '#ffffff'
          }}
        ></Stack.Screen>
          <Stack.Screen name='SetRadius' component={SetRadius}
          options={{
          headerShown: false,
          }}></Stack.Screen>

        <Stack.Screen name='Terms' component={Terms} options={{
          title: 'Terms & Conditions',
          headerStyle: Styles.header,
          headerTintColor: '#ffffff'
        }}></Stack.Screen>
        </>
      ):(
        <>
          <Stack.Screen name='SignIn' component={Signin}
          options={{
          headerShown: false,
          title: 'SignIn',
          headerStyle: Styles.header,
          headerTintColor: '#ffffff'
          }}
        ></Stack.Screen>
          <Stack.Screen name='Register' component={Register}
          options={{
          headerShown: false,
          title: 'SignIn',
          headerStyle: Styles.header,
          headerTintColor: '#ffffff'
          }}
        ></Stack.Screen>
        <Stack.Screen name='Otp' component={Otp}
          options={{
          headerShown: false,
          title: 'SignIn',
          headerStyle: Styles.header,
          headerTintColor: '#ffffff'
          }}
        ></Stack.Screen>
          <Stack.Screen name='ForgetPassword' component={ForgetPassword}
          options={{
          headerShown: false,
          title: 'SignIn',
          headerStyle: Styles.header,
          }}></Stack.Screen>
          <Stack.Screen name='SignUp' component={SignUp}
          options={{
          headerShown: false,
          title: 'SignIn',
          headerStyle: Styles.header,
          }}></Stack.Screen>
        </>
      )}
      
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
 
  );
}
const Styles = StyleSheet.create({
    header:{
      backgroundColor: COLOR.blue,
      color: COLOR.yellow,
      height: 90,
      shadowColor: COLOR.blue
    },
    homeHeader:{
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      backgroundColor: COLOR.blue,
      color: COLOR.yellow,
      height: 120,
      shadowColor: COLOR.blue,
    },  
    image:{
      width: 50,
      height: 50,
      marginRight:35,
      borderRadius: 50,
      borderWidth: 3,
      borderColor: COLOR.yellow
    }
  })
  export default Navigation;