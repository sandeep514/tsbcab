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
  ActivityIndicator,
} from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker';
import ImgToBase64 from 'react-native-image-base64';
import AsyncStorage from '@react-native-community/async-storage';
import { uploadAttachments } from '../api/client';


let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
let postedImages = {};

export default function UploadDocuments({navigation}){
	saveProfilePic = ( type , baseProfilePic)=>{
		// AsyncStorage.setItem(type , baseProfilePic);
	}
	const [drivingLicence, setdrivingLicence] = React.useState(null);
	const [healthCert, sethealthCert] = React.useState(null);
	const [medicalCert, setmedicalCert] = React.useState(null);	
	const [permit, setpermit] = React.useState(null);
	const [policeChalan, setpoliceChalan] = React.useState(null);
	const [profilePic, setprofilePic] = React.useState(null);
	const [RC, setRC] = React.useState(null);

	
	const [loader, setLoader] = React.useState(false);


	const handleChoosePhoto = (type) => {
		launchImageLibrary({ noData: true }, (response) => {
			if( response.fileSize < 2000000 ){
				ImgToBase64.getBase64String(response.uri).then((base64String) => {
					if( response.type == "image/jpeg" ){
						image64 = 'data:image/jpeg;base64,'+base64String;
					}else if(response.type == "image/png"){
						image64 = 'data:image/png;base64,'+base64String;
					}else{
						alert('Document should be png or jpeg')
					}
					
					if(type == 'drivingLicence'){
						setdrivingLicence(response);
					}
					if(type == 'healthCert'){
						sethealthCert(response);
					}
					if(type == 'medicalCert'){
						setmedicalCert(response);
					}
					if(type == 'permit'){
						setpermit(response);
					}
					if(type == 'policeChalan'){
						setpoliceChalan(response);
					}
					if(type == 'profilePic'){
						setprofilePic(response);
					}
					if(type == 'RC'){
						setRC(response);
					}

					postedImages[type] = image64;

				}).catch((err) =>{  } );
			}else{
				alert('File size must be less than 2MB.');
			}
		});
	};

	const handleUploadPhoto = () => {
		setLoader(true)
		if( Object.keys(postedImages).length == '7' ){
			AsyncStorage.getItem('user_id').then( (res) => {
				uploadAttachments({ 'user_id' : 41 , 'data' :postedImages }).then((res) => {
					setLoader(false)
					navigation.navigate('UploadFourSidePhoto');
				} , (err) => {
					setLoader(false)

				})
			})
		}else{	
			alert('Please add all required documents');
			setLoader(false)

		}
	};
  
    return (
		
		<ScrollView vertical={true} style={{height: '100%'}}>
			{(loader) ?
				<ActivityIndicator size="large" color="red" style={{ position: 'absolute' ,height: deviceHeight , width: '100%'}}></ActivityIndicator>
				:
				<View></View>
			}
				
			<View  style={(loader) ? styles.loaderStyle : styles.none} >
				<View style={{ marginBottom: 120 ,flex: 1,justifyContent: 'center',flexDirection: 'row',flexWrap: 'wrap', width: '100%',height: deviceHeight}}>
					<View style={{width : '45%',justifyContent: 'center',padding: 20}}>
						<TouchableHighlight  onPress={() => { handleChoosePhoto('drivingLicence') }} style={{borderRadius : 13 , borderWidth: 2 , borderColor: 'lightgrey', backgroundColor: '#e8e8e8',height: 150 ,marginTop: 10,minHeight: 150, width: '100%',justifyContent: 'center', alignItems: 'center'}} >
							{(drivingLicence != null) ?
								<View>
									<Image source={{ uri: drivingLicence.uri }} style={{ width: 120, height: 120,borderRadius: 20 }} />
								</View>
							:
								<View>
									<Image source={require('../images/cloud-backup-up-arrow.png')} style={{height: 100 , width: 100}} /> 
								</View>
							}	
						</TouchableHighlight>
						<Text style={{textAlign: 'center' , color: '#000',fontSize: 16}}>Driving Licence</Text>
					</View>
					<View style={{width : '45%',justifyContent: 'center',padding: 20}}>
						<TouchableHighlight  onPress={() => { handleChoosePhoto('healthCert') }} style={{borderRadius : 13 , borderWidth: 2 , borderColor: 'lightgrey', backgroundColor: '#e8e8e8',height: 150 ,marginTop: 10,minHeight: 150, width: '100%',justifyContent: 'center', alignItems: 'center'}} >
							{(healthCert != null)?
								<View>
									<Image source={{ uri: healthCert.uri }} style={{ width: 120, height: 120,borderRadius: 20 }} />
								</View>
							:
							<View>
									<Image source={require('../images/cloud-backup-up-arrow.png')} style={{height: 100 , width: 100}} /> 
								</View>
							}	
						</TouchableHighlight>
						<Text style={{textAlign: 'center' , color: '#000',fontSize: 16}}>Health Certificate</Text>
					</View>
					<View style={{width : '45%',justifyContent: 'center',padding: 20}}>
						<TouchableHighlight  onPress={() => { handleChoosePhoto('medicalCert') }} style={{borderRadius : 13 , borderWidth: 2 , borderColor: 'lightgrey', backgroundColor: '#e8e8e8',height: 150 ,marginTop: 10,minHeight: 150, width: '100%',justifyContent: 'center', alignItems: 'center'}} >
							{(medicalCert != null)?
								<View>
									<Image source={{ uri: medicalCert.uri }} style={{ width: 120, height: 120,borderRadius: 20 }} />
								</View>
							:
							<View>
									<Image source={require('../images/cloud-backup-up-arrow.png')} style={{height: 100 , width: 100}} /> 
								</View>
							}	
						</TouchableHighlight>
						<Text style={{textAlign: 'center' , color: '#000',fontSize: 16}}>Medical Certificate</Text>
					</View>
					<View style={{width : '45%',justifyContent: 'center',padding: 20}}>
						<TouchableHighlight  onPress={() => { handleChoosePhoto('permit') }} style={{borderRadius : 13 , borderWidth: 2 , borderColor: 'lightgrey', backgroundColor: '#e8e8e8',height: 150 ,marginTop: 10,minHeight: 150, width: '100%',justifyContent: 'center', alignItems: 'center'}} >
							{(permit != null)?
								<View>
									<Image source={{ uri: permit.uri }} style={{ width: 120, height: 120,borderRadius: 20 }} />
								</View>
							:
								<View>
									<Image source={require('../images/cloud-backup-up-arrow.png')} style={{height: 100 , width: 100}} /> 
								</View>
							}	
						</TouchableHighlight>
						<Text style={{textAlign: 'center' , color: '#000',fontSize: 16}}>Driver Permit</Text>

					</View>
					<View style={{width : '45%',justifyContent: 'center',padding: 20}}>
						<TouchableHighlight  onPress={() => { handleChoosePhoto('policeChalan') }} style={{borderRadius : 13 , borderWidth: 2 , borderColor: 'lightgrey', backgroundColor: '#e8e8e8',height: 150 ,marginTop: 10,minHeight: 150, width: '100%',justifyContent: 'center', alignItems: 'center'}} >
							{(policeChalan != null)?
								<View>
									<Image source={{ uri: policeChalan.uri }} style={{ width: 120, height: 120,borderRadius: 20 }} />
								</View>
							:
								<View>
									<Image source={require('../images/cloud-backup-up-arrow.png')} style={{height: 100 , width: 100}} /> 
								</View>
							}	
						</TouchableHighlight>
						<Text style={{textAlign: 'center' , color: '#000',fontSize: 16}}>Police Chalan</Text>

					</View>
					<View style={{width : '45%',justifyContent: 'center',padding: 20}}>
						<TouchableHighlight  onPress={() => { handleChoosePhoto('profilePic') }} style={{borderRadius : 13 , borderWidth: 2 , borderColor: 'lightgrey', backgroundColor: '#e8e8e8',height: 150 ,marginTop: 10,minHeight: 150, width: '100%',justifyContent: 'center', alignItems: 'center'}} >
							{(profilePic != null)?
								<View>
									<Image source={{ uri: profilePic.uri }} style={{ width: 120, height: 120,borderRadius: 20 }} />
								</View>
							:
								<View>
									<Image source={require('../images/cloud-backup-up-arrow.png')} style={{height: 100 , width: 100}} /> 
								</View>
							}	
						</TouchableHighlight>
						<Text style={{textAlign: 'center' , color: '#000',fontSize: 16}}>Profile Picture</Text>

					</View>
					<View style={{width : '45%',justifyContent: 'center',padding: 20}}>
						<TouchableHighlight  onPress={() => { handleChoosePhoto('RC') }} style={{borderRadius : 13 , borderWidth: 2 , borderColor: 'lightgrey', backgroundColor: '#e8e8e8',height: 150 ,marginTop: 10,minHeight: 150, width: '100%',justifyContent: 'center', alignItems: 'center'}} >
							{(RC != null)?
								<View>
									<Image source={{ uri: RC.uri }} style={{ width: 120, height: 120,borderRadius: 20 }} />
								</View>
							:
								<View>
									<Image source={require('../images/cloud-backup-up-arrow.png')} style={{height: 100 , width: 100}} /> 
								</View>
							}	
						</TouchableHighlight>
						<Text style={{textAlign: 'center' , color: '#000',fontSize: 16}}>Registration Certificate</Text>

					</View>
					<View style={{bottom: 10 , right:10, position: 'absolute' ,flex: 1}}>
						<TouchableHighlight onPress={() => { handleUploadPhoto() }} style={{height: 70 , width: 70, backgroundColor: 'red',justifyContent: 'center',borderRadius: 100 }} >
							<View>
								<Text style={{textAlign: 'center',color: 'white' , fontSize: 45,marginTop: 0}}> > </Text>
							</View>
						</TouchableHighlight>
					</View>
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
  },none: {

  },
  loaderStyle: {
	backgroundColor: '#ededed',opacity:0.2,height: deviceHeight,justifyContent: 'center'
  }
})

