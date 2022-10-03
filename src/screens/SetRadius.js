import React, { useRef, useState } from 'react';
import { Pressable,SafeAreaView, View, StyleSheet, Image, Text } from 'react-native';
import images from '../constants/images';
import { COLOR, FONTS } from '../constants/theme';
import CircleSlider from "react-native-circle-slider";
const SetRadius = () => {
    const [radius, setRadius] = useState(150);
    return (
            <SafeAreaView style={styles.container}>
              <View style={styles.header}>
                  <Text style={{ fontWeight:'bold', color:'#ffffff', fontSize: 20}}>Set Radius</Text>
                  <Image source={images.Logo} style={styles.image} />
              </View>
              <View style={styles.wrapper}>
              <View style={{width:'100%', height:250, justifyContent:'center', alignItems:'center'}}>
              {/* <CircularSlider value={radius} onChange={setRadius(value)} /> */}
                <CircleSlider 
                  textSize={2}
                  btnRadius={20} 
                  dialRadius={100}
                  dialWidth={10}
                  meterColor={COLOR.yellow}
                  strokeWidth={10}
                  textColor={COLOR.yellow}
                  value={radius}
                  onValueChange={value=>setRadius(value)}
                 />
                 {/* <CircleSlider onChange={()=>setRadius(value)} /> */}
                 {/* <ArcSlider
                    value={radius}
                    onChange={()=>'hello'}
                    trackColor={"red"}
                    showThumbText
                    showText
                  /> */}
                 <Text style={{color:COLOR.blue, position:'absolute', fontSize:25,fontWeight:'bold'}}>{radius} Km</Text>
              </View>
                <Pressable style={({ pressed }) => [
                              {
                                backgroundColor: pressed
                                  ? COLOR.yellow
                                  : COLOR.pressed
                              },
                               styles.button
                         ]} onPress={()=>{}}>
                    <Text style={styles.text}>Save</Text>
                </Pressable>          
            </View>
          </SafeAreaView>
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
export default SetRadius;