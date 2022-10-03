import React from "react";
import { Image, Text, View, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-ico";
import { COLOR } from "../constants/theme";

const SettingsList = (props) =>{
    return (
        <View style={styles.wrapper}>
          <Pressable 
          style={styles.pressable} 
          android_ripple ={{backgroundColor: 'red', borderless: true}}
          onPress={props.navigate}
          >
            {/* <Image style={styles.image} source={props.imageSource}/> */}
            <Icon name={props.name} group={props.group} color={props.color}/>
            <Text style={styles.textStyle}>{props.text}</Text>
            </Pressable>
        </View>
    )   
}
const styles = StyleSheet.create({
    wrapper:{
        width: '80%',
        backgroundColor: COLOR.darkGrey,
        margin: 10,
        borderRadius: 20,
        borderWidth:1,
        borderColor: COLOR.blue
    },
    textStyle:{
        color: COLOR.blue,
        marginLeft:20
    },
    pressable:{
        flexDirection: 'row',
        padding: 15
    },
    image:{
        width: 20,
        height:20
    }
})
export default SettingsList;