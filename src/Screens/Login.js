import React, { useState, Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import Btn from "../Components/Btn";
import { grey, mehroon } from "../Components/Constant";
import Field from "../Components/Field";
import { Entypo } from "@expo/vector-icons/";
import { useNavigation } from "@react-navigation/native";

const Login = (props) => {
  const [password, setPassword] = useState("");
  const nav = useNavigation();
  const [showPassword, setShowPassword] = useState(true);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={{ alignItems: "center", width: 400 }}>
      <View style={{ width: "50%", height: "29%", alignItems: "center" }}>
        <Image
          style={{
            width: "100%",
            height: "70%",
            marginTop: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
          source={require("../../assets/FOURATOM-TransparentBG.png")}
        />
      </View>

      <Text
        style={{
          fontSize: 23,
          color: mehroon,
          //   fontWeight: "bold",
          marginTop: 70,
        }}
      >
        Welcome To FOUR ATOMS
      </Text>
      <Text
        style={{
          color: "grey",
          fontSize: 15,
          fontWeight: "bold",
          marginTop: 10,
          marginBottom: 30,
        }}
      >
        UNLEASH YOUR ATHLETE
      </Text>
      <Field placeholder="Email" keyboardType={"email-address"} />
      <View
        style={{
          borderRadius: 100,
          color: mehroon,
          paddingHorizontal: 20,
          marginTop: 20,
          width: "78%",
          height: 50,
          backgroundColor: "rgb(220, 220, 220)",
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 50,
        }}
      >
        <TextInput
          placeholder="Password"
          secureTextEntry={showPassword}
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor={mehroon}
        />
        <TouchableOpacity onPress={togglePassword}>
          {showPassword ? (
            <Entypo name="eye" size={24} />
          ) : (
            <Entypo name="eye-with-line" size={24} />
          )}
        </TouchableOpacity>
      </View>

      <Btn
        textColor="white"
        bgColor={mehroon}
        btnLabel="LOGIN"
        Press={() => nav.navigate("Bottom")}
      />
      <View
        style={{
          alignItems: "center",
          width: "78%",
          paddingRight: 16,
          marginBottom: 80,
        }}
      >
        <TouchableOpacity onPress={() => nav.navigate("ForgotPassword")}>
          <Text style={{ color: mehroon, fontSize: 15 }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text>Don't have an account ? </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
          <Text style={{ color: mehroon, fontWeight: "bold" }}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
