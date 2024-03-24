<<<<<<< HEAD
import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { product as initialProduct } from "./Data";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { mehroon, grey, WhiteSmoke } from "./Constant";
const width = Dimensions.get("screen").width / 2 - 30;
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../Redux/actions";

=======
import React from 'react';
import { FlatList, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { mehroon, lightGrey, WhiteSmoke } from './Constant';
import { toggleFavorite } from '../../Redux/actions';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { product as initialProduct } from "./Data";
const width = Dimensions.get('screen').width / 2 - 30;

>>>>>>> f516531e1e31bc7f42f1c894e5c1144a9b1bebc1
const Product = ({ data }) => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const handleFavoritePress = (productId) => {
    dispatch(toggleFavorite(productId));
  };

<<<<<<< HEAD
  const renderStarRating = (rating) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = Array(5).fill("star-o");

    for (let i = 0; i < filledStars; i++) {
      stars[i] = "star";
    }

    if (hasHalfStar) {
      stars[filledStars] = "star-half-empty";
    }

    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {stars.map((star, index) => (
          <FontAwesome
            key={index}
            name={star}
            size={16}
            color={mehroon}
            style={{ margin: 1 }}
          />
        ))}
      </View>
    );
  };
=======

>>>>>>> f516531e1e31bc7f42f1c894e5c1144a9b1bebc1
  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
          marginTop: 10,
        }}
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              nav.navigate("Detail", { main: item });
            }}
            activeOpacity={0.5}
            style={{
              height: 260,
              width,
              marginHorizontal: 2,
              borderRadius: 10,
              marginBottom: 20,
              elevation: 6,
              shadowColor: WhiteSmoke,
            }}
          >
<<<<<<< HEAD
            <Image
              source={item.img}
              style={{
                height: 200,
                width: 172,
                borderRadius: 10,
                resizeMode: "contain",
                // marginLeft: 40,
              }}
            />
            <View
              style={{
                alignItems: "flex-end",
                backgroundColor: "red",
                position: "absolute",
                top: 10,
                right: 10,
                alignItems: "flex-end",
                backgroundColor: "transparent",
              }}
            >
              <TouchableOpacity
                onPress={(e) => {
                  // e.stopPropagation();
                  // handleFavoritePress(item._id);
=======
            <View style={{ alignItems: "flex-end" }}>
              <TouchableOpacity
                onPress={(e) => {
                  e.stopPropagation(); // Prevent triggering the parent TouchableOpacity onPress
                  handleFavoritePress(item._id);
                }}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  zIndex: 1,
                }}
              >
                <MaterialIcons
                  name={
                    favorites.includes(item._id)
                      ? "favorite"
                      : "favorite-border"
                  }
                  size={24}
                  color={mehroon}
                />
              </TouchableOpacity>

              <Image
                source={item.img}
                style={{
                  height: 200,
                  width: 172,
                  borderRadius: 10,
                  resizeMode: "contain",
                  marginLeft: 60,
>>>>>>> f516531e1e31bc7f42f1c894e5c1144a9b1bebc1
                }}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  zIndex: 1,
                }}
              >
                <MaterialIcons
                  name={
                    favorites && favorites.includes(item._id)
                      ? "favorite"
                      : "favorite-border"
                  }
                  size={24}
                  color={mehroon}
                />
              </TouchableOpacity>
            </View>

            <Text
              style={{
                fontWeight: "bold",
                marginTop: 5,
                marginBottom: 5,
                marginLeft: 7,
              }}
            >
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingRight: 10,
              }}
            >
              <Text style={{ fontSize: 12, marginLeft: 7 }}>${item.price}</Text>
<<<<<<< HEAD
              {/* Render star rating */}
              {renderStarRating(item.rating)}
=======
>>>>>>> f516531e1e31bc7f42f1c894e5c1144a9b1bebc1
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Product;