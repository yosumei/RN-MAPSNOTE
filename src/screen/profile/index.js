//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { screenStyle } from '../../../vendor/bundle/ruby/3.2.0/styles/screenStyle';
import CustomButton from '../../components/ui/customButton';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import Avatar from '../../components/ui/avatar';
import { Colors } from '../../theme/colors';

// create a component
const Profile = ({navigation}) => {
  const [userData, setUserData] = useState(null);
  const getUserUid = async () => {
    try {
      const uid = await AsyncStorage.getItem('uid');

      if (uid !== null) {
        getUserInfo(uid);
      }
    } catch (e) {
    }
  };


  const removeUid = async () => {
    try {
      await AsyncStorage.removeItem('uid');
    } catch (e) {
    }

    console.log('Done.');
  };
  const getUserInfo = userId => {
    firestore()
      .collection('Users')
      .doc(userId)
      .onSnapshot(documentSnapshot => {
        setUserData(documentSnapshot.data());
      });
  };
  useEffect(() => {
    getUserUid();
  }, []);

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!')
      removeUid()
      });
  };
  return (
    <View style={screenStyle.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Avatar user={userData} />
      </View>
      <View style={{flex: 3, alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>
          {userData?.name + ' ' + userData?.surname}
        </Text>
        <Text style={{fontSize: 16, fontWeight: '300', marginVertical: 5}}>
          {userData?.job}
        </Text>
        <Text style={{fontSize: 16, fontWeight: '300', marginVertical: 5}}>
          {userData?.email}
        </Text>
      </View>
      <View style={{paddingVertical: 20}}>

        <CustomButton onPress={() => signOut()} title="Sign Out" />
      </View>
    </View>
  );
};

export default Profile;