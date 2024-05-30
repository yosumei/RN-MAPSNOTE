//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';

// create a component
const FloatActionButton = (props) => {
    const {icon,customStyle}=props
    return (
        <TouchableOpacity {...props} style={[styles.container,customStyle]}>
        {icon}
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        position:"absolute",
        zIndex:99,
        bottom:30,
        width:60,
        right:20,
        height:60,
        borderRadius:100,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,
    },
});

//make this component available to the app
export default FloatActionButton;
