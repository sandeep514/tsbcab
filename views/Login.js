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
import { login } from '../api/client';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default function Login({navigation}){
    const [ indicator  , setIndicator]          = useState(false);
    const [ validation  , setValidation]        = useState(false);

    const [ email  , setEmail]                  = useState('sandy.singh@gmail.com');
    const [ password  , setPassword]            = useState('123456789');

    function goToUploadScreen(){
        setIndicator(true);
        if(   email == undefined || password == undefined  ){
            setValidation('Required fields are missing.');
            setIndicator(false);
            return false;
        }
        if( email == '' || password == '' ){
            setValidation('Required fields are missing.');
            setIndicator(false);
            return false;
        }

        login( { 
            mobile                   :  email,
            password                :  password
         } ).then((res) => {
            setIndicator(false);
            var user_id = res.data.user.id;
            AsyncStorage.setItem('user_id' , user_id.toString());
            navigation.navigate('Dashboard');
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
                <Text style={{ textAlign: 'center',marginTop: 20, color: '#fff',fontSize: 30 }}>Login</Text>
            </View>
            <View style={{flex: 1,backgroundColor:"#fff",padding: 30,borderTopLeftRadius: 30,borderTopRightRadius: 30}}>
                <Text style={{textAlign: 'center' , fontSize: 20,marginBottom: 10}}>PLEASE FILL YOUR BASIC INFOTMATION</Text>
                <View style={{ flex: 0.4, justifyContent: 'center' }}>
                    <Text style={{textAlign: 'center'}}>LOGO</Text>
                </View>
                <View style={{marginTop: 0}}>
                    <TextInput style={styles.input} value={email} placeholder="Email"             onChangeText={(value) => { setEmail(value) }} />
                    <TextInput style={styles.input} value={password} placeholder="Password"          onChangeText={(value) => { setPassword(value) }} />
                </View>
                <View >
                    <Text style={{textAlign: 'center'}}>Please follow up <Text style={{color: 'red'}}>Terms and condition</Text></Text>
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
                    <TouchableOpacity onPress={ (event) => {  goToUploadScreen(event)  } } style={{textAlign: 'center'}}><Text style={{marginTop: 18,color: 'white', fontSize: 20}}>Login Now</Text></TouchableOpacity>
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

