import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider =({children})=>{
    const timeOut = 2000;
    const [isLoading, setIsLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [isSplashLoading, setIsSplashLoading] = useState(false);
    const [token, setToken] = useState(null);
    const registerAuth =(userDetails) =>{
        

            setIsLoading(true);
                let userInfo=userDetails.user1;
                setUserInfo(userInfo);
                setToken(userDetails.user1.creds.token);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                console.log(userInfo);
            setIsLoading(false);
        
    }
    const Login =(userDetails) =>{
        
                  setIsLoading(true);
                let userInfo=userDetails.user1;
                setUserInfo(userInfo);
                setToken(userDetails.user1.creds.token);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                console.log(userInfo);
            setIsLoading(false);
       
    }
    const Logout=()=>{
        setIsLoading(true);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setToken(null);
        setIsLoading(false);
    }
    const isLoggedIn= async()=>{
        try{
            setIsSplashLoading(true);
            let userInfo =  await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);
            if(userInfo){
                setTimeout(() => {
                    setUserInfo(userInfo);
                    setToken(userInfo.creds.token);
                }, timeOut);
            }
            setTimeout(() => {
                setIsSplashLoading(false);
            }, timeOut);
            
        }catch(e){
            setIsSplashLoading(false);
            console.log(e);
        }
    }
    useEffect(()=>{
        isLoggedIn()
    },[]);
    return (<AuthContext.Provider value={
        {Login,
        registerAuth,
        userInfo,
        isLoading,
        Logout,
        isSplashLoading,
        token
        }}>{children}</AuthContext.Provider>)
} 