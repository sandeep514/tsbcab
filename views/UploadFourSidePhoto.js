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


let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default function UploadFourSidePhoto({navigation}){
	saveProfilePic = ( type , baseProfilePic)=>{
		// console.log(type , baseProfilePic)
		AsyncStorage.setItem(type , baseProfilePic);
	}
	const [vehicleFront, setvehicleFront] = React.useState(null);
	const [vehicleBack, setvehicleBack] = React.useState(null);
	const [vehicleLeft, setvehicleLeft] = React.useState(null);
	const [vehicleRight, setvehicleRight] = React.useState(null);
	


	const handleChoosePhoto = (type) => {
		launchImageLibrary({ noData: true }, (response) => {

		if (response.didCancel != true) {
			if(type == 'vehicleFront'){
				setvehicleFront(response)
			}
			if(type == 'vehicleBack'){
				setvehicleBack(response)
			}
			if(type == 'vehicleLeft'){
				setvehicleLeft(response)
			}
			if(type == 'vehicleRight'){
				setvehicleRight(response)
			}
			saveProfilePic( type , response.uri)
			// ImgToBase64.getBase64String(response.uri).then((base64String) => saveProfilePic( type , base64String)).catch((err) =>{  } );
		}
		});
	};
	const handleUploadPhoto = () => {
		
	};
  
    return (
		<ScrollView vertical={true}>
			<View style={{ flex: 1,justifyContent: 'center', width: '100%',height: (deviceHeight) }}>
				<View style={{width : '100%',justifyContent: 'center'}}>
					<TouchableHighlight  onPress={() => { handleChoosePhoto('vehicleFront') }} style={{borderRadius : 13 , borderWidth: 2 , borderColor: 'lightgrey', backgroundColor: '#e8e8e8',height: 200 ,marginTop: 20,minHeight: 200, width: '100%',justifyContent: 'center', alignItems: 'center'}} >
						{(vehicleFront != null)?
							<View>
								<Image source={{ uri: vehicleFront.uri }} style={{ width: 150, height: 150,borderRadius: 20 }} />
							</View>
						:
							<View>
								<Image source={require('../images/cloud-backup-up-arrow.png')} style={{height: 150 , width: 150}} /> 
							</View>
						}	
					</TouchableHighlight>
				</View>
				<View  style={{width : '100%'}} >
					<TouchableHighlight  onPress={() => { handleChoosePhoto('vehicleBack') }} style={{borderRadius : 13 , borderWidth: 2 , borderColor: 'lightgrey', backgroundColor: '#e8e8e8',height: 200 ,marginTop: 20,minHeight: 200, width: '100%',justifyContent: 'center', alignItems: 'center'}} >
					{(vehicleBack != null)?
						<View>
							<Image source={{ uri: vehicleBack.uri }} style={{ width: 150, height: 150,borderRadius: 20 }} />
						</View>
					:
						<View>
							<Image source={require('../images/cloud-backup-up-arrow.png')} style={{height: 150 , width: 150}} /> 
						</View>
					}
					</TouchableHighlight>
				</View>
				<View  style={{width : '100%'}}>
					<TouchableHighlight  onPress={() => { handleChoosePhoto('vehicleLeft') }} style={{borderRadius : 13 , borderWidth: 2 , borderColor: 'lightgrey', backgroundColor: '#e8e8e8',height: 200 ,marginTop: 20,minHeight: 200, width: '100%',justifyContent: 'center', alignItems: 'center'}} >
					{(vehicleLeft != null)?
						<View>
							<Image source={{ uri: vehicleLeft.uri }} style={{ width: 150, height: 150,borderRadius: 20 }} />
						</View>
					:
						<View>
							<Image source={require('../images/cloud-backup-up-arrow.png')} style={{height: 150 , width: 150}} /> 
						</View>
					}
					</TouchableHighlight>
				</View>
				<View  style={{width : '100%'}}>
					<TouchableHighlight  onPress={() => { handleChoosePhoto('vehicleRight') }} style={{borderRadius : 13 , borderWidth: 2 , borderColor: 'lightgrey', backgroundColor: '#e8e8e8',height: 200 ,marginTop: 20,minHeight: 200, width: '100%',justifyContent: 'center', alignItems: 'center'}} >
					{(vehicleRight != null)?
						<View>
							<Image source={{ uri: vehicleRight.uri }} style={{ width: 150, height: 150,borderRadius: 20 }} />
						</View>
					:
						<View>
							<Image source={require('../images/cloud-backup-up-arrow.png')} style={{height: 150 , width: 150}} /> 
						</View>
					}
					</TouchableHighlight>
				</View>
				<View style={{bottom: 10 , right:10, position: 'absolute'}}>
					<TouchableHighlight onPress={handleUploadPhoto} style={{position: 'absolute',bottom: 0,right:0,height: 70 , width: 70, backgroundColor: 'red',justifyContent: 'center',borderRadius: 100 }} ><View><Text style={{textAlign: 'center',color: 'white' , fontSize: 45,marginTop: 0}}> > </Text></View></TouchableHighlight>
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

