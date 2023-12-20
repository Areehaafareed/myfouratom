// Search.js
import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { grey, lightGrey } from "./Constant";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  //function for search
  const handleSearch = () => {
    console.log(searchText);
    setSearchText("");
  };
  return (
    <View>
      <TextInput
        name="search"
        size={24}
        color={grey}
        placeholder="search"
        flex={1}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <TouchableOpacity style={style.searchContainer} onPress={handleSearch}>
        <Ionicons name="search" size={24} color={grey} style={{}} />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
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
});
export default Search;
