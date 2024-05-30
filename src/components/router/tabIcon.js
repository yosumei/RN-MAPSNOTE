//import liraries
import React from 'react';
import { FAVORITES, FAVS, HOME, MAP, NOTES, PROFILE } from '../../utils/routes';

import { Heart, Profile, Notepad2, Map, Map1 } from 'iconsax-react-native';
// create a component
const TabIcon = ({ name, focused, color, size }) => {
    if (name === HOME) {
        return (
            <Map1 color={color} variant={focused ? (variant = 'Bold') : 'Outline'} />
        );
    } else if (name === PROFILE) {
        return (
            <Profile
                color={color}
                variant={focused ? (variant = 'Bold') : 'Outline'}
            />
        );
    } else if (name === FAVS) {
        return (
            <Heart
                color={color}
                variant={focused ? (variant = 'Bold') : 'Outline'}
            />
        );
    } else if (name === NOTES) {
        return (
            <Notepad2 color={color} variant={focused ? (variant = 'Bold') : 'Outline'} />
        );
    }
};

export default TabIcon;