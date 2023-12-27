import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { product } from "./Data";
import { Ionicons } from "@expo/vector-icons";
import { mehroon, grey, WhiteSmoke } from "./Constant";
const width = Dimensions.get("screen").width / 2 - 30;
// import StarRating from "react-native-star-rating";
import { useNavigation } from "@react-navigation/native";

const Product = () => {
  const nav = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
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
        data={product}
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
            <View
              style={{
                alignItems: "flex-end",
                backgroundColor: "red",
              }}
            >
              <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
                {isFavorite ? (
                  <Ionicons name="md-heart-sharp" size={26} color={mehroon} />
                ) : (
                  <Ionicons name="md-heart-outline" size={26} color={grey} />
                )}
              </TouchableOpacity>
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
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 12, marginLeft: 7 }}>${item.price}</Text>
              {/* Add StarRating component here */}
              {/* <StarRating
                disabled={true}
                maxStars={5}
                rating={item.rating} // Assuming your product object has a 'rating' property
                starSize={16}
                fullStarColor="gold"
                style={{ marginLeft: 7 }} // Adjust the style as needed
              /> */}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Product;
