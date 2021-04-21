import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Startup from '../views/Startup';
import Register from '../views/Register';
import Information from '../views/Information';

import UploadRC from '../views/UploadRC';
import UploadDrivingLicence from '../views/UploadDrivingLicence';
import UploadFourSidePhoto from '../views/UploadFourSidePhoto';
import UploadHealthCert from '../views/UploadHealthCert';
import UploadMedicalCertif from '../views/UploadMedicalCertif';
import UploadPermit from '../views/UploadPermit';
import UploadPoliceChalan from '../views/UploadPoliceChalan';
import UploadProfilePic from '../views/UploadProfilePic';
import ThanksForUpload from '../views/ThanksForUpload';

const Stack = createStackNavigator();

export default function Navigation() {
	return (
		<NavigationContainer>
            <Stack.Navigator initialRouteName="Register" allowFontScaling={false}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#fff',
                        elevation: 0,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                    fontWeight: 'bold',
                    width: '80%',
                    textAlign: 'center',
                },
            }}>

                <Stack.Screen name="Startup"                component={Startup}                 options={{headerShown: false}} />
                <Stack.Screen name="Information"            component={Information}             options={{headerShown: false}} />
                <Stack.Screen name="Register"               component={Register}                options={{headerShown: false}} />

                <Stack.Screen name="UploadRC"               component={UploadRC}                options={{headerShown: true,headerStyle: { backgroundColor: 'red' } , title : 'Upload RC' }} />
                <Stack.Screen name="UploadDrivingLicence"   component={UploadDrivingLicence}    options={{headerShown: true,headerStyle: { backgroundColor: 'red' } , title : 'Upload Driving Licence' }} />
                <Stack.Screen name="UploadFourSidePhoto"    component={UploadFourSidePhoto}     options={{headerShown: true,headerStyle: { backgroundColor: 'red' } , title : 'Upload Four Side Photo' }} />
                <Stack.Screen name="UploadHealthCert"       component={UploadHealthCert}        options={{headerShown: true,headerStyle: { backgroundColor: 'red' } , title : 'Upload Health Cert' }} />
                <Stack.Screen name="UploadMedicalCertif"    component={UploadMedicalCertif}     options={{headerShown: true,headerStyle: { backgroundColor: 'red' } , title : 'Upload Medical Certif' }} />
                <Stack.Screen name="UploadPermit"           component={UploadPermit}            options={{headerShown: true,headerStyle: { backgroundColor: 'red' } , title : 'Upload Permit' }} />
                <Stack.Screen name="UploadPoliceChalan"     component={UploadPoliceChalan}      options={{headerShown: true,headerStyle: { backgroundColor: 'red' } , title : 'Upload Police Chalan' }} />
                <Stack.Screen name="UploadProfilePic"       component={UploadProfilePic}        options={{headerShown: true,headerStyle: { backgroundColor: 'red' } , title : 'Upload Profile Pic' }} />

                <Stack.Screen name="ThanksForUpload"       component={ThanksForUpload}        options={{headerShown: true,headerStyle: { backgroundColor: 'red' } , title : 'Thank you' }} />

            </Stack.Navigator>
		</NavigationContainer>
	);
}
