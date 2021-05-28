import React, { Component, useContext, useState, useEffect } from 'react'
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
  TextInput,
  TouchableHighlight,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { getCabs, getCurrentAddress, getRandString, imagePre } from '../../api/client';
import Geolocation from '@react-native-community/geolocation';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default function UserDashboard({navigation}){
	const [listCabs , setListCabs] = useState();
	const [selectedVehile , setSelectedVehile] = useState('mini');
	const [selectedVehileCharges , setSelectedVehileCharges] = useState('mini');
	const [loader , setLoader] = useState(false);
	const [myAddress , setMyAddress] = useState();


	useEffect(() => {
		setLoader(true)
		getCab();

		Geolocation.getCurrentPosition((info) => {
			console.log(info)
			setLoader(false)
			// getCurrentAddress(info.coords.latitude , info.coords.longitude).then((res) => {
			// 	console.log(res)
			// })
		});

	},[]);	

	function getCab () {
		getCabs().then((res) => {
			setListCabs(res.data.data)
			setSelectedVehile(res.data.data[0]['name'])
			setSelectedVehileCharges(res.data.data[0]['charges'])
		})
	}

  
    return (
		<ScrollView vertical={true}>
			<View style={{ flex: 1, width: '100%',height: (deviceHeight+50)}}>
				<ImageBackground style={{ width: '100%' , height: '100%' }} source={{ uri: 'https://media-eng.dhakatribune.com/uploads/2019/06/new-1560178448213.jpg', height: '100%', width: '100%' }} >
					<View style={{ flex: 9 }}>
						<View style={{flex: 2 ,backgroundColor: 'white',margin: 10,elevation: 5,borderRadius: 20,padding: 20}}>
							{(loader == true) ?
								<View style={{position: 'absolute',flex: 1,justifyContent: 'center',width: '100%',height: '100%'}}>
									<ActivityIndicator size="small" color="red"></ActivityIndicator>
								</View>
							:
								<View></View>
							}
							<View style={{borderLeftWidth: 4 , borderLeftColor: 'green'}}>
								<TextInput style={styles.input} placeholder="Start Trip From" />
							</View>
							<View style={{borderLeftWidth: 4 , borderLeftColor: 'red',marginTop: 10}}>
								<TextInput style={styles.input} placeholder="Start Trip From" />
							</View>
						</View>
						<View style={{flex: 7}}>
						</View>


					</View>
					<View style={{ flex: 3 ,margin: 25,backgroundColor: "#fff",borderRadius: 20,elevation: 5,flexDirection: 'row',overflow: 'hidden'}}>
						<View style={{ flex: 1 }}> 
							<View style={{ flex: 5}}>
								<ScrollView horizontal={true}>
									{(listCabs != undefined) ?
										Object.values(listCabs).map((value) =>{
											return (
												<Pressable key={getRandString()} onPress={() => { setSelectedVehile(value.name) , setSelectedVehileCharges(value.charges) }}>
													<View  style={  (selectedVehile == value.name) ? styles.activeVehicle : {paddingBottom: 0,paddingHorizontal: 15,paddingTop: 20,borderBottomWidth: 2 ,borderBottomColor: '#ededed'} }>
														<View>
															<Image source={{ uri: imagePre+''+value.path }} style={{width: 70 , height: 25}} />
															<Text style={{textAlign : 'center',color: 'grey',marginBottom: 5}}>{value.name}</Text>
														</View>
													</View>	
												</Pressable>	
											)
										})
									: 
										<View></View>
									}
								</ScrollView>
							</View>
							<View style={{ flex: 3 ,flexDirection: 'row',justifyContent: 'center'}}>
								<Text style={{fontSize: 22 , fontWeight: '600'}}>{selectedVehile} Taxi: </Text>
								<Text style={{fontSize: 22, color: 'red',fontWeight: 'bold'}}>₹{selectedVehileCharges}</Text>
								<Text style={{fontSize: 22}}>/km</Text>
							</View>
							<View style={{ flex: 2, flexDirection: 'row',paddingHorizontal: 20}}>
								<Text style={{fontSize: 11,color: 'red'}}>Note:</Text>
								<Text style={{fontSize: 11}}>This is an approximate cost. Actual cost may vary according to traffic and wait time.</Text>
							</View>
							<View style={{flex: 3}}>
								<Pressable style={{padding: 11, backgroundColor: 'red'}} >
									<Text style={{textAlign: 'center' ,color: 'white',fontSize: 20,overflow: 'hidden'}}>Confirm Booking ₹{(selectedVehileCharges * 2)}</Text>
								</Pressable>
							</View>
						</View>

					</View>
				</ImageBackground>
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
  },
  activeVehicle: {
	borderBottomColor: 'red',
	borderBottomWidth: 2,
	paddingBottom: 0,paddingHorizontal: 15,paddingTop: 20,borderBottomWidth: 2
  }
})

