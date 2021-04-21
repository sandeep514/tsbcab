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
			<Text>Thanks for fill the form , we will get back to you shortly.</Text>
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

