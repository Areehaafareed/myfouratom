import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProgressBar from "./ProgressBar";
import { useNavigation } from "@react-navigation/native";
import OrderPlaced from "./OrderPlaced";
const Checkout = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.Topheader}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.icons}>
            <Ionicons name="arrow-back" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.address}>Check Out</Text>
      <ProgressBar
        a1={true}
        a2={true}
        a3={true}
        number1={1}
        number2={2}
        number3={3}
      />
      <View style={styles.BtnText}>
        <View>
          <Text style={styles.text}>
            Are you sure that you have entered information correctly?
          </Text>
        </View>
        <View style={styles.buttonss}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => nav.navigate("OrderPlaced")}
          >
            <Text style={styles.btn}>Yes, I am sure</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => nav.navigate("Payment")}
        >
          <Text style={styles.btn}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled
          style={styles.button}
          onPress={() => {
            console.log(info);
          }}
        >
          <Text style={styles.btn}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  BtnText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  buttonss: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttons: {
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    paddingVertical: 7,
    paddingHorizontal: 12,
    margin: 10,
    backgroundColor: "#6d2c00",
    borderRadius: 5,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 15,
  },
  Topheader: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 10,
  },
  address: {
    position: "absolute",
    top: "3%",
    fontSize: 22,
    fontWeight: "bold",
  },
  btn: {
    color: "white",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Checkout;
