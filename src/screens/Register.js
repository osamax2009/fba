import React, {useContext, useState,useCallback} from 'react';
import {
  Pressable,
  SafeAreaView,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  Text,
  TextInput,
  ScrollView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import images from '../constants/images';
import {COLOR, FONTS, height} from '../constants/theme';
import {AuthContext} from '../context/AuthContext';
//import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from "react-native-image-picker"

const Register = ({route, navigation}) => {
  const {isLoading, registerAuth} = useContext(AuthContext);
  //const {phoneNumber, otherParam} = route.params;
  const [enableShift, setEnableShift] = useState(false);
  const [firstname, onChangefirstname] = React.useState('osama');
  const [lastname, onChangelastname] = React.useState('sha');
  const [email, onChangeemail] = React.useState('os@yahoo.com');
  const [city, onChangecity] = React.useState('bagd');
  const [pass, onChangepass] = React.useState('123123123');
  const [cpass, onChangecpass] = React.useState('123123123');
  const [emailValidError, setEmailValidError] = useState('');
  const [passValidError, setpassValidError] = useState('');
  const [cpassValidError, setcpassValidError] = useState('');
  const [token, setToken] = useState('');
  const [json, setJson] = useState('');
  const [id, setId] = useState('');
  const [filePath, setFilePath] = useState('');
  const phoneNumber = "009647703999483"
  const passwordconformation = () => {
    if (pass === cpass) {
      return true;
    } else return false;

    //  Alert.alert("your number is "+phoneNumber);</if>
  };
  const passwordlenght = () => {
    if (pass.length > 7) {
      return true;
    } else return false;

    //  Alert.alert("your number is "+phoneNumber);</if>
  };

 const validateEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      return false;
    } else {
      return true;
    }
  };
  const checkiftherisimage = () => {
    if (uri === null) {
      return false;
    } else {
      return true;
    }
  };
  const createFormData = (photo) => {
    const data = new FormData();
    const uriParts = photo.uri.split('.');
    const fileType = uriParts[uriParts.length - 1];

    data.append('image', {
      name: 'profilePic',
      type: `image/${fileType}`,
      uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
    });

    return data;
  };

  const uploadimage  = async () => {
   

   try{
     console.log(createFormData(pickerResponse?.assets && pickerResponse.assets[0]) );
   
        const response = await fetch(
          'http://faadminpanel.herokuapp.com/api/auth/storeimage',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
             
              image : createFormData(pickerResponse?.assets && pickerResponse.assets[0]) 
            }),
          },
        );
        console.log(response.json());
         await setJson(response.json());
        setFilePath(json.imagepath);
        console.log(json);
        //  //setData(json.movies);
      } catch (error) {
        console.error(error);
      } 
  };

  const registernewuser = async () => {
    if (validateEmail() === false) {
      setEmailValidError('email address must be enter');
    } else if (passwordlenght() === false) {
      setpassValidError('password lenght not enough ');
    } else if (passwordconformation() === false) {
      setpassValidError('password dose not matched ');
    } else {
      setEmailValidError('');
      setpassValidError('');
      setpassValidError('');
      // setLoading(true);
       checkiftherisimage?  await uploadimage() : setFilePath('https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg');
      // try {
      //   const response = await fetch(
      //     'http://faadminpanel.herokuapp.com/api/auth/createaccount',
      //     {
      //       method: 'POST',
      //       headers: {
      //         Accept: 'application/json',
      //         'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify({
      //         phone: phoneNumber,
      //         password: pass,
      //         name: firstname + ' ' + lastname,
      //         email: email,
      //         city: city,
      //         profileimage: filePath 
                
      //       }),
      //     },
      //   );
      //   console.log('phoneNumber '+phoneNumber);
      //    await setJson(response.json());
      //   console.log(response.json());
      //   setToken("jssssssssssss  "+json.token);
      //   setId(json.id);
      //   console.log(json.token);
      //   //  //setData(json.movies);
      // } catch (error) {
      //   console.error(error);
      // } finally {
      // if(json.status== true) { console.log(' ooooooooooooook ');
      //   const userDetails = {
      //     user1: {
      //       userData: {
      //         id: id ,
      //         name: firstname + ' ' + lastname,
      //         email: email,
      //       },
      //       creds: {
      //         phone: phoneNumber,
      //         token: token,
      //       },
      //     },
      //   };
      //   registerAuth(userDetails);}else{
      //     Alert.alert("failed",json.errors,[{text: 'OK', onPress: () => {}

      //      } ]);
      //   }
      // }
     
     
     
      
    }
  };
  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);
  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri ;


  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse);
  }, []);
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={-200}
      style={{flex: 1, backgroundColor: 'white'}}
      behavior={Platform.OS === 'android' ? 'position' : 'padding'}
      enabled={enableShift}>
      <ScrollView bounces={false}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={{fontWeight: 'bold', color: '#ffffff', fontSize: 20}}>
              Register
            </Text>
          </View>
          <View style={{height: height + 150}}>
            <View style={styles.wrapper}>
              <View style={styles.imageWrapper}>
                <Image source={uri ? { uri } : images.outerBorder} style={styles.image} />
              <TouchableOpacity onPress={()=>{
                onImageLibraryPress();
                console.log(" is..... ");
                 console.log(uri);
              }}>
                  <Image source={images.Camera} style={styles.imageSelector} />
                  </TouchableOpacity>
              </View>
              <TextInput
                onChangeText={onChangefirstname}
                placeholderTextColor={COLOR.blue}
                multiline={false}
                placeholder="First Name"
                style={styles.passInput}
                onFocus={() => setEnableShift(true)}
              />
              <TextInput
                onChangeText={onChangelastname}
                placeholderTextColor={COLOR.blue}
                multiline={false}
                placeholder="Last Name"
                style={styles.passInput}
                onFocus={() => setEnableShift(true)}
              />
              <TextInput
                onChangeText={onChangeemail}
                placeholderTextColor={COLOR.blue}
                multiline={false}
                placeholder="Email"
                style={styles.passInput}
                onFocus={() => setEnableShift(true)}
              />
              {emailValidError ? <Text>{emailValidError}</Text> : null}
              <TextInput
                onChangeText={onChangecity}
                placeholderTextColor={COLOR.blue}
                multiline={false}
                placeholder="City"
                style={styles.passInput}
                onFocus={() => setEnableShift(true)}
              />
              <TextInput
                onChangeText={onChangepass}
                placeholderTextColor={COLOR.blue}
                secureTextEntry={true}
                multiline={false}
                placeholder="Create Password"
                style={styles.passInput}
                onFocus={() => setEnableShift(true)}
              />
              {passValidError ? <Text>{passValidError}</Text> : null}

              <TextInput
                onChangeText={onChangecpass}
                placeholderTextColor={COLOR.blue}
                secureTextEntry={true}
                multiline={false}
                placeholder="Confirm Password"
                style={styles.passInput}
                onFocus={() => setEnableShift(true)}
              />
              {cpassValidError ? <Text>{cpassValidError}</Text> : null}
              <View style={styles.agree}>
                <Text style={styles.agreeText}>Agree to our</Text>
                <Text
                  onPress={() => navigation.navigate('Terms')}
                  style={styles.termsText}>
                  {' '}
                  Terms & Conditions
                </Text>
              </View>
              <Pressable
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? COLOR.yellow : COLOR.pressed,
                  },
                  styles.button,
                ]}
                onPress={() => {
                  registernewuser();
                  //navigation.push('SignIn');
                }}>
                <Text style={styles.text}>SignUp </Text>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    width: '100%',
    height: 100,
    backgroundColor: COLOR.blue,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imageWrapper: {
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: COLOR.yellow,
    marginBottom: 10,
  },
  imageSelector: {
    position: 'absolute',
    width: 40,
    height: 40,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    backgroundColor: COLOR.blue,
  },
  wrapper: {
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: '#ffffff',
    paddingTop: 20,
    alignItems: 'center',
  },
  passInput: {
    fontSize: 15,
    padding: 15,
    borderRadius: 15,
    backgroundColor: COLOR.darkGrey,
    color: COLOR.blue,
    marginTop: 10,
    shadowColor: 'grey',
    width: '80%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginTop: 20,
    width: '60%',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    //fontFamily: FONTS.font,
    letterSpacing: 0.25,
    color: COLOR.blue,
  },
  agree: {
    flexDirection: 'row',
  },
  agreeText: {
    fontSize: 13,
    color: COLOR.blue,
    marginTop: 15,
  },
  termsText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: COLOR.blue,
    marginTop: 15,
  },
});
export default Register;
