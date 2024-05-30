//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import CustomCallout from '../../components/map/customCallout';
import FloatActionButton from '../../components/ui/floatActionButton';
import { ArrowRight, LocationAdd, Map } from 'iconsax-react-native';
import { Colors } from '../../theme/colors';
import Geolocation from '@react-native-community/geolocation';
import { ADDLOCATION, ADDNOTE, COORDINATESELECT, DETAIL } from '../../utils/routes';

// create a component



const CoordinateSelect = ({ navigation }) => {
    const [currentPosition, setCurrentPossition] = useState(null);
    const [coordinate, setCoordinate] = useState(null);
    const getCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            pos => {
                setCurrentPossition(pos.coords);
            },
            error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
            { enableHighAccuracy: true },
        );
    };

    const handleSelectCoordinate = e => {
        setCoordinate(e.nativeEvent.coordinate)
    }



    useEffect(() => {
        getCurrentPosition()
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>

                <FloatActionButton  disabled={coordinate?false:true}
                onPress={() => navigation.navigate(ADDLOCATION,{coordinate:coordinate})}
                    icon={<ArrowRight size={30} color={Colors.WHITE}
                    />} customStyle={{
                        bottom: 27, backgroundColor: coordinate?Colors.GREEN:Colors.GRAY

                    }}
                />

                <MapView
                    onPress={handleSelectCoordinate}
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={
                        {
                            latitude: currentPosition?.latitude,
                            longitude: currentPosition?.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }
                    }
                >
                    {

                    }
                    <Marker
                        title="Konumum"
                        coordinate={{
                            latitude: currentPosition?.latitude,
                            longitude: currentPosition?.longitude,
                        }}
                    />



                    {

                        coordinate &&
                        <Marker

                            coordinate={{
                                latitude: coordinate?.latitude,
                                longitude: coordinate?.longitude,
                            }}
                        />
                    }




                </MapView>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

//make this component available to the app
export default CoordinateSelect;
