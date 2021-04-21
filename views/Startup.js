import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity
} from 'react-native'
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default function Startup({navigation}){
    function goToRegister() {
        navigation.navigate('Register');
    }
    return (
        <View style={styles.container}>
            <ImageBackground style={{ width: '100%' , height: '100%' }} source={{ uri: 'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', height: '100%', width: '100%' }} >
                <View style={{ flex: 4.5, top: 100 , left: (deviceWidth / 2.7)}}>
                    <Text allowFontScaling={false} style={styles.welcome}>
                        Logo Here   
                    </Text>
                </View>

                <Text allowFontScaling={false} style={{ color: 'white', textAlign: 'center' , fontSize: 20,marginBottom: 10}}> Register </Text>
                <View style={{ flex: 1 , flexDirection: 'row'}}>

                    <TouchableOpacity onPress={() => { goToRegister() }} style={{backgroundColor: 'red',textAlign: 'center' ,width: '45%', height: 40, padding: 10 , borderRadius: 20,marginLeft: 8}} >
                        <Text allowFontScaling={false} style={{ textAlign: 'center' ,color: 'white',fontWeight: '600' }}>As Driver</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: 'white', textAlign: 'center', width: '45%', height: 40, padding: 10, borderRadius: 20, marginLeft: 10 }}>
                        <Text allowFontScaling={false} style={{ textAlign: 'center' ,color: 'red' , fontWeight: '600' }}>As User</Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    color: 'white'
  }
})

