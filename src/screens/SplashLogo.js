import React from 'react';
import { View, Image, Text, StyleSheet, Button, Pressable, ActivityIndicator } from 'react-native';
import images from '../constants/images';
import { COLOR, FONTS } from '../constants/theme';
import Elevations from 'react-native-elevation'
const Separator = () => (
    <View style={styles.separator} />
  );
// const Continue =()=>{
//     NavigationContainer.
// }
const Splash = ({navigation}) =>{
    const title = "CONTINUE";
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image style={styles.image} source={images.Logo}></Image>
                <Separator />
                <Separator />
                <ActivityIndicator size="large"/>
                {/* <Pressable style={({ pressed }) => [
                              {
                                backgroundColor: pressed
                                  ? COLOR.yellow
                                  : COLOR.pressed
                              },
                               styles.button
                         ]} onPress={()=>navigation.navigate('Home')}>
                    <Text style={styles.text}>{title} </Text>
                </Pressable> */}
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLOR.blue,
        
    },
    wrapper:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
      flex:1,
      resizeMode:'contain',
    },
    button: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 100,
        borderRadius: 50,
        ...Elevations[4]
      },
      text: {
        fontSize: 22,
        lineHeight: 21,
        fontWeight: 'bold',
        fontFamily: FONTS.font,
        letterSpacing: 0.25,
        color: 'white',
      },  
    separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Splash;