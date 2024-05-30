//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { screenStyle } from '../../../vendor/bundle/ruby/3.2.0/styles/screenStyle';
import { Image } from 'react-native';
import { height, width } from '../../utils/constants';
import { Colors } from '../../theme/colors';
import CustomButton from '../../components/ui/customButton';
import { SIGNIN, SIGNUP } from '../../utils/routes';
import { Apple, Facebook, Google } from 'iconsax-react-native';

// create a component
const Launch = ({navigation}) => {
    return (
        <SafeAreaView style={screenStyle.safeAreaView}>
            <View style={screenStyle.container}>
                <View style={{flex:2}}>
                    <Image source={require("../../assets/images/launch.png")} 
                    style={{
                        width:width-40,
                        height:height*0.35,
                        resizeMode:"contain"
                    }} />

                </View>
                <View style={{flex:1,justifyContent:"center",alignItems:"center",paddingHorizontal:10}}>

                    <Text style={{fontSize:35,fontWeight:"bold"}}>Hello</Text>
                    <Text style={{fontSize:18,color:Colors.GRAY}}>Welcome To MapsNote</Text>

                </View>
                <View  style={{flex:2}} >
                    <View style={{justifyContent:"center",flex:1}}>
                    <CustomButton 
                    onPress={()=>navigation.navigate(SIGNIN)} title="Sign In" />
                    <CustomButton
                     onPress={()=>navigation.navigate(SIGNUP)} title="Sign Up" />
                    </View>
                     <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                     <Text style={{fontSize:14,color:Colors.GRAY}}>Sign Up Using</Text>
                     <View style={{flexDirection:"row",paddingVertical:10}}>
                        <Facebook size="32" color='#395997'variant='Bold' style={{marginHorizontal:10}} />
                        <Google  color='#db4f43' size="32" variant='Bold' />

                     </View>
                     </View>


                </View>
            </View>
            <View style={{alignItems:"center"}}> 
                <Text  >
                Created By Yosumei
                </Text>
                </View>
        </SafeAreaView>
    );
};

//make this component available to the app
export default Launch;
