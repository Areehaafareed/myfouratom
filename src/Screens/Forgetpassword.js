import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const MyImageComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/worker-with-doubts_1012-193.jpg?size=626&ext=jpg&ga=GA1.1.1345385583.1685465115&semt=ais",
          }}
          style={styles.image}
        />
      </View>
      <View>
        <View style={styles.forgotText}>
          <Text style={styles.heading}>Forgot Password?</Text>
          <View style={styles.textBelowForget}>
            <Text style={styles.text}>
              We can send you the details on how to reset it
            </Text>
            <Text style={styles.text}>Please Enter your e-mail/username</Text>
          </View>
        </View>
        <TextInput
          style={{
            borderRadius: 100,
            color: "#6d2c00",
            paddingHorizontal: 20,
            marginTop: 20,
            width: "100%",
            height: 50,
            backgroundColor: "rgb(220, 220, 220)",
            marginVertical: 10,
          }}
          placeholder="Please Enter your e-mail/username"
          placeholderTextColor="rgb(122, 50, 1, 0.5)"
        ></TextInput>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#6d2c00",
          borderRadius: 100,
          alignItems: "center",
          width: "78%",
          height: 50,
          paddingVertical: 5,
          marginVertical: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Send Instruction</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
  },
  input: {
    height: 40,
    borderColor: "#6d2c00",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    fontSize: 16,
    color: "#333333",
    marginBottom: 10,
  },
  heading: {
    color: "#6d2c00",
    fontSize: 35,
    fontWeight: 600,
    textAlign: "center",
  },
  text: {
    color: "#4d4d4d",
    textAlign: "left",
  },
  img: {
    marginTop: "10%",
  },
  forgotText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
  textBelowForget: {
    display: "flex",
    alignItems: "flex-start",
    height: "70%",
    justifyContent: "center",
  },
});

export default MyImageComponent;
