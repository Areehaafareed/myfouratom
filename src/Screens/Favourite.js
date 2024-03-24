<<<<<<< HEAD
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import Product from "../Components/Product";
import { Ionicons } from "@expo/vector-icons";
import { product as initialProduct } from "../Components/Data";
import { StatusBar } from "expo-status-bar";
import { grey, white } from "../Components/Constant";
import { useNavigation } from "@react-navigation/native";
=======
// Favourite.js
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Product from '../Components/Product';
import { product as initialProduct } from '../Components/Data';
>>>>>>> f516531e1e31bc7f42f1c894e5c1144a9b1bebc1

const Favourite = () => {
  const favoriteProductIds = useSelector((state) => state.favorites);

  const favoriteProducts = initialProduct.filter((product) =>
    favoriteProductIds.includes(product._id)
  );
<<<<<<< HEAD
  const nav = useNavigation();
  const handleGoBack = () => {
    nav.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />
      <View style={styles.topHeader}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons
              name="arrow-back"
              size={24}
              color={grey}
              onPress={handleGoBack}
            />
          </TouchableOpacity>
          <Text style={styles.favText}>My Favorite</Text>
          <TouchableOpacity onPress={() => nav.navigate("Notifications")}>
            <Ionicons name="notifications-outline" size={24} color={grey} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
          marginTop: 10,
        }}
        data={favoriteProducts} // Exclude the first item (already displayed above)
        renderItem={({ item }) => <Product data={[item]} />}
        keyExtractor={(item) => item._id}
      />

      {favoriteProducts.length === 0 && <Text>No favorite products yet.</Text>}
    </SafeAreaView>
=======

  return (
    <View>
      {favoriteProducts.length > 0 ? (
        <Product data={favoriteProducts} /> // Change this line
      ) : (
        <Text>No favorite products yet.</Text>
      )}
    </View>
>>>>>>> f516531e1e31bc7f42f1c894e5c1144a9b1bebc1
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    marginTop: 10,
    paddingHorizontal: 6,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    width: "95%",
    marginTop: 40,
    marginBottom: 10,
  },

  topHeader: {
    alignItems: "center",
    width: "100%",
  },
  favText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Favourite;
