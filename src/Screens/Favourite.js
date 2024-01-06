import React from "react";
import { View, Text } from "react-native";
// Favourite.js
import { useSelector } from "react-redux";
import Product from "../Components/Product";
import { product as initialProduct } from "../Components/Data";

const Favourite = () => {
  const favoriteProductIds = useSelector((state) => state.favorites);

  const favoriteProducts = initialProduct.filter((product) =>
    favoriteProductIds.includes(product._id)
  );

  return (
    <View>
      <Text></Text>
      {favoriteProducts.length > 0 ? (
        <Product data={favoriteProducts} /> // Change this line
      ) : (
        <Text>No favorite products yet.</Text>
      )}
    </View>
  );
};

export default Favourite;
