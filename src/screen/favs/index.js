//import liraries
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  RefreshControl,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import FloatActionButton from '../../components/ui/floatActionButton';
import {Add} from 'iconsax-react-native';
import { Colors } from '../../theme/colors';
import NoteCard from '../../components/notes/noteCard';
import { screenStyle } from '../../../vendor/bundle/ruby/3.2.0/styles/screenStyle';
import Header from '../../components/notes/header';
import {ADDNOTE} from '../../utils/routes';
import LoadingModal from '../../components/ui/loadingModal';
import FavoriteCard from '../../components/favorites/favoriteCard';

// create a component
const Favorites = ({navigation}) => {
  const [favorites, setFavorites] = useState([]);
  const [pending, setPending] = useState(true);

  const getFavorites = async () => {
    setPending(true);
    await firestore()
      .collection('Favorites')
      .get()
      .then(querySnapshot => {
        const fetchedNotes = [];
        querySnapshot.forEach(documentSnapshot => {
          fetchedNotes.push({
            id: documentSnapshot.id,
            title: documentSnapshot.data().title,
            description: documentSnapshot.data().description,
            date: documentSnapshot.data().date,
          });
        });
        setFavorites(fetchedNotes);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setPending(false);
      });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <View style={screenStyle.container}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle={'dark-content'} />
      {pending ? (
        <LoadingModal visible={pending} />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={pending} onRefresh={getFavorites} />
          }
          data={favorites}
          renderItem={({item, index}) => (
            <FavoriteCard favorite={item} index={index} />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default Favorites;