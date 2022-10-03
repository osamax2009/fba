import React, { useContext } from "react";
import { SafeAreaView, Text, View, StyleSheet,Image } from "react-native";
import SettingsList from "../components/settingsList";
import images from "../constants/images";
import { COLOR } from "../constants/theme";
import { AuthContext } from "../context/AuthContext";
const Settings =({navigation}) =>{
  const {Logout} = useContext(AuthContext);
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <SettingsList name="map-location" group="lodgicons" color={COLOR.blue} text='Set Radius' navigate={()=>navigation.navigate('SetRadius')}/>
            <SettingsList name="group-profile-users" group="font-awesome" color={COLOR.blue} text='Family Members' navigate={()=>navigation.navigate('AddFamilyMembers')}/>
            <SettingsList name="online-location" group="lodgicons" color={COLOR.blue} text='Change Home Location'/>
            <SettingsList name="phone-call-button" group="material-design" color={COLOR.blue} text='Emergency Number'/>
            <SettingsList name="map-location" group="lodgicons" color={COLOR.blue} text='Terms & Conditions'navigate={()=>navigation.navigate('Terms')}/>
            <SettingsList  name="contract-3" group="file-folder" color={COLOR.blue} text='About'/>
            <SettingsList name="logout" group="miscellaneous" color={COLOR.blue} text='Logout' navigate={Logout}/>
          </View>
        </View> 
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    header:{
      flexDirection: 'row',
      width: '100%',
      height: 100,
      justifyContent:'flex-end',
      alignItems: 'center',
      backgroundColor: COLOR.blue,
    },
    image:{
        width: 50,
        height: 50,
        marginRight:35,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: COLOR.yellow
      },
      container:{
        flex: 1,
        backgroundColor: COLOR.blue
      },
      wrapper:{
        flex: 1,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: '#ffffff',
        paddingTop:50,
        alignItems: "center"
      }
});
export default Settings;