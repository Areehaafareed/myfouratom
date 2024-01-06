import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useGallery } from "../Components/GalleryContext";
import { GalleryProvider } from "../Components/GalleryContext";

const Gallery = () => {
  const { capturedImages } = useGallery(); // Use the GalleryContext hook

  return (
    <View style={styles.container}>
      <FlatList
        data={capturedImages}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} />
          </TouchableOpacity>
        )}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    margin: 2,
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 5,
  },
});

export default Gallery;
