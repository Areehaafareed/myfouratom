import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Feedback = () => {
  return (
    <View>
      <View style={styles.Topheader}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.icons}>
            <Ionicons name="arrow-back" size={24} color="gray" />
          </TouchableOpacity>
          <Text style={styles.orderText}>Feedback/Suggestion</Text>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textcontainer}>
        <Text style={{ fontSize: 17 }}>How can we do better?</Text>

        <Text style={{ fontSize: 17 }}>
          Our developers are working hard to improve the app experience! Please
          quickly tell us here a{" "}
          <Text style={{ color: "#6d2c00", fontWeight: "bold" }}>
            bug/app suggestion
          </Text>{" "}
          or you can also share Feedback
        </Text>
        <Text style={{ fontSize: 17 }}>Please let us know about the issue</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={10}
          placeholder="Write a bit more to help us understand the issue."
          placeholderTextColor="#d9d9d9"
        />
        <TextInput
          style={styles.input2}
          numberOfLines={1}
          placeholder="Enter Your Email"
          placeholderTextColor="#d9d9d9"
        />
        <TouchableOpacity style={styles.wideButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  wideButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#6d2c00",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  textcontainer: {
    marginLeft: 15,
    marginRight: 15,
    display: "flex",
    marginTop: 15,
    height: 125,
    justifyContent: "space-between",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 15,
    marginBottom: 4,
  },
  Topheader: {
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  orderText: {
    fontSize: 24,
    fontWeight: "500",
  },
  input: {
    width: "80%",
    height: 100,
    borderWidth: 1,
    borderColor: "gray",
    fontSize: 15,
    padding: 8,
    marginTop: 10,
    textAlignVertical: "top",
  },

  input2: {
    width: "80%",
    height: 40,
    fontFamily: "san-serif",
    borderWidth: 1,
    borderColor: "gray",
    fontSize: 15,
    padding: 8,
    marginTop: 10,
  },
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Feedback;
