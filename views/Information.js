import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default function Information({navigation}){
    function goToUploadScreen(){
        navigation.navigate('UploadProfilePic');
    }
    return (
        <View style={styles.container}>
            <View style={{flex: 0.15}}>
                <Text style={{ textAlign: 'center',marginTop: 20, color: '#fff',fontSize: 30 }}>Required Documents</Text>
            </View>
            <View style={{flex: 1,backgroundColor:"#fff",padding: 30,borderTopLeftRadius: 30,borderTopRightRadius: 30}}>
                <Text style={{textAlign: 'center' , fontSize: 20,marginBottom: 10}}>Please collect the following documents before continue</Text>
                <View style={{backgroundColor: 'red', padding: 10,borderRadius: 6}}>
                    <Text style={{textAlign: 'center' , color: 'white',fontSize: 22}}>Your Profile Picture</Text>
                </View>
                <View style={{backgroundColor: 'red', padding: 10,borderRadius: 6,marginTop: 10}}>
                    <Text style={{textAlign: 'center' , color: 'white',fontSize: 22}}>Your Driving Licence</Text>
                </View>
                <View style={{backgroundColor: 'red', padding: 10,borderRadius: 6,marginTop: 10}}>
                    <Text style={{textAlign: 'center' , color: 'white',fontSize: 22}}>Vehicle Registration (RC) </Text>
                </View>
                <View style={{backgroundColor: 'red', padding: 10,borderRadius: 6,marginTop: 10}}>
                    <Text style={{textAlign: 'center' , color: 'white',fontSize: 22}}>Vehicle Permit</Text>
                </View>
                <View style={{backgroundColor: 'red', padding: 10,borderRadius: 6,marginTop: 10}}>
                    <Text style={{textAlign: 'center' , color: 'white',fontSize: 22}}>Vehicle Health Certificate</Text>
                </View>
                <View style={{backgroundColor: 'red', padding: 10,borderRadius: 6,marginTop: 10}}>
                    <Text style={{textAlign: 'center' , color: 'white',fontSize: 22}}>Vehicle 4 side Photos</Text>
                </View>
                <View style={{backgroundColor: 'red', padding: 10,borderRadius: 6,marginTop: 10}}>
                    <Text style={{textAlign: 'center' , color: 'white',fontSize: 22}}>Medical Certificate</Text>
                </View>
                <View style={{backgroundColor: 'red', padding: 10,borderRadius: 6,marginTop: 10}}>
                    <Text style={{textAlign: 'center' , color: 'white',fontSize: 22}}>Police Clearance Certificate</Text>
                </View>
            </View>
            <View style={{flex: 0.1,justifyContent: 'center' , textAlign: 'center',flexDirection: 'row'}}>
                <TouchableOpacity onPress={ () => {  goToUploadScreen()  } } style={{textAlign: 'center'}}><Text style={{marginTop: 18,color: 'white', fontSize: 20}}>Continue</Text></TouchableOpacity>
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
  }
})

