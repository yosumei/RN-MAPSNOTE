//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, CalloutSubview } from 'react-native-maps';
import CustomCallout from '../../components/map/customCallout';
import FloatActionButton from '../../components/ui/floatActionButton';
import { LocationAdd, Map } from 'iconsax-react-native';
import { Colors } from '../../theme/colors';
import Geolocation from '@react-native-community/geolocation';
import { ADDNOTE, COORDINATESELECT, DETAIL } from '../../utils/routes';

import firestore from '@react-native-firebase/firestore';




const Home = ({ navigation }) => {
  const [currentPosition, setCurrentPossition] = useState(null);
  const [mapType, setMapType] = useState('standart');
  const [locations, setLocation] = useState([]);


  const changeMapType = () => {
    if (mapType === 'standart') {
      setMapType('satellite');
    } else {
      setMapType('standart');
    }
  };
  const getLocation = async () => {

    await firestore()
      .collection('Locations')
      .get()
      .then(querySnapshot => {
        const fetchedLocations = [];
        querySnapshot.forEach(documentSnapshot => {
          fetchedLocations.push({
            id: documentSnapshot.id,
            title: documentSnapshot.data().title,
            description: documentSnapshot.data().description,
            date: documentSnapshot.data().date,
            point: documentSnapshot.data().point,
            coordinate: documentSnapshot.data().coordinate,
          });
        });
        setLocation(fetchedLocations);
      })
      .catch(error => {
      })
      .finally(() => {
;
      });
  };


  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        setCurrentPossition(pos.coords);
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: false},
    );
  };




  useEffect(() => {
    getCurrentPosition()
    getLocation()
  }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FloatActionButton
          icon={<Map size={30} color={Colors.GREEN}
          />} customStyle={{
            left: 10,

          }}
          onPress={() => changeMapType()} />
        <FloatActionButton onPress={() => navigation.navigate(COORDINATESELECT)}
          icon={<LocationAdd size={30} color={Colors.WHITE}
          />} customStyle={{
            bottom: 27, backgroundColor: Colors.BLACK

          }}
        />

<MapView
          mapType={mapType}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: currentPosition?.latitude,
            longitude: currentPosition?.longitude,
          }}>
          {locations.map((marker, index) => (
            <Marker
              key={index}
              title={marker.title}
              description={marker.description}
              coordinate={marker.coordinate}>

              <Callout
                onPress={() => navigation.navigate(DETAIL, {item: marker})}>
                <CalloutSubview>
                  <CustomCallout
                    title={marker.title}
                    description={marker.description}
                    point={marker.point}
                  />
                </CalloutSubview>
              </Callout>
            </Marker>
          ))}
          <Marker
            title="Konumum"
            coordinate={{
              latitude: currentPosition?.latitude,
              longitude: currentPosition?.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
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
export default Home;
