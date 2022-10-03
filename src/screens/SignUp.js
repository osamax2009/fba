import React, { useState } from 'react';
import { Pressable,SafeAreaView, View, StyleSheet, KeyboardAvoidingView, Image, Text, TextInput, ScrollView, Platform, TouchableOpacity } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import images from '../constants/images';
import { COLOR, FONTS, height } from '../constants/theme';
const SignUp = ({navigation}) => {
    const[enableShift, setEnableShift] = useState(false);
    
    return (
     <KeyboardAvoidingView 
     keyboardVerticalOffset={-200}
      style={{flex:1, backgroundColor:'white'}} 
      behavior={Platform.OS === "android" ? "position" : "padding"} 
      enabled={enableShift}>
        <ScrollView bounces={false}>
            <SafeAreaView style={styles.container}>
              <View style={styles.header}>
                  <Text style={{ fontWeight:'bold', color:'#ffffff', fontSize: 20}}>Sign Up</Text>
                  <Image source={images.Logo} style={styles.image} />
                </View>
            <View style={{height:height}}> 
              <View style={styles.wrapper}>
              <PhoneInput
                defaultCode="US" 
                placeholder='Phone Number' 
                textInputStyle={{color: COLOR.blue, padding:0,fontSize: 15}}
                containerStyle={{backgroundColor: COLOR.darkGrey, borderRadius: 20}}
                textContainerStyle={{backgroundColor: COLOR.darkGrey, borderRadius:20}}
                textInputProps={{placeholderTextColor:COLOR.blue}}
                codeTextStyle={{color: COLOR.blue}}
                countries={['US']}
                />
                <Pressable style={({ pressed }) => [
                              {
                                backgroundColor: pressed
                                  ? COLOR.yellow
                                  : COLOR.pressed
                              },
                               styles.button
                         ]} onPress={()=>{navigation.push('Otp')}}>
                    <Text style={styles.text}>Send OTP</Text>
                </Pressable>
          
            </View>
            </View>
          </SafeAreaView>
        </ScrollView>
     </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
  header:{
  flexDirection: 'column',
    width: '100%',
    height: 300,
    backgroundColor: COLOR.blue,
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  image:{
    flex:1,
    resizeMode:'contain',
    },
    container:{
      flex:1,
      backgroundColor:COLOR.blue,
    },
    wrapper:{
      flex:1,
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
      backgroundColor: '#ffffff',
      paddingTop:100,
      alignItems: "center",
    },
    passInput:{
      fontSize:15,
      padding:15,
      borderRadius:15,
      backgroundColor: COLOR.darkGrey,
      color: COLOR.blue,
      marginTop: 30,
      shadowColor: 'grey',
      width: '80%'
    },
    button: {
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
      paddingHorizontal: 40,
      borderRadius: 50,
      marginTop: 40,
      width:'60%'
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      fontFamily: FONTS.font,
      letterSpacing: 0.25,
      color: COLOR.blue,
    },
    forgetText:{
      flexDirection:'column',
      fontSize:13,
      color: COLOR.blue,
      marginTop:15,
      justifyContent: 'flex-end'
    } 
});
export default SignUp;