//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from './src/screen/home';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/router/rootNavigator';

// create a component
const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
};


export default App;
