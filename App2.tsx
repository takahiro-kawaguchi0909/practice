import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity,View,Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'

//const LOGO = require('./assets/logo.png')

export default function App() {
  let [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () =>{
    setSelectedImage({localUri : pickerResult.url});

  };

  let openShareDialogAsync = async() =>{
    if(!(await Sharing.isAvailableAsync())){
      Alert.alert(`Uh oh, sharing isn't available on your platform`)
      return;
    }
    if(selectedImage){
    Sharing.shareAsync(selectedImage?.localUri);
    }
  };

  if(selectedImage !==null){
      return(
        <View style={styles.container}>
          <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail}/>

          <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
            <Text style={styles.buttonText}>Share this photo</Text>>
          </TouchableOpacity>
        </View>
      )

  }

}

const styles = StyleSheet.create({
  thumbnail: {
    width: 305,
    height: 159,
    marginBottom: 10
  },
  button: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },

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
