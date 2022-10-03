import React, { useContext, useState } from 'react';
import { Pressable,SafeAreaView, View, StyleSheet, KeyboardAvoidingView, Image, Text, TextInput, ScrollView, Platform, TouchableOpacity } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import PhoneInput from 'react-native-phone-number-input';
import images from '../constants/images';
import { COLOR, FONTS, height } from '../constants/theme';
import { AuthContext } from '../context/AuthContext';
const Signin = ({navigation}) => {
    const [phone, setPhone] = useState(null);
    const [password, setPassword] = useState(null);
    const[enableShift, setEnableShift] = useState(false);
    const {isLoading ,Login} = useContext(AuthContext);
  const [token, setToken] = useState('');
  const [json, setJson] = useState('');
  const [id, setId] = useState('');
  
  const passwordlenght = () => {
    if (pass.length > 7) {
      return true;
    } else return false;

    //  Alert.alert("your number is "+phoneNumber);</if>
  };

 

  const loginuser = async () => {
   if (passwordlenght() === false) {
      setpassValidError('password lenght not enough ');
    } else {
     
    
      // setLoading(true);
      try {
        const response = await fetch(
          'http://faadminpanel.herokuapp.com/api/auth/login',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              phone: phone,
              password: password,
                     }),
          },
        );
        console.log(phoneNumber);
         await setJson(response.json());
        setToken(json._3.token);
        console.log(json._3.token);
        setToken(json._3.id);
        console.log(json._3.token);
        //  //setData(json.movies);
      } catch (error) {
        console.error(error);
      } finally {
      if(json._3.status== true) { console.log(' ooooooooooooook ');
        const userDetails = {
          user1: {
            userData: {
              id: id ,
            },
            creds: {
              phone: phoneNumber,
              token: token,
            },
          },
        };
        Login(userDetails);}else{
          Alert.alert("failed",json.errors,[{text: 'OK', onPress: () => {}

           } ]);
        }
      }
    }
  };





    return (
     <KeyboardAvoidingView 
     keyboardVerticalOffset={-200}
      style={{flex:1, backgroundColor:'white'}} 
      behavior={Platform.OS === "android" ? "position" : "padding"} 
      enabled={enableShift}>
        <ScrollView bounces={false}>
            <SafeAreaView style={styles.container}>
              <View style={styles.header}>
                  <Text style={{ fontWeight:'bold', color:'#ffffff', fontSize: 20}}>Sign In</Text>
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
                onChangeText={phone=>setPhone(phone)}
                value={phone}
                />
              <TextInput
              placeholderTextColor={COLOR.blue}
              secureTextEntry={true}
              multiline={false}
              placeholder="Enter Password"
              style={styles.passInput}
              onFocus={()=>setEnableShift(true)}
              onChangeText={pass=>setPassword(pass)}
              value={password}
            />
            <TouchableOpacity onPress={()=>{
              navigation.push('ForgetPassword');
            }}>
                <Text style={styles.forgetText}>Forget Password?</Text>
            </TouchableOpacity>
                <Pressable style={({ pressed }) => [
                              {
                                backgroundColor: pressed
                                  ? COLOR.yellow
                                  : COLOR.pressed
                              },
                               styles.button
                         ]} onPress={()=>loginuser()}>
                    <Text style={styles.text}>SignIn </Text>
                </Pressable>
                <Pressable style={({ pressed }) => [
                              {
                                backgroundColor: pressed
                                  ? COLOR.yellow
                                  : COLOR.pressed
                              },
                               styles.button
                         ]} onPress={()=>{ 
                           //navigation.push('SignUp');
                           navigation.navigate("Register");

                           }}>
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
      paddingTop:60,
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
    forgetText:{
      flexDirection:'column',
      fontSize:13,
      color: COLOR.blue,
      marginTop:15,
      justifyContent: 'flex-end'
    } 
});
export default Signin;