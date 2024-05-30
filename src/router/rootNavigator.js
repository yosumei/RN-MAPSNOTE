// In App.js in a new project

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/home';
import { ADDLOCATION, ADDNOTE, COORDINATESELECT, DETAIL, EDITNOTE, EDITUSER, HOME, LAUNCH, NOTES, SIGNIN, SIGNUP, TAB } from '../utils/routes';
import Geolocation from '@react-native-community/geolocation';
import Detail from '../screen/detail';
import Notes from '../screen/notes';
import AddNote from '../screen/home/addNote';
import EditNote from '../screen/notes/editNote';
import SignIn from '../screen/signIn';
import SignUp from '../screen/signUp';
import Launch from '../screen/launch';
import auth from '@react-native-firebase/auth';
import { Logout, LogoutCurve } from 'iconsax-react-native';
import TabNavigator from './tabNavigator';
import CoordinateSelect from '../screen/home/coordinateSelect';
import AddLocation from '../screen/home/addLocation';





const Stack = createNativeStackNavigator();




function RootNavigator() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
      }
    
      useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);
      if (initializing) return null;

      const signOut=()=>{
        auth()
        .signOut()
        .then(()=>console.log("Logged Out"))
      }

    return (

        <Stack.Navigator screenOptions={{
            headerBackTitle:"Back"
        }} >
            {
                !user?
                <Stack.Group>
                <Stack.Screen 
                 options={{ headerShown: false }}
                 name={LAUNCH} component={Launch}  />
                 <Stack.Screen name={SIGNIN} component={SignIn} />
                 <Stack.Screen name={SIGNUP} component={SignUp} />
      
                </Stack.Group>:
                 <Stack.Group> 
                     <Stack.Screen  options={{
                        headerShown:false
                     }} name={TAB} component={TabNavigator} />
                     <Stack.Screen name={ADDNOTE} component={AddNote} />
                     <Stack.Screen name={EDITNOTE} component={EditNote} />
                     <Stack.Screen name={DETAIL} component={Detail} />
                     <Stack.Screen name={COORDINATESELECT} component={CoordinateSelect} />
                     <Stack.Screen name={ADDLOCATION} component={AddLocation} />

                  
         
                 </Stack.Group>
            }
         

       
        </Stack.Navigator>

    );
}

export default RootNavigator;