import React, { Component, useContext, useState } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native'


let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default function ThanksForUpload({navigation}){
    return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<View style={{backgroundColor: 'red' , flex : 1 ,width: '100%',borderBottomEndRadius: 200,borderBottomStartRadius: 200, justifyContent: 'center'}}  >
				<View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Image source={require('../images/tick.png')} style={{height: 200 , width: 200  ,marginTop: 40,justifyContent: 'center'}} /> 
				</View>
			</View>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text style={{fontSize : 25,paddingHorizontal: 50}}>Thanks for fill the form , we will get back to you shortly.</Text>
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

