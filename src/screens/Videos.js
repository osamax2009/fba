import React, { useEffect, useState } from "react";
import { View,StyleSheet,FlatList,Pressable,Text, SafeAreaView } from "react-native";
import VideoCard from "../components/videoCard";
import images from "../constants/images";
import { COLOR, FONTS } from "../constants/theme";
import SwitchSelector from "react-native-switch-selector";
const VideoContent = () =>{
    const [dataList, setDataList] =useState();
    useEffect(()=>{
        setDataList(statusList.filter(e=>e.status === 'uploaded'))
    },[])
    const statusList = [
        {
            id: 1,
            content:'This is Testing List with Content To show',
            thimbnail: images.Logo,
            status: 'downloaded',
            date: '1 jan 2022'
        },
        {
            id:2,
            content:'This is Testing List with Content To show',
            thimbnail: images.Logo,
            status: 'uploaded',
            date: '1 jan 2022'
        },
        {
            id:3,
            content:'This is Testing List with Content To show',
            thimbnail: images.Logo,
            status: 'downloaded',
            date: '1 jan 2022'
        },
        {
            id:4,
            content:'This is Testing List with Content To show',
            thimbnail: images.Logo,
            status: 'uploaded',
            date: '1 jan 2022'
        }, 
        {
            id:5,
            content:'This is Testing List with Content To show',
            thimbnail: images.Logo,
            status: 'uploaded',
            date: '1 jan 2022'
        },
        {
            id:6,
            content:'This is Testing List with Content To show',
            thimbnail: images.Logo,
            status: 'downloaded',
            date: '1 jan 2022'
        },
        {
            id:7,
            content:'This is Testing List with Content To show',
            thimbnail: images.Logo,
            status: 'uploaded',
            date: '1 jan 2022'
        },
        {
            id:7,
            content:'This is Testing List with Content To show',
            thimbnail: images.Logo,
            status: 'uploaded',
            date: '1 jan 2022'
        },
        {
            id:7,
            content:'This is Testing List with Content To show',
            thimbnail: images.Logo,
            status: 'uploaded',
            date: '1 jan 2022'
        }
    ]
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.listTab}>
                <SwitchSelector
                    initial={0}
                    onPress={value => {
                        console.log(value);
                        if(value === 'u'){
                            return setDataList(statusList.filter(e=>e.status === 'uploaded'));
                        }else if (value === 'd'){
                            return setDataList(statusList.filter(e=>e.status === 'downloaded')); 
                        }
                        }}
                    textColor={'#ffffff'} //'#7a44cf'
                    selectedColor={COLOR.blue}
                    buttonColor={COLOR.yellow}
                    borderColor={COLOR.lightGrey}
                    backgroundColor={COLOR.blue}
                    textStyle={{fontSize:16,fontWeight:'bold'}}
                    selectedTextStyle={{fontSize:16,fontWeight:'bold'}}
                    buttonMargin={5}
                    hasPadding
                    options={[
                        { label: "Uploaded", value: 'u'}, //images.feminino = require('./path_to/assets/img/feminino.png')
                        { label: "Downlaoded", value: 'd'} //images.masculino = require('./path_to/assets/img/masculino.png')
                    ]}
                    testID="gender-switch-selector"
                    accessibilityLabel="gender-switch-selector"
                    />
                    {/* <View style={styles.buttons}>
                    <Pressable style={({ focused }) => [
                                    {
                                        backgroundColor: focused
                                        ? styles.activeButton
                                        : styles.inActiveButton
                                    },
                                    styles.uploadbutton
                                    ]} onPress={()=>{}}>
                            <Text style={styles.text}>Uploaded</Text>
                    </Pressable>
                    <Pressable style={({ focused }) => [
                                    {
                                        backgroundColor: focused
                                        ? styles.activeButton
                                        : styles.inActiveButton
                                    },
                                    styles.downloadbutton
                                    ]} onPress={()=>{}}>
                            <Text style={styles.text}>Downloaded</Text>
                    </Pressable>
                    </View> */}
                </View>
            <FlatList 
                        style={styles.list}
                        data={dataList}
                        renderItem={({ item, index }) => {
                        // if(item.hasThumbnail === false){
                        // return <ContactCard
                        // contactNumber={item.phoneNumbers.map(phone=>phone.number)}
                        // imageSource={images.Logo} 
                        // name={item.givenName + ' ' + item.familyName}
                        // />
                        // }else{
                        return <VideoCard
                        imageSource={images.VideoThumbnail}
                        content={item.content}
                        status={item.status}
                        date={item.date}
                        />

                        }}
                        numColumns={1}
                        keyExtractor={(item,index)=>item.id}
                        contentContainerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    />
            </View>
        </SafeAreaView>
    )   
}
const styles =StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLOR.blue,
    },
    wrapper:{
        flex:1,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingTop:0,
        justifyContent:"center",
        alignItems:"center"
    },
    list:{
        flex:1,
    },
    listTab:{
        width:'80%',
        marginTop: 30,
    },
    buttons:{
        padding:10,
        width:'100%',
        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:'red',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: FONTS.font,
        color: COLOR.blue,
        letterSpacing:0.25
      },
})
export default VideoContent;