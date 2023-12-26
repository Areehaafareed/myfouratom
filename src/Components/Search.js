// Search.js
import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { grey, lightGrey } from "./Constant";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  // Function for search
  const handleSearch = () => {
    console.log(searchText);
    setSearchText("");
  };

  return (
    <View>
      <TouchableOpacity style={styles.searchContainer} onPress={handleSearch}>
        <TextInput
          style={styles.input}
          value={searchText}
          placeholder="search"
          onChangeText={(text) => setSearchText(text)}
        />
        <Ionicons name="search" size={24} color={grey} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: lightGrey,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 55,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: grey,
  },
});

export default Search;
