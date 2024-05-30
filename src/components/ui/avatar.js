//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-svg';
import { width } from '../../utils/constants';
import { User } from 'iconsax-react-native';
import { Colors } from '../../theme/colors';
import ImagePicker from 'react-native-image-crop-picker';


// create a component
const Avatar = ({user}) => {

    const openGallery=()=>{
        ImagePicker.openPicker({
            width: 500,
            height: 500,
            cropping: true
          }).then(image => {
            console.log(image);
          });
    }

    return (
        <TouchableOpacity onPress={openGallery}
        style={styles.container}>
            {
                user?.image?
                <Image  />:
                <User  size={40} variant='Bold' />                

            }
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:width*0.3,
        height:width*0.3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.GRAY,
        borderRadius:1000,
        margin:30,
        alignItems:"center"
    },
});

export default Avatar;
