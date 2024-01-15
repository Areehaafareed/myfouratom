import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { grey, mehroon } from "../Components/Constant";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Search from "../Components/Search";
import RoundBtn from "../Components/RoundBtn";
import LatestProduct from "../Components/LatestProduct";
import Product from "../Components/Product";

const Home = () => {
  const navigation = useNavigation();
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}
    >
      <StatusBar style="dark" />
      {/* heading */}
      <View style={styles.header}>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: mehroon,
              justifyContent: "space-between",
              paddingHorizontal: 110,
            }}
          >
            FOURATOMS
          </Text>
          <Search />
        </View>
        {/* bell-icon */}
        <Ionicons
          name="ios-notifications"
          size={24}
          color={grey}
          onPress={() => navigation.navigate("Notifications")}
        />
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 15 }}>
          Categories
        </Text>

        {/* Categories */}
        <RoundBtn />
        <LatestProduct title="Latest Product" />
        <View>
          <Product data={apiData} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: { flexDirection: "row", marginTop: 50 },
});

export default Home;
