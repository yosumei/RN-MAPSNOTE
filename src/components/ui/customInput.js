//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';
import { Colors } from '../../theme/colors';
import { height } from '../../utils/constants';
import { SearchNormal } from 'iconsax-react-native';

// create a component
const CustomInput = (props) => {
    const {icon,inputTitle=null}=props;
    return (
       <View>
        <Text  style={{fontSize:16,fontWeight:"bold"}} >{inputTitle} </Text>


         <View style={styles.container}>

            {icon}

            <TextInput 
            {...props}
             style={{backgroundColor:"#f2f2f2",
            height:height*.05,
            borderRadius:5,
            paddingHorizontal:8,
            fontSize:18,
            marginVertical:5
                    }} />
        </View>
       </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor:"#f2f2f2",
        flexDirection:"row",
        paddingHorizontal:5,
        borderRadius:8,
        marginVertical:5

    },
});

//make this component available to the app
export default CustomInput;
