import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import CamButton from "../Components/CamButton";
import { useNavigation } from "@react-navigation/native";
import { useGallery } from "../Components/GalleryContext";

// camera page
export default function FACamera() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const { addCapturedImage, capturedImages } = useGallery(); // Use the GalleryContext hook
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
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
        alert("Picture saved");
        addCapturedImage(image); // Add the image to the global state
        setImage(null);
      } catch (e) {
        console.log(e);
      }
    }
  };

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
              }}
            />
            <CamButton
              icon="ios-flash-outline"
              color={
                flash === Camera.Constants.FlashMode.off ? "gray" : "#f1f1f1"
              }
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
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 0,
  },
  camera: {
    flex: 1,
    borderRadius: 10,
  },
});
