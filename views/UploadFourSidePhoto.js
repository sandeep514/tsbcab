import React, { Component, useContext, useState ,useEffect } from 'react'
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
import { getCabs } from '../api/client';


let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
let postedImages = {};

export default function UploadFourSidePhoto({navigation}){

	const [frontside, setfrontside] = React.useState(null);
	const [leftside, setleftside] = React.useState(null);
	const [rightside, setrightside] = React.useState(null);
	const [backside, setbackside] = React.useState(null);	
	const [listCabs, setlistCabs] = React.useState(null);	
	
	const [loader, setLoader] = React.useState(false);
	useEffect(() => {
		getCab();
	} , []);
	
	const handleChoosePhoto = (type) => {
		launchImageLibrary({ noData: true }, (response) => {
			console.log(response)
			if( response.fileSize < 2000000 ){
				ImgToBase64.getBase64String(response.uri).then((base64String) => {
					if( response.type == "image/jpeg" ){
						image64 = 'data:image/jpeg;base64,'+base64String;
					}else if(response.type == "image/png"){
						image64 = 'data:image/png;base64,'+base64String;
					}else{
						alert('Document should be png or jpeg')
					}
					
					if(type == 'frontside'){
						setfrontside(response);
					}
					if(type == 'rightside'){
						setrightside(response);
					}
					if(type == 'backside'){
						setbackside(response);
					}
					if(type == 'leftside'){
						setleftside(response);
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
		if( Object.keys(postedImages).length == '4' ){
			AsyncStorage.getItem('user_id').then( (res) => {
				uploadAttachments({ 'user_id' : 41 , 'data' :postedImages }).then((res) => {
					setLoader(false)
					navigation.navigate('ThanksForUpload');
				} , (err) => {
					setLoader(false);
				})
			})
		}else{	
			alert('Please add all required documents');
			setLoader(false);
		}
	};

	const getCab = () => {
		getCabs().then((res) => {
			setlistCabs(res.data.data);
		} , (err) => {
			console.log(err)
		})
	}

	return (
		<View style={{flex: 1}}>			
			<View style={{flex: 1}}>
				<ScrollView vertical={true} >
					{(loader) ?
						<ActivityIndicator size="large" color="red" style={{ position: 'absolute' ,height: deviceHeight , width: '100%'}}></ActivityIndicator>
						:
						<View></View>
					}
					<View style={{flex: 1}}>
						<Text style={{ textAlign: 'center',padding: 10,fontSize: 20,paddingTop: 30 }}>Select Vehicle Type</Text>
						<View style={{ flexDirection: 'row' ,justifyContent: 'space-between' , borderBottomColor: 'lightgrey',borderBottomWidth: 1,paddingBottom: 20}}>
							{(listCabs != null && listCabs != undefined)?
								Object.values(listCabs).map((res) => {
									return(
										<View style={{width : '25%',padding: 5}}>
											<TouchableHighlight style={{borderRadius : 13 , borderWidth: 2 , borderColor: 'lightgrey', height: 100 ,marginTop: 10,minHeight: 100, width: '100%',justifyContent: 'center', alignItems: 'center'}} >
												<View>
													<Image source={require('../images/cloud-backup-up-arrow.png')} style={{height: 50 , width: 50}} /> 
												</View>
											</TouchableHighlight>
											<Text style={{textAlign: 'center' , color: '#000',fontSize: 16}}>{(res.name).toUpperCase()}</Text>
										</View>
							)
								})
							:
								<View></View>	
							}

						</View>
					</View>

					<View style={{}}>
						<Text style={{ textAlign: 'center',paddingTop: 30,fontSize: 20 }}>Upload 4 side Image</Text>
						<View  style={(loader) ? styles.loaderStyle : styles.none} >
							<View style={{flex: 1,justifyContent: 'center',flexDirection: 'row',flexWrap: 'wrap', width: '100%'}}>
								<View style={{width : '45%',justifyContent: 'center',padding: 20}}>
									<TouchableHighlight  onPress={() => { handleChoosePhoto('frontside') }} style={{borderRadius : 13 , borderWidth: 2 , borderColor: 'lightgrey', backgroundColor: '#e8e8e8',height: 150 ,marginTop: 10,minHeight: 150, width: '100%',justifyContent: 'center', alignItems: 'center'}} >
										{(frontside != null) ?
											<View>
												<Image source={{ uri: frontside.uri }} style={{ width: 120, height: 120,borderRadius: 20 }} />
											</View>
										:
											<View>
												<Image source={require('../images/cloud-backup-up-arrow.png')} style={{height: 100 , width: 100}} /> 
											</View>
										}	
									</TouchableHighlight>
									<Text style={{textAlign: 'center' , color: '#000',fontSize: 16}}>Front Side</Text>
								</View>

								<View style={{width : '45%',justifyContent: 'center',padding: 20}}>
									<TouchableHighlight  onPress={() => { handleChoosePhoto('leftside') }} style={{borderRadius : 13 , borderWidth: 2 , borderColor: 'lightgrey', backgroundColor: '#e8e8e8',height: 150 ,marginTop: 10,minHeight: 150, width: '100%',justifyContent: 'center', alignItems: 'center'}} >
										{(leftside != null)?
											<View>
												<Image source={{ uri: leftside.uri }} style={{ width: 120, height: 120,borderRadius: 20 }} />
											</View>
										:
										<View>
												<Image source={require('../images/cloud-backup-up-arrow.png')} style={{height: 100 , width: 100}} /> 
											</View>
										}	
									</TouchableHighlight>
									<Text style={{textAlign: 'center' , color: '#000',fontSize: 16}}>Left Side</Text>
								</View>

								<View style={{width : '45%',justifyContent: 'center',padding: 20}}>
									<TouchableHighlight  onPress={() => { handleChoosePhoto('backside') }} style={{borderRadius : 13 , borderWidth: 2 , borderColor: 'lightgrey', backgroundColor: '#e8e8e8',height: 150 ,marginTop: 10,minHeight: 150, width: '100%',justifyContent: 'center', alignItems: 'center'}} >
										{(backside != null)?
											<View>
												<Image source={{ uri: backside.uri }} style={{ width: 120, height: 120,borderRadius: 20 }} />
											</View>
										:
										<View>
												<Image source={require('../images/cloud-backup-up-arrow.png')} style={{height: 100 , width: 100}} /> 
											</View>
										}	
									</TouchableHighlight>
									<Text style={{textAlign: 'center' , color: '#000',fontSize: 16}}>Back Side</Text>
								</View>

								<View style={{width : '45%',justifyContent: 'center',padding: 20}}>
									<TouchableHighlight  onPress={() => { handleChoosePhoto('rightside') }} style={{borderRadius : 13 , borderWidth: 2 , borderColor: 'lightgrey', backgroundColor: '#e8e8e8',height: 150 ,marginTop: 10,minHeight: 150, width: '100%',justifyContent: 'center', alignItems: 'center'}} >
										{(rightside != null)?
											<View>
												<Image source={{ uri: rightside.uri }} style={{ width: 120, height: 120,borderRadius: 20 }} />
											</View>
										:
											<View>
												<Image source={require('../images/cloud-backup-up-arrow.png')} style={{height: 100 , width: 100}} /> 
											</View>
										}	
									</TouchableHighlight>
									<Text style={{textAlign: 'center' , color: '#000',fontSize: 16}}>Right Side</Text>

								</View>
								
							</View>
						</View>
					</View>
					
				</ScrollView>
			</View>

			<View style={{flex: 0.1, backgroundColor: 'red'}}>
				<TouchableHighlight onPress={() => { handleUploadPhoto() }} style={{justifyContent: 'center',padding: 15}} >
					<Text style={{textAlign: 'center',color: 'white' , fontSize: 35,marginTop: 0}}> Continue </Text>
				</TouchableHighlight>
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
  },none: {

  },
  loaderStyle: {
	backgroundColor: '#ededed',opacity:0.2,height: deviceHeight,justifyContent: 'center'
  }
})

