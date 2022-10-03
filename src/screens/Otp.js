import React, { createRef, useEffect, useRef, useState } from 'react';
import { Pressable,SafeAreaView, View, StyleSheet, KeyboardAvoidingView, Image, Text, TextInput, ScrollView, Platform, TouchableOpacity } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import images from '../constants/images';
import { COLOR, FONTS, height } from '../constants/theme';
const Otp = ({navigation}) => {
    const[enableShift, setEnableShift] = useState(false);
    const [numOne, setNumOne] = useState('');
    const [numTwo, setNumTwo] = useState('');
    const [numThree, setNumThree] = useState('');
    const [numFour, setNumFour] = useState('');
    const num1= useRef(null);
    const num2= useRef(null);
    const num3= useRef(null);
    const num4= useRef(null);

    useEffect(()=>{
      num1.current.focus();
    },[num1]);
    return (
     <KeyboardAvoidingView 
     keyboardVerticalOffset={-200}
      style={{flex:1, backgroundColor:'white'}} 
      behavior={Platform.OS === "android" ? "position" : "padding"} 
      enabled={enableShift}>
        <ScrollView bounces={false}>
            <SafeAreaView style={styles.container}>
              <View style={styles.header}>
                  <Text style={{  fontWeight:'bold', color:'#ffffff', fontSize: 20}}>One Time Password</Text>
                  <Image source={images.Logo} style={styles.image} />
                </View>
            <View style={{height:height}}> 
              <View style={styles.wrapper}>
              <TextInput
              ref={num1}
              placeholderTextColor={COLOR.blue}
              secureTextEntry={true}
              multiline={false}
              placeholder=""
              maxLength={1}
              keyboardType='numeric'
              style={styles.passInput}
              onFocus={()=>setEnableShift(true)}
              value={numOne}
              onChangeText={(value) => {
                setNumOne(value);
                if (value.length === 1) {
                  num2.current.focus();
                }
                }}
            />
              <TextInput
              ref={num2}
              placeholderTextColor={COLOR.blue}
              secureTextEntry={true}
              multiline={false}
              placeholder=""
              maxLength={1}
              keyboardType='numeric'
              style={styles.passInput}
              onFocus={()=>setEnableShift(true)}
              value={numTwo}
              onChangeText={(value) => {
                setNumTwo(value);
                if (value.length === 1) {
                  num3.current.focus();
                }
                else if(value.length === 0){
                  num1.current.focus();
                }
                }}
            />
            <TextInput
            ref={num3}
              placeholderTextColor={COLOR.blue}
              secureTextEntry={true}
              multiline={false}
              placeholder=""
              maxLength={1}
              keyboardType='numeric'
              style={styles.passInput}
              onFocus={()=>setEnableShift(true)}
              value={numThree}
              onChangeText={(value) => {
                setNumThree(value);
                if (value.length === 1) {
                  num4.current.focus();
                }else if(value.length === 0){
                  num2.current.focus();
                }
                }}
            />
            <TextInput
              ref={num4}
              placeholderTextColor={COLOR.blue}
              secureTextEntry={true}
              multiline={false}
              placeholder=""
              keyboardType='numeric'
              style={styles.passInput}
              maxLength={1}
              onFocus={()=>setEnableShift(true)}
              value={numFour}
              onChangeText={(value) => {
                setNumFour(value);
                if (value.length === 0) {
                  num3.current.focus()
                }
                }}
            />
                <Pressable style={({ pressed }) => [
                              {
                                backgroundColor: pressed
                                  ? COLOR.yellow
                                  : COLOR.pressed
                              },
                               styles.button
                         ]} onPress={()=>{navigation.push('Register')}}>
                    <Text style={styles.text}>Done</Text>
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
        flexDirection: 'row',
        flexWrap:'wrap',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: '#ffffff',
        paddingTop:50,
        alignItems: "center",
        justifyContent: 'center'

      },
      passInput:{
        fontSize:20,
        padding:15,
        borderRadius:15,
        backgroundColor: COLOR.darkGrey,
        color: COLOR.blue,
        marginTop: 30,
        shadowColor: 'grey',
        width: '15%',
        margin: 10,
        textAlign: 'center'
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
export default Otp;