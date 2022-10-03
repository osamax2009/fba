import React from "react";
import { View, StyleSheet, Image,Text } from "react-native";
import { CheckBox } from "react-native-elements";
import images from "../constants/images";
import { COLOR } from "../constants/theme";
const ContactCard = ({imageSource, contactName, contactNumber}) =>{
    return (
        
        <View style={styles.wrapper}>
            <View style={styles.inner}>
                <Image source={imageSource}  style={styles.image}/>
                <Text style={styles.name}>{contactName}</Text>
                <Text style={styles.number}>{contactNumber}</Text>
            </View>
            <Image source={images.Tick} style={styles.checkBox}/>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        width: 160,
        height: 160,
        padding:10,

        alignItems:"center",
        justifyContent:"center"
    },
    inner:{
        borderRadius: 10,
        borderColor: COLOR.darkGrey,
        borderWidth: 1,
        borderColor: COLOR.blue,
        padding:10,
        width: 150,
        height: 150,
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        width:30,
        height:30,
    },
    name:{
        color:COLOR.blue,
        fontSize:14,
        fontWeight:'bold',
        textAlign:"center"
    },
    number:{
        color:COLOR.blue,
        fontSize:12,
        textAlign:"center"
    },
    checkBox:{
        position: "absolute",
        width:20,
        height:20,
        right:0,
        top:0
    }
});
export default ContactCard