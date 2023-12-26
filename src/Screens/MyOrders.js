import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { grey } from "../Components/Constant";

const MyOrders = () => {
  const nav = useNavigation();
  const handleGoBack = () => {
    nav.goBack();
  };
  const [itemStatus, setItemStatus] = useState(false);
  const orders = [
    {
      id: 1,
      itemImg:
        "https://www.mrporter.com/variants/images/3633577411310824/in/w960_q60.jpg",
      itemName: "Jacket",
      itemPrice: "$120",
      status: "Delivered",
      quantity: 1,
      deliveryDate: "12-12-12",
      dateOfPurchase: "2-12-12",
    },
    {
      id: 2,
      itemImg:
        "https://www.mrporter.com/variants/images/3633577411310824/in/w960_q60.jpg",
      itemName: "Jacket",
      itemPrice: "$120",
      status: "Delivered",
      quantity: 1,
      deliveryDate: "12-12-12",
      dateOfPurchase: "2-12-12",
    },
    {
      id: 3,
      itemImg:
        "https://www.mrporter.com/variants/images/3633577411310824/in/w960_q60.jpg",
      itemName: "Jacket",
      itemPrice: "$120",
      status: "Delivered",
      quantity: 1,
      deliveryDate: "12-12-12",
      dateOfPurchase: "2-12-12",
    },
    {
      id: 4,
      itemImg:
        "https://www.mrporter.com/variants/images/3633577411310824/in/w960_q60.jpg",
      itemName: "Jacket",
      itemPrice: "$120",
      status: "Delivered",
      quantity: 1,
      deliveryDate: "12-12-12",
      dateOfPurchase: "2-12-12",
    },
    {
      id: 5,
      itemImg:
        "https://www.mrporter.com/variants/images/3633577411310824/in/w960_q60.jpg",
      itemName: "Jacket",
      itemPrice: "$120",
      status: "Delivered",
      quantity: 1,
      deliveryDate: "12-12-12",
      dateOfPurchase: "2-12-12",
    },
    {
      id: 6,
      itemImg:
        "https://www.mrporter.com/variants/images/3633577411310824/in/w960_q60.jpg",
      itemName: "Jacket",
      itemPrice: "$120",
      status: "Delivered",
      quantity: 1,
      deliveryDate: "12-12-12",
      dateOfPurchase: "2-12-12",
    },
    {
      id: 7,
      itemImg:
        "https://www.mrporter.com/variants/images/3633577411310824/in/w960_q60.jpg",
      itemName: "Jacket",
      itemPrice: "$120",
      status: `${itemStatus ? "Delivered" : "On the way"}`,
      quantity: 1,
      deliveryDate: "12-12-12",
      dateOfPurchase: "2-12-12",
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        {item.itemImg && (
          <Image
            style={styles.image}
            source={{
              uri: item.itemImg,
            }}
          />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.itemName}</Text>
          <Text style={styles.price}>
            <Text style={{ color: "#000000", fontSize: 13 }}>
              {item.quantity} item,{" "}
            </Text>
            <Text style={{ color: "#000000", fontSize: 13 }}>Total: </Text>
            {item.itemPrice}
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.color}>Order Again</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statusCapsule}>
          <Text style={styles.capsuleText}>{item.status}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 10 }}>
            <Text
              style={{ color: "#808080", fontWeight: "normal", fontSize: 10 }}
            >
              Transaction Date:{" "}
            </Text>
            {item.dateOfPurchase}
          </Text>
          <Text style={{ fontSize: 10 }}>
            <Text
              style={{ color: "#808080", fontWeight: "normal", fontSize: 10 }}
            >
              Shipping Date:{" "}
            </Text>
            {item.deliveryDate}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container1}>
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
          <Text style={styles.orderText}>My Orders</Text>
          <TouchableOpacity onPress={() => nav.navigate("Notifications")}>
            <Ionicons name="notifications-outline" size={24} color={grey} />
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView style={styles.container1}>
        <FlatList
          data={orders}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View style={{ height: 3, backgroundColor: "white" }} />
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  color: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
  topHeader: {
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  orderText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardImage: {
    marginLeft: 10,
    width: 50,
    height: 50,
    marginRight: 10,
  },
  container1: {
    flex: 1,
    padding: 5,
  },
  capsuleText: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontStyle: "italic",
    textAlign: "center",
    color: "white",
    fontSize: 12,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    alignContent: "space-between",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "green",
    marginTop: 5,
  },
  card: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 2,
    borderStyle: "solid",
    borderWidth: 0.2,
    borderColor: "gray",
    borderTopWidth: 0,
  },

  button: {
    backgroundColor: "#6a6a6a",
    width: 100,
    padding: 2,
    borderRadius: 5,
    marginTop: 5,
    alignItems: "center",
  },
  statusCapsule: {
    backgroundColor: "#6a6a6a",
    paddingHorizontal: 8,
    paddingVertical: 1,
    position: "absolute",
    right: 8,
    top: 15,
    borderRadius: 15,
  },
});

export default MyOrders;
