//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { screenStyle } from '../../../vendor/bundle/ruby/3.2.0/styles/screenStyle';
import { Image } from 'react-native';
import { height, width } from '../../utils/constants';
import { Colors } from '../../theme/colors';
import CustomButton from '../../components/ui/customButton';
import { NOTES, SIGNIN, SIGNUP } from '../../utils/routes';
import auth from '@react-native-firebase/auth';
import { AsyncStorage } from 'react-native';

import CustomInput from '../../components/ui/customInput';

// create a component
const SignIn = ({ navigation }) => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const setUserUid = async (id) => {
        try {
            await AsyncStorage.setItem(
                "uid", id
            );
        } catch (error) {
            console.log("save error", e);

        }
    };


    const handleSignIn = () => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then((data) => {
                console.log("user SignIn");
                setUserUid(data.user.uid)

            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    return (
        <SafeAreaView style={screenStyle.safeAreaView}>
            <View style={screenStyle.container}>
                <View style={{ flex: 2 }}>
                    <Image source={require("../../assets/images/signIn.png")}
                        style={{
                            width: width - 40,
                            height: height * 0.35,
                            resizeMode: "contain"
                        }} />

                </View>
                <View style={{ flex: 2, justifyContent: "center", paddingHorizontal: 10 }}>

                    <Text style={{ fontSize: 35, fontWeight: "bold", textAlign: "center" }}>Sign In</Text>
                    <CustomInput
                        onChangeText={value => setEmail(value)}
                        value={email}
                        placeholder="E-mail" inputTitle="E-mail" />
                    <CustomInput
                        onChangeText={value => setPassword(value)}

                        value={password}
                        secureTextEntry
                        placeholder="Password" inputTitle="Password  " />


                </View>
                <View style={{ flex: 1 }} >
                    <View style={{ justifyContent: "center", flex: 1 }}>
                        <CustomButton
                            onPress={() => handleSignIn()} title="Sign In" />


                    </View>


                </View>
            </View>
        </SafeAreaView>
    );
};

//make this component available to the app
export default SignIn;
