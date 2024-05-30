//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { height } from '../../utils/constants';
import { Colors } from '../../theme/colors';

// create a component
const CustomButton = (props) => {
    const {loading,title,style}=props
    return (
        <TouchableOpacity 
        disabled={loading}
        {...props}
        style={[styles.container,
        loading?styles.disableButton:styles.activeButton,
        style]} >
            {
                loading?
                <ActivityIndicator size={"small"} color={Colors.GRAY} />:
                <Text>{title}</Text>

            }

        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
         height:height*0.05,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:100,
        marginVertical:10
    },
    disableButton:{
        backgroundColor:Colors.GRAY,
    },
    activeButton:{
        backgroundColor:Colors.BLUE,
    }
});

//make this component available to the app
export default CustomButton;
