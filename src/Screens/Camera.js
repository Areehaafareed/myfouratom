<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import CamButton from "../Components/CamButton";
import { useNavigation } from "@react-navigation/native";
import { useGallery } from "../Components/GalleryContext";
=======
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import CamButton from '../Components/CamButton';
import { useNavigation } from '@react-navigation/native';
import { useGallery } from '../Components/GalleryContext';
import Gallery from './Gallery';

>>>>>>> f516531e1e31bc7f42f1c894e5c1144a9b1bebc1

export default function FACamera() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
<<<<<<< HEAD
  const { addCapturedImage, capturedImages } = useGallery(); // Use the GalleryContext hook
=======
  const { addCapturedImage, capturedImages  } = useGallery(); // Use the GalleryContext hook
>>>>>>> f516531e1e31bc7f42f1c894e5c1144a9b1bebc1
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
<<<<<<< HEAD
      setHasCameraPermission(cameraStatus.status === "granted");
=======
      setHasCameraPermission(cameraStatus.status === 'granted');
>>>>>>> f516531e1e31bc7f42f1c894e5c1144a9b1bebc1
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
<<<<<<< HEAD
        alert("Picture saved");
=======
        alert('Picture saved');
>>>>>>> f516531e1e31bc7f42f1c894e5c1144a9b1bebc1
        addCapturedImage(image); // Add the image to the global state
        setImage(null);
      } catch (e) {
        console.log(e);
      }
    }
  };

<<<<<<< HEAD
  if (hasCameraPermission === false) {
    return <Text>No Access to Camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={cameraRef}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 30,
            }}
          >
            <CamButton
              icon="ios-camera-reverse-outline"
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
=======

if(hasCameraPermission === false) {
  return <Text>No Access to Camera</Text>
}

return (
    <View style={styles.container}>
      {!image ? (
        <Camera style={styles.camera} type={type} flashMode={flash} ref={cameraRef}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30 }}>
            <CamButton
              icon="ios-camera-reverse-outline"
              onPress={() => {
                setType(type === CameraType.back ? CameraType.front : CameraType.back);
>>>>>>> f516531e1e31bc7f42f1c894e5c1144a9b1bebc1
              }}
            />
            <CamButton
              icon="ios-flash-outline"
<<<<<<< HEAD
              color={
                flash === Camera.Constants.FlashMode.off ? "gray" : "#f1f1f1"
              }
=======
              color={flash === Camera.Constants.FlashMode.off ? 'gray' : '#f1f1f1'}
>>>>>>> f516531e1e31bc7f42f1c894e5c1144a9b1bebc1
              onPress={() => {
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                );
              }}
            />
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}
      <View>
        {image ? (
<<<<<<< HEAD
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 50,
            }}
          >
            <CamButton
              title={"Re-take picture"}
              icon="ios-repeat-outline"
              onPress={() => setImage(null)}
            />
            <CamButton
              title={"Save"}
              icon="ios-checkbox-outline"
              onPress={saveImage}
            />
          </View>
        ) : (
          <CamButton
            title={"Take a picture"}
            icon="ios-camera-outline"
            onPress={takePicture}
          />
=======
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 50 }}>
            <CamButton title={'Re-take picture'} icon="ios-repeat-outline" onPress={() => setImage(null)} />
            <CamButton title={'Save'} icon="ios-checkbox-outline" onPress={saveImage} />
          </View>
        ) : (
          <CamButton title={'Take a picture'} icon="ios-camera-outline" onPress={takePicture} />
>>>>>>> f516531e1e31bc7f42f1c894e5c1144a9b1bebc1
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 0,
  },
  camera: {
    flex: 1,
    borderRadius: 10,
  },
});
=======
    backgroundColor: '#000',
    justifyContent: 'center',
    padding : 0,
  },
  camera: {
    flex: 1,
    borderRadius: 10, 
  }
});
>>>>>>> f516531e1e31bc7f42f1c894e5c1144a9b1bebc1
