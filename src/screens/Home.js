import React, { useContext } from 'react';
import { Modal, StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { COLOR, FONTS, height } from '../constants/theme';
import Elevations from 'react-native-elevation'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../constants/images';
import Options from '../components/optionsCard';
import PoliceAlert from '../components/PoliceAlertCard';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';

const Separator = () => (
    <View style={styles.separator} />
  );
const Home = () =>{
  const {isLoading, userInfo} = useContext(AuthContext);
    return (
        <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
        <Spinner visible={isLoading}/>
          <View style={styles.header}>
            <Text style={{flex:1, marginLeft:40, fontWeight:'bold', color:'#ffffff', fontSize: 20}}>Home</Text>
            <Image source={images.Profile} style={styles.image} />
          </View> 
        <View style={styles.backgroundContainer}>
            <View style={styles.wrapper}>
              <PoliceAlert imageSource={images.Police} text='Police' subtext='Interaction Alert'/>
            </View>
        </View>
        <View style={styles.selectOption}>
          <Options imageSource={images.Friends} text='SOS' subtext='Friends'/>
          <Options imageSource={images.Family} text='SOS' subtext='Family'/>
          <Options imageSource={images.Safe} text='Safe' subtext='End Call'/>
          <Options imageSource={images.Call} text='Call' subtext='Dial Call'/>
        </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    header:{
      flexDirection: 'row',
      width: '100%',
      height: 120,
      justifyContent:'flex-end',
      alignItems: 'center',
      backgroundColor: COLOR.blue,
      borderBottomRightRadius: 40,
      borderBottomLeftRadius: 40,
      
    },
    backgroundContainer:{
        justifyContent: 'center',
        alignItems:'center'
    },
    wrapper:{
        height:220,
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        position: 'absolute',
        top:-30,
        borderRadius: 50
    },
    textTitle: {
        fontSize: 16,
        fontFamily: FONTS.font,
        fontWeight: 'bold',
        color:COLOR.blue
    },
    textContent:{
        fontSize: 12,
        fontFamily: FONTS.font,
        color: COLOR.blue,
        marginTop:10,
        marginBottom:10,
        textAlign: 'justify'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      button: {
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        ...Elevations[4]
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        fontFamily: FONTS.font,
        letterSpacing: 0.25,
        color: 'white',
      },
      image:{
        width: 50,
        height: 50,
        marginRight:35,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: COLOR.yellow
      },
      selectOption:{
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 250,

      }
});
export default Home;