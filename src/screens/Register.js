import React, { useState } from 'react';
import { Pressable,SafeAreaView, View, StyleSheet, KeyboardAvoidingView, Image, Text, TextInput, ScrollView, Platform, TouchableOpacity } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import images from '../constants/images';
import { COLOR, FONTS, height } from '../constants/theme';

const Register = ({navigation}) => {
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
                  <Text style={{ fontWeight:'bold', color:'#ffffff', fontSize: 20}}>Register</Text>
                </View>
            <View style={{height:height+150}}> 
              <View style={styles.wrapper}>
                <View style={styles.imageWrapper}>
                        <Image source={images.outerBorder} style={styles.image} />
                        <Image source={images.Camera} style={styles.imageSelector} />
                </View>
              <TextInput
              placeholderTextColor={COLOR.blue}
              multiline={false}
              placeholder="First Name"
              style={styles.passInput}
              onFocus={()=>setEnableShift(true)}
            />
            <TextInput
              placeholderTextColor={COLOR.blue}
              multiline={false}
              placeholder="Last Name"
              style={styles.passInput}
              onFocus={()=>setEnableShift(true)}
            />
            <TextInput
              placeholderTextColor={COLOR.blue}
              multiline={false}
              placeholder="Email"
              style={styles.passInput}
              onFocus={()=>setEnableShift(true)}
            />
            <TextInput
              placeholderTextColor={COLOR.blue}
              multiline={false}
              placeholder="City"
              style={styles.passInput}
              onFocus={()=>setEnableShift(true)}
            />
            <TextInput
              placeholderTextColor={COLOR.blue}
              secureTextEntry={true}
              multiline={false}
              placeholder="Create Password"
              style={styles.passInput}
              onFocus={()=>setEnableShift(true)}
            />
            <TextInput
              placeholderTextColor={COLOR.blue}
              secureTextEntry={true}
              multiline={false}
              placeholder="Confirm Password"
              style={styles.passInput}
              onFocus={()=>setEnableShift(true)}
            />
            <View style= {styles.agree}>
            <Text style={styles.agreeText}>Agree to our</Text>
            <Text onPress={()=>navigation.navigate('Terms')} style={styles.termsText}> Terms & Conditions</Text>
            </View>
                <Pressable style={({ pressed }) => [
                              {
                                backgroundColor: pressed
                                  ? COLOR.yellow
                                  : COLOR.pressed
                              },
                               styles.button
                         ]} onPress={()=>{ navigation.push('SignIn');}}>
                    <Text style={styles.text}>SignUp </Text>
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
    height: 100,
    backgroundColor: COLOR.blue,
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  imageWrapper:{
      width:130,
      height:130,
      marginBottom: 10
  },
  image:{
      width: 130,
      height: 130,
      borderRadius: 100,
      borderWidth: 3,
      borderColor: COLOR.yellow,
      marginBottom:10
    },
    imageSelector:{
        position:'absolute',
        width: 40,
        height:40,
        bottom:0,
        right:0,
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
      paddingTop:20,
      alignItems: "center",
    },
    passInput:{
      fontSize:15,
      padding:15,
      borderRadius:15,
      backgroundColor: COLOR.darkGrey,
      color: COLOR.blue,
      marginTop: 10,
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
      marginTop: 20,
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
    agree:{
        flexDirection:'row'
    },
    agreeText:{
      fontSize:13,
      color: COLOR.blue,
      marginTop:15,
    } ,
    termsText:{
        fontWeight:'bold',
        fontSize:14,
        color: COLOR.blue,
        marginTop:15,
      } 
});
export default Register;