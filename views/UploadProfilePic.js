import React, { Component, useContext, useState } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Button,
  TouchableHighlight,
  ScrollView,
} from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker';
import ImgToBase64 from 'react-native-image-base64';
import AsyncStorage from '@react-native-community/async-storage';
import { uploadAttachments } from '../api/client';


let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
let image64 = '';
export default function UploadProfilePic({navigation}){
	const [ptofilePic, setptofilePic] = React.useState(null);

	const handleChoosePhoto = (type) => {
		launchImageLibrary({ noData: true }, (response) => {
			if( response.fileSize < 2000000 ){
				setptofilePic(response)
				ImgToBase64.getBase64String(response.uri).then((base64String) => {
					if( response.type == "image/jpeg" ){
						image64 = 'data:image/jpeg;base64,'+base64String;
					}else{
						image64 = 'data:image/png;base64,'+base64String;
					}
					console.log(base64String);
				}).catch((err) =>{  } );
			}else{
				alert('File size must be less than 2MB.');
			}
		});
	};
	const handleUploadPhoto = () => {
		AsyncStorage.getItem('user_id').then( (res) => {
				console.log({ 'user_id' : res ,'profilePic': image64});
				uploadAttachments({ 'user_id' : res ,'profilePic':image64}).then((res) => {
					console.log(res)
				} , (err) => {
					console.log(err)
				})
			navigation.navigate('UploadDrivingLicence');
		})
	};
  
    return (
		<ScrollView vertical={true}>
			<View style={{ flex: 1, width: '100%',height: deviceHeight}}>
				<View style={{flex: 2,width : '100%',justifyContent: 'center'}}>
					<TouchableHighlight  onPress={() => { handleChoosePhoto('ptofilePic') }} style={{borderRadius : 13 , borderWidth: 2 , borderColor: 'lightgrey', backgroundColor: '#e8e8e8',height: 200 ,marginTop: 20,minHeight: 200, width: '90%',justifyContent: 'center', alignItems: 'center'}} >
						{(ptofilePic != null)?
							<View>
								<Image source={{ uri: ptofilePic.uri }} style={{ width: 150, height: 150,borderRadius: 20 }} />
							</View>
						:
							<View>
								<Image source={require('../images/cloud-backup-up-arrow.png')} style={{height: 150 , width: 150}} /> 
							</View>
						}	
					</TouchableHighlight>
				</View>
				<View style={{flex: 1 , position: 'absolute',bottom: 10 , right: 10 }}>
					<TouchableHighlight onPress={handleUploadPhoto} style={{height: 70 , width: 70, backgroundColor: 'red',justifyContent: 'center',borderRadius: 100 }} ><View><Text style={{textAlign: 'center',color: 'white' , fontSize: 45,marginTop: 0}}> > </Text></View></TouchableHighlight>
				</View>
			</View>
		</ScrollView>
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

