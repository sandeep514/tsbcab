import AsyncStorage from '@react-native-community/async-storage';
import React, { Component, useEffect, useState } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from 'react-native'
import { register } from '../api/client';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default function Register({navigation}){
    const [ indicator  , setIndicator]    = useState(false);
    const [ validation  , setValidation]    = useState(false);
    const [ name  , setName]                    = useState('name');
    const [ mobile  , setMobile]                = useState('9653332584');
    const [ email  , setEmail]                  = useState('sandy.singh@gmail.com');
    const [ password  , setPassword]            = useState('123456789');
    const [ confPassword  , setConfPassword]    = useState('123456789');

    function goToUploadScreen(){
        setIndicator(true);
        if( name == undefined || mobile == undefined || email == undefined || password == undefined || confPassword == undefined ){
            setValidation('Required fields are missing.');
            setIndicator(false);
            return false;
        }
        if( name == '' || mobile == '' || email == '' || password == '' || confPassword == '' ){
            setValidation('Required fields are missing.');
            setIndicator(false);
            return false;
        }else{
            if(mobile != undefined){
                console.log(mobile.length)
                if( mobile.length != 10 ){
                    setValidation('Mobile no. should be 10 digit.');
                    setIndicator(false);
                    return false;
                }
            }
        }
        if( password != confPassword ){
            setValidation('Password and Confirm Password should be same.');
            setIndicator(false);
            return false;
        }

        if(password != undefined , confPassword != undefined){

            if( password.length < 8 ){
                setValidation('Password should be greater and equal to 8.');
                setIndicator(false);
                return false;
            }
        }
        

        register( { 
            type                    :  "driver",
            name                    :  name,
            mobile                  :  mobile,
            email                   :  email,
            password                :  password,
            password_confirmation   :  confPassword,
         } ).then((res) => {
            setIndicator(false);
            var user_id = res.data.user.id;
            AsyncStorage.setItem('user_id' , user_id.toString());
            navigation.navigate('Information');
        } , (err) => {
            if( err.data.status == false ){
                setValidation("User already exist or something went wrong.")
            }
            setIndicator(false);
        })
    }
    return (
        <View style={styles.container}>
            <View style={{flex: 0.15}}>
                <Text style={{ textAlign: 'center',marginTop: 20, color: '#fff',fontSize: 30 }}>Register</Text>
            </View>
            <View style={{flex: 1,backgroundColor:"#fff",padding: 30,borderTopLeftRadius: 30,borderTopRightRadius: 30}}>
                <Text style={{textAlign: 'center' , fontSize: 20,marginBottom: 10}}>PLEASE FILL YOUR BASIC INFOTMATION</Text>
                <View style={{ flex: 0.4, justifyContent: 'center' }}>
                    <Text style={{textAlign: 'center'}}>LOGO</Text>
                </View>
                <View style={{marginTop: 0}}>
                    <TextInput style={styles.input} value={name} placeholder="Name"              onChangeText={(value) => { setName(value) }} />
                    <TextInput keyboardType="number-pad" style={styles.input} value={mobile} placeholder="Mobile" onChangeText={(value) => { setMobile(value) }} />
                    <TextInput style={styles.input} value={email} placeholder="Email"             onChangeText={(value) => { setEmail(value) }} />
                    <TextInput style={styles.input} value={password} placeholder="Password"          onChangeText={(value) => { setPassword(value) }} />
                    <TextInput style={styles.input} value={confPassword} placeholder="Confirm Password"  onChangeText={(value) => { setConfPassword(value) }} />
                </View>
                {( validation != false) ? 
                    <View>
                        <Text style={{textAlign: 'center',color: 'red',fontSize: 18}}>{ validation }</Text>
                    </View>
                :
                    <Text></Text>
                }
            </View>
            <View style={{flex: 0.1,justifyContent: 'center' , textAlign: 'center',flexDirection: 'row'}}>
                {(indicator) ?
                    <ActivityIndicator color="white" size="large"></ActivityIndicator> 
                :
                    <TouchableOpacity onPress={ (event) => {  goToUploadScreen(event)  } } style={{textAlign: 'center'}}><Text style={{marginTop: 18,color: 'white', fontSize: 20}}>Register Now</Text></TouchableOpacity>
                }
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: 'red'
    },
    welcome: {
        color: 'white'
    },
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 2,
        borderColor: '#e8e8e8'

    },
})

