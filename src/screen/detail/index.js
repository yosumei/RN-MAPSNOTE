//import liraries
import React, { Component ,useState} from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { screenStyle } from '../../../vendor/bundle/ruby/3.2.0/styles/screenStyle';
import { Colors } from '../../theme/colors';
import CustomButton from '../../components/ui/customButton';

import firestore from '@react-native-firebase/firestore';

// create a component
const Detail = ({route}) => {
    const [loading, setLoading] = useState(false);
    const {item} = route.params;
  
    const AddFavorite = () => {
  
      setLoading(true);
      firestore()
        .collection('Favorites')
        .add(item)
        .then(() => {
          Alert.alert('Location added favorite');
        })
        .catch(eror => {
          console.log(eror);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    return (
        <View style={screenStyle.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 15, borderBottomWidth: 0.5, borderColor: Colors.GRAY }} >
                <Text style={{ fontWeight: "bold" }}>Title:</Text>
                <Text>{item.title} </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 15, borderBottomWidth: 0.5, borderColor: Colors.GRAY }} >
                <Text style={{ fontWeight: "bold" }}>Description:</Text>
                <Text>{item.description} </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 15, borderBottomWidth: 0.5, borderColor: Colors.GRAY }} >
                <Text style={{ fontWeight: "bold" }}>Rating:</Text>
                <Text>{item.point} </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 15, borderBottomWidth: 0.5, borderColor: Colors.GRAY }} >
                <Text style={{ fontWeight: "bold" }}>Latitude:</Text>
                <Text>{item.coordinate.latitude} </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 15, borderBottomWidth: 0.5, borderColor: Colors.GRAY }} >
                <Text style={{fontWeight:"bold"}}>Longitude:</Text>
                <Text>{item.coordinate.longitude} </Text>
            </View>
            <View style={{flex:1,justifyContent:"flex-end",marginVertical:20}}>
                <CustomButton 

                onPress={()=>AddFavorite()} 
                title="Add Favorite"/>

            </View>
        </View>
    );
};



//make this component available to the app
export default Detail;
