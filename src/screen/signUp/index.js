//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { screenStyle } from '../../../vendor/bundle/ruby/3.2.0/styles/screenStyle';
import { Image } from 'react-native';
import { height, width } from '../../utils/constants';
import { Colors } from '../../theme/colors';
import CustomButton from '../../components/ui/customButton';
import { SIGNIN, SIGNUP } from '../../utils/routes';
import auth from '@react-native-firebase/auth';


import firestore from '@react-native-firebase/firestore';
import CustomInput from '../../components/ui/customInput';
import { Key, People, Sms, User } from 'iconsax-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const setUserUıd = async id => {
    try {
        await AsyncStorage.setItem('uid', id);
    } catch (e) {

        console.log('save error', e);
    }
};


// create a component
const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [loading, setLoading] = useState(false);

    const saveUser = userId => {
        const form = {
            userId: userId,
            name: name,
            surname: surname,
            email: email,
        };
        firestore()
            .collection('Users')
            .doc(userId)
            .set(form)
            .then(() => {
                console.log('user added success');
            })
            .catch(eror => {
                console.log(eror);
            });
    };
    const handleSignUp = () => {
        setLoading(true);
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                saveUser(response.user.uid);
                setUserUıd(response.user.uid)
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };



    return (
        <SafeAreaView style={screenStyle.safeAreaView}>
            <View style={screenStyle.container}>
                <View style={{ flex: 3 }}>
                    <Image source={require("../../assets/images/signIn.png")}
                        style={{
                            width: width - 40,
                            height: height * 0.35,
                            resizeMode: "contain",
                            marginBottom: 10
                        }} />

                </View>
                <View style={{ flex: 2, justifyContent: "center", paddingHorizontal: 10 }}>

                    <Text style={{ fontSize: 35, fontWeight: "bold", textAlign: "center" }}>Sign Up</Text>
                    <CustomInput
                        icon={<Sms color={Colors.BLUE}/>}
                        onChangeText={value => setEmail(value)}
                        value={email}
                        placeholder="E-mail" inputTitle="E-mail" />
                    <CustomInput
                        icon={<Key color={Colors.BLUE} />}
                        onChangeText={value => setPassword(value)}

                        value={password}
                        secureTextEntry
                        placeholder="Password" inputTitle="Password  " />
                    <CustomInput
                        icon={<User color={Colors.BLUE} />}
                        onChangeText={value => setName(value)}

                        value={name}
                        
                        placeholder="Name" inputTitle="Name  " />
                    <CustomInput
                        icon={<User color={Colors.BLUE} />}

                        onChangeText={value => setSurname(value)}

                        value={surname}
                        
                        placeholder="Surname" inputTitle="Surname  " />


                </View>
                <View style={{ flex: 1 }} >
                    <View style={{ justifyContent: "center", flex: 1, marginTop: 80 }}>
                        <CustomButton
                            onPress={() => handleSignUp()} title="Sign Up" />


                    </View>


                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;
