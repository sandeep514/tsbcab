import React, { Component, useContext, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  ScrollView
} from 'react-native'


let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default function Dashboard({navigation}){
    const [driverStatus , setDriverStatus] = useState(false);
    return (
		<View style={{ flex: 1 }}>
            
            <View style={{flexDirection: 'row' }}>
                <Text style={{color: '#fff' , fontSize: 23,paddingTop: 7,paddingLeft: 5,marginTop:10,marginLeft:10 ,paddingLeft : 20,width: 45,height: 45,backgroundColor: 'red',borderRadius: 100}}>S</Text>
                <Text style={{color: 'red' , fontSize: 23,paddingTop : 17,paddingLeft : 20,width: (deviceWidth - 150),textAlign: 'center'}}>Dashboard</Text>
                {(driverStatus == false)?
                    <Pressable onPress={() => { setDriverStatus(true)}} style={{paddingHorizontal: 10,height: 40,marginTop: 12,paddingTop: 8,backgroundColor: 'red',borderRadius: 7,elevation: 5}}><Text style={{ color: 'white',fontSize: 16 }}>ON DUTY</Text></Pressable>
                :
                    <Pressable onPress={() => { setDriverStatus(false)}} style={{paddingHorizontal: 10,height: 40,marginTop: 12,paddingTop: 8,backgroundColor: 'grey',borderRadius: 7,elevation: 5}}><Text style={{ color: 'white',fontSize: 16 }}>OFF DUTY</Text></Pressable>
                }

            </View>
            <View style={{marginTop: 30}}>
                <View style={{color: 'grey'}}>
                    <Text style={{marginLeft: (deviceWidth-300)}}>TODAY's SALE</Text>
                    <View style={{justifyContent: 'center',flexDirection: 'row'}}>
                        <Text style={{ fontSize: 40 ,color : '#000',marginTop: 5 }}> Rs</Text>
                        <Text style={{ fontSize: 100 ,marginLeft: -20,marginTop: -12,color: '#000',fontWeight: '400'}}> 500</Text>
                        <Text style={{ fontSize: 20 ,marginTop: 50,color: '#000'}}> IND</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop: 30}}>
                <View style={{borderColor: 'blue' , borderWidth: 2,borderColor: 'red' ,backgroundColor: 'red', borderWidth: 2 , width: (deviceWidth-60), height: 150,marginLeft: 20,borderBottomLeftRadius: 40,borderTopLeftRadius: 40,marginLeft: 60}}>
                    <View style={{ flexDirection : 'row',padding: 30}}>
                        <View style={{borderTopColor: 'transparent',borderLeftColor: 'transparent',borderBottomColor: 'transparent',borderRightColor: 'white' ,borderWidth: 2,paddingRight: 20}}>
                            <Text style={{ color: 'white' }}>Today's Total Rides</Text>
                            <Text style={{ color: 'white' , fontSize: 60 ,textAlign: 'center'}}>500</Text>
                        </View>
                        <View style={{borderTopColor: 'transparent',borderLeftColor: 'transparent',borderBottomColor: 'transparent',borderRightColor: 'transparent' ,borderWidth: 2,paddingRight: 20,marginLeft :30}}>
                            <Text style={{ color: 'white' }}>Your Current Rating</Text>
                            <Text style={{ color: 'white' , fontSize: 60,textAlign: 'center' }}>4</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{marginTop: 30}}>
               
                    <View style={{color: 'grey'}}>
                        <Text style={{textAlign: 'center',fontSize: 20}}>LATEST RIDES</Text>
                        <ScrollView vertical={true}>
                            <View style={{justifyContent: 'center',flexDirection: 'row',padding: 20}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingBottom:10, flex:  1,borderBottomColor: 'grey',borderTopColor: 'transparent',borderLeftColor: 'transparent',borderRightColor: 'transparent',borderWidth: 1}}>
                                    <View>
                                        <Image source={require('../images/taxi-26038.png')} style={{height: 40 , width: 60  ,marginTop: 0,justifyContent: 'center'}} /> 
                                    </View>
                                    <View>
                                        <Text style={{color: 'grey'}}>Hall Gate ....... New Amritsar</Text>
                                        <Text style={{color: 'grey'}}>20-03-2021 04:31</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 20}}>Rs100</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center',flexDirection: 'row',padding: 20}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingBottom:10, flex:  1,borderBottomColor: 'grey',borderTopColor: 'transparent',borderLeftColor: 'transparent',borderRightColor: 'transparent',borderWidth: 1}}>
                                    <View>
                                        <Image source={require('../images/taxi-26038.png')} style={{height: 40 , width: 60  ,marginTop: 0,justifyContent: 'center'}} /> 
                                    </View>
                                    <View>
                                        <Text style={{color: 'grey'}}>Hall Gate ....... New Amritsar</Text>
                                        <Text style={{color: 'grey'}}>20-03-2021 04:31</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 20}}>Rs100</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center',flexDirection: 'row',padding: 20}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingBottom:10, flex:  1,borderBottomColor: 'grey',borderTopColor: 'transparent',borderLeftColor: 'transparent',borderRightColor: 'transparent',borderWidth: 1}}>
                                    <View>
                                        <Image source={require('../images/taxi-26038.png')} style={{height: 40 , width: 60  ,marginTop: 0,justifyContent: 'center'}} /> 
                                    </View>
                                    <View>
                                        <Text style={{color: 'grey'}}>Hall Gate ....... New Amritsar</Text>
                                        <Text style={{color: 'grey'}}>20-03-2021 04:31</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 20}}>Rs100</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center',flexDirection: 'row',padding: 20}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingBottom:10, flex:  1,borderBottomColor: 'grey',borderTopColor: 'transparent',borderLeftColor: 'transparent',borderRightColor: 'transparent',borderWidth: 1}}>
                                    <View>
                                        <Image source={require('../images/taxi-26038.png')} style={{height: 40 , width: 60  ,marginTop: 0,justifyContent: 'center'}} /> 
                                    </View>
                                    <View>
                                        <Text style={{color: 'grey'}}>Hall Gate ....... New Amritsar</Text>
                                        <Text style={{color: 'grey'}}>20-03-2021 04:31</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 20}}>Rs100</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center',flexDirection: 'row',padding: 20}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingBottom:10, flex:  1,borderBottomColor: 'grey',borderTopColor: 'transparent',borderLeftColor: 'transparent',borderRightColor: 'transparent',borderWidth: 1}}>
                                    <View>
                                        <Image source={require('../images/taxi-26038.png')} style={{height: 40 , width: 60  ,marginTop: 0,justifyContent: 'center'}} /> 
                                    </View>
                                    <View>
                                        <Text style={{color: 'grey'}}>Hall Gate ....... New Amritsar</Text>
                                        <Text style={{color: 'grey'}}>20-03-2021 04:31</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 20}}>Rs100</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center',flexDirection: 'row',padding: 20}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingBottom:10, flex:  1,borderBottomColor: 'grey',borderTopColor: 'transparent',borderLeftColor: 'transparent',borderRightColor: 'transparent',borderWidth: 1}}>
                                    <View>
                                        <Image source={require('../images/taxi-26038.png')} style={{height: 40 , width: 60  ,marginTop: 0,justifyContent: 'center'}} /> 
                                    </View>
                                    <View>
                                        <Text style={{color: 'grey'}}>Hall Gate ....... New Amritsar</Text>
                                        <Text style={{color: 'grey'}}>20-03-2021 04:31</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 20}}>Rs100</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center',flexDirection: 'row',padding: 20}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingBottom:10, flex:  1,borderBottomColor: 'grey',borderTopColor: 'transparent',borderLeftColor: 'transparent',borderRightColor: 'transparent',borderWidth: 1}}>
                                    <View>
                                        <Image source={require('../images/taxi-26038.png')} style={{height: 40 , width: 60  ,marginTop: 0,justifyContent: 'center'}} /> 
                                    </View>
                                    <View>
                                        <Text style={{color: 'grey'}}>Hall Gate ....... New Amritsar</Text>
                                        <Text style={{color: 'grey'}}>20-03-2021 04:31</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 20}}>Rs100</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center',flexDirection: 'row',padding: 20}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingBottom:10, flex:  1,borderBottomColor: 'grey',borderTopColor: 'transparent',borderLeftColor: 'transparent',borderRightColor: 'transparent',borderWidth: 1}}>
                                    <View>
                                        <Image source={require('../images/taxi-26038.png')} style={{height: 40 , width: 60  ,marginTop: 0,justifyContent: 'center'}} /> 
                                    </View>
                                    <View>
                                        <Text style={{color: 'grey'}}>Hall Gate ....... New Amritsar</Text>
                                        <Text style={{color: 'grey'}}>20-03-2021 04:31</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 20}}>Rs100</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center',flexDirection: 'row',padding: 20}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingBottom:10, flex:  1,borderBottomColor: 'grey',borderTopColor: 'transparent',borderLeftColor: 'transparent',borderRightColor: 'transparent',borderWidth: 1}}>
                                    <View>
                                        <Image source={require('../images/taxi-26038.png')} style={{height: 40 , width: 60  ,marginTop: 0,justifyContent: 'center'}} /> 
                                    </View>
                                    <View>
                                        <Text style={{color: 'grey'}}>Hall Gate ....... New Amritsar</Text>
                                        <Text style={{color: 'grey'}}>20-03-2021 04:31</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 20}}>Rs100</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center',flexDirection: 'row',padding: 20}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingBottom:10, flex:  1,borderBottomColor: 'grey',borderTopColor: 'transparent',borderLeftColor: 'transparent',borderRightColor: 'transparent',borderWidth: 1}}>
                                    <View>
                                        <Image source={require('../images/taxi-26038.png')} style={{height: 40 , width: 60  ,marginTop: 0,justifyContent: 'center'}} /> 
                                    </View>
                                    <View>
                                        <Text style={{color: 'grey'}}>Hall Gate ....... New Amritsar</Text>
                                        <Text style={{color: 'grey'}}>20-03-2021 04:31</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 20}}>Rs100</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center',flexDirection: 'row',padding: 20}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingBottom:10, flex:  1,borderBottomColor: 'grey',borderTopColor: 'transparent',borderLeftColor: 'transparent',borderRightColor: 'transparent',borderWidth: 1}}>
                                    <View>
                                        <Image source={require('../images/taxi-26038.png')} style={{height: 40 , width: 60  ,marginTop: 0,justifyContent: 'center'}} /> 
                                    </View>
                                    <View>
                                        <Text style={{color: 'grey'}}>Hall Gate ....... New Amritsar</Text>
                                        <Text style={{color: 'grey'}}>20-03-2021 04:31</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 20}}>Rs100</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center',flexDirection: 'row',padding: 20}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingBottom:10, flex:  1,borderBottomColor: 'grey',borderTopColor: 'transparent',borderLeftColor: 'transparent',borderRightColor: 'transparent',borderWidth: 1}}>
                                    <View>
                                        <Image source={require('../images/taxi-26038.png')} style={{height: 40 , width: 60  ,marginTop: 0,justifyContent: 'center'}} /> 
                                    </View>
                                    <View>
                                        <Text style={{color: 'grey'}}>Hall Gate ....... New Amritsar</Text>
                                        <Text style={{color: 'grey'}}>20-03-2021 04:31</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 20}}>Rs100</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center',flexDirection: 'row',padding: 20}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingBottom:10, flex:  1,borderBottomColor: 'grey',borderTopColor: 'transparent',borderLeftColor: 'transparent',borderRightColor: 'transparent',borderWidth: 1}}>
                                    <View>
                                        <Image source={require('../images/taxi-26038.png')} style={{height: 40 , width: 60  ,marginTop: 0,justifyContent: 'center'}} /> 
                                    </View>
                                    <View>
                                        <Text style={{color: 'grey'}}>Hall Gate ....... New Amritsar</Text>
                                        <Text style={{color: 'grey'}}>20-03-2021 04:31</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 20}}>Rs100</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center',flexDirection: 'row',padding: 20}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingBottom:10, flex:  1,borderBottomColor: 'grey',borderTopColor: 'transparent',borderLeftColor: 'transparent',borderRightColor: 'transparent',borderWidth: 1}}>
                                    <View>
                                        <Image source={require('../images/taxi-26038.png')} style={{height: 40 , width: 60  ,marginTop: 0,justifyContent: 'center'}} /> 
                                    </View>
                                    <View>
                                        <Text style={{color: 'grey'}}>Hall Gate ....... New Amritsar</Text>
                                        <Text style={{color: 'grey'}}>20-03-2021 04:31</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 20}}>Rs100</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center',flexDirection: 'row',padding: 20}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingBottom:10, flex:  1,borderBottomColor: 'grey',borderTopColor: 'transparent',borderLeftColor: 'transparent',borderRightColor: 'transparent',borderWidth: 1}}>
                                    <View>
                                        <Image source={require('../images/taxi-26038.png')} style={{height: 40 , width: 60  ,marginTop: 0,justifyContent: 'center'}} /> 
                                    </View>
                                    <View>
                                        <Text style={{color: 'grey'}}>Hall Gate ....... New Amritsar</Text>
                                        <Text style={{color: 'grey'}}>20-03-2021 04:31</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 20}}>Rs100</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center',flexDirection: 'row',padding: 20}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingBottom:10, flex:  1,borderBottomColor: 'grey',borderTopColor: 'transparent',borderLeftColor: 'transparent',borderRightColor: 'transparent',borderWidth: 1}}>
                                    <View>
                                        <Image source={require('../images/taxi-26038.png')} style={{height: 40 , width: 60  ,marginTop: 0,justifyContent: 'center'}} /> 
                                    </View>
                                    <View>
                                        <Text style={{color: 'grey'}}>Hall Gate ....... New Amritsar</Text>
                                        <Text style={{color: 'grey'}}>20-03-2021 04:31</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 20}}>Rs100</Text>
                                    </View>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
               
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

