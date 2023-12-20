import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Btn from "../Components/Btn";
import { grey, mehroon } from "../Components/Constant";
import Field from "../Components/Field";

const SignUp = (props) => {
  return (
    <View style={{ alignItems: "center", width: 400 }}>
      <Text
        style={{
          color: mehroon,
          fontSize: 44,
          fontWeight: "bold",
          marginTop: 70,
        }}
      >
        SignUp
      </Text>
      <Text
        style={{
          color: mehroon,
          fontSize: 19,
          marginTop: 10,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Create a new account
      </Text>
      <View
        style={{
          backgroundColor: "white",
          height: 700,
          width: 410,
          borderTopLeftRadius: 130,
          paddingTop: 50,
          alignItems: "center",
        }}
      >
        <Field placeholder="First Name" />
        <Field placeholder="Last Name" />
        <Field placeholder="Email/Username" keyboardType={"email-address"} />
        {/* <Field placeholder="Contact Number" keyboardType={"number"} /> */}
        <Field placeholder="Password" secureTextEntry={true} />
        <Field placeholder="Confirm Password" secureTextEntry={true} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "78%",
            paddingRight: 16,
            marginBottom: 10,
          }}
        >
          <Text style={{ color: "grey", fontSize: 13, marginTop: 20 }}>
            By Signing In, you agree to our{" "}
          </Text>
          <Text
            style={{
              color: mehroon,
              fontWeight: "bold",
              fontSize: 13,
              marginTop: 20,
            }}
          >
            Terms & Conditions
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "78%",
            paddingRight: 16,
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <Text style={{ color: "grey", fontSize: 13 }}>and </Text>
          <Text style={{ color: mehroon, fontWeight: "bold", fontSize: 13 }}>
            Privacy Policy
          </Text>
        </View>

        <Btn
          textColor="white"
          bgColor={mehroon}
          btnLabel="SignUp"
          Press={() => {
            alert("Account Created");
            props.navigation.navigate("Login");
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text>Already have an account ? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={{ color: mehroon, fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
