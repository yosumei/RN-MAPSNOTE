import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/home';
import Notes from '../screen/notes';
import Profile from '../screen/profile';
import { FAVS, HOME, MAP, MAP2, NOTES, PROFILE } from '../utils/routes';
import Favs from '../screen/favs';
import { Colors } from '../theme/colors';
import TabIcon from '../components/router/tabIcon';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route?.name}
            route={route}
          />
        ),
        tabBarActiveTintColor: Colors.BLACK,
        tabBarInactiveTintColor: Colors.GRAY,
      })}>
        <Tab.Screen name={HOME} component={Home} />
        <Tab.Screen name={FAVS} component={Favs} />
        <Tab.Screen name={NOTES} component={Notes} />
        <Tab.Screen name={PROFILE} component={Profile} />
      </Tab.Navigator>
  );
}