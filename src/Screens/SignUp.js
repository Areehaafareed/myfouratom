import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Btn from "../Components/Btn";
import { mehroon } from "../Components/Constant";
import Field from "../Components/Field";

const SignUp = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    try {
      // Input validation
      if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("Please fill in all fields");
        return;
      }

      // Check if password and confirm password match
      if (password !== confirmPassword) {
        alert("Password and Confirm Password must match");
        return;
      }

      setLoading(true);

      // Make a POST request to your backend
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to register. Server response: ${errorMessage}`);
      }

      const result = await response.json();
      // Display a success message or navigate to a confirmation screen
      alert("Account Created. Check your email for verification.");
      props.navigation.navigate("Login");
    } catch (error) {
      console.error('Error:', error); // Log the full error object
      console.error('Error:', error.message);
      // Display an error message to the user
      alert("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
        Sign Up
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
        <Field
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <Field
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <Field
          placeholder="Email"
          keyboardType={"email-address"}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Field
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Field
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
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
            By Signing Up, you agree to our{" "}
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
          btnLabel="Sign Up"
          Press={() => {
            handleSignUp();
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={{ color: mehroon, fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
