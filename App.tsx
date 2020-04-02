import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity,View,Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'

//const LOGO = require('./assets/logo.png')

export default function App() {
  let openImagePickerAsync = async () =>{
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if(permissionResult.granted === false){
      Alert.alert("Permission to access camera roll is required!")
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult)
  }
      return (
    <View style={styles.container}>
      <Image source={{uri: "https://i.imgur.com/TkIrScD.png"}} style={styles.logo}/>

      <Text style={styles.instructions}>
      　pen up App.tsx to start working on your app!
      </Text>

      <TouchableOpacity 
        onPress={openImagePickerAsync}
        style={{ backgroundColor: 'blue'}}>
        <Text style={{ fontSize: 20, color: '#fff'}}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 305,
    height: 159,
    marginBottom: 10
  }, 

  instructions:{
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
});
