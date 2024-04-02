import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useGallery } from "../Components/GalleryContext";
import { GalleryProvider } from "../Components/GalleryContext";
import { Ionicons } from "@expo/vector-icons";
import { white, grey } from "../Components/Constant";
import { useNavigation } from "@react-navigation/native";

const Gallery = () => {
  const { capturedImages } = useGallery(); // Use the GalleryContext hook
  const nav = useNavigation();
  const handleGoBack = () => {
    nav.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.Topheader}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.icons} onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={24} color={grey} />
          </TouchableOpacity>
          <Text style={styles.orderText}>My Gallery</Text>
          <TouchableOpacity onPress={() => nav.navigate("Notifications")}>
            <Ionicons name="notifications-outline" size={24} color={grey} />
          </TouchableOpacity>
        </View>
      </View>
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
    // marginTop: 10,
    backgroundColor: white,
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
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    width: "95%",
    marginTop: 15,
    marginBottom: 4,
  },
  Topheader: {
    alignItems: "center",
    width: "100%",
    marginTop: 30,
  },
  orderText: {
    fontSize: 24,
    fontWeight: "500",
  },
});

export default Gallery;
