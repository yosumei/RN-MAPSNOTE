//import liraries
import { ArrowCircleRight2, ArrowRight2, Star } from 'iconsax-react-native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../theme/colors';
import { DETAIL } from '../../utils/routes';

// create a component
const CustomCallout = ({ title, description, point }) => {
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }} >
                <Text style={{ fontSize: 18, fontWeight: "bold" }} >{title}</Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >

                    <Star size={20} color={Colors.ORANGE} variant='Bold' />
                    <Text style={{ fontWeight: "700", fontSize: 12 }} >{point} </Text>
                </View>

            </View>
            <Text style={{ fontSize: 12, fontWeight: "500", color: Colors.GRAY }} >{description}</Text>
            <View style={{
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10
            }}>
                <TouchableOpacity style={{paddingBottom:75}} >
                    <ArrowCircleRight2 size="32"
                        color={Colors.GREEN}
                        variant='Bold' />
                </TouchableOpacity>
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 100,
        backgroundColor: '#fff',
        padding: 5,
    },
});

//make this component available to the app
export default CustomCallout;
