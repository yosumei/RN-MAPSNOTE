//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { screenStyle } from '../../../vendor/bundle/ruby/3.2.0/styles/screenStyle';
import CustomInput from '../../components/ui/customInput';
import { Calendar, NoteAdd, NoteText, SearchNormal, Star1 } from 'iconsax-react-native';
import { Colors } from '../../theme/colors';
import CustomButton from '../../components/ui/customButton';
import firestore from '@react-native-firebase/firestore';



// create a component
const AddLocation = ({route}) => {
    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")
    const[date,setDate]=useState("")
    const[point,setPoint]=useState("")
    const[loading,setLoading]=useState(false);
    const {coordinate}=route?.params

    const saveNote=()=>{
        setLoading(true)
        const form={
            title:title,
            description:description,
            date:date,
            coordinate:coordinate,
            point:point
            
        };
        firestore()
   .collection('Locations')
   .add(form)
  .then(() => {
Alert.alert('Location added!');
  }).catch(error=>{

  }).finally(()=>{
    setLoading(false)
  })

    }
    return (
        <View style={screenStyle.container}>
            <CustomInput
            onChangeText={(value)=>setTitle(value)}
            value={title} inputTitle="Title"
            placeholder="Title"
                icon={<NoteAdd color={Colors.GRAY} />}
            />
            <CustomInput 
            onChangeText={(value)=>setDescription(value)}
            value={description}inputTitle="Description" placeholder="Description"
                icon={<NoteText color={Colors.GRAY} />}
            />
             <CustomInput 
            onChangeText={(value)=>setPoint(value)}
            value={point}inputTitle="Point" placeholder="Point"
                icon={<Star1 color={Colors.GRAY} />}
            />

             <CustomInput 
             onChangeText={(value)=>setDate(value)}
             value={date}inputTitle="Date" placeholder="Date"
                icon={<Calendar color={Colors.GRAY} />}
            />
            <View style={{flex:1,justifyContent:"center"}}>
                <CustomButton loading={loading}
                onPress={()=>saveNote()} title="Add Location" />

            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

    },
});

//make this component available to the app
export default AddLocation;
