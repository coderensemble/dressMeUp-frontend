import React, { useState } from "react";
import { StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Text, View } from "react-native";
import { Dimensions } from "react-native";
import LoginScreen from "../screens/LoginScreen";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const navigation = useNavigation();

export default function Signup() {
  
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F6FFF8",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    width: windowWidth * 0.9,
    padding: 10,
    borderWidth: 1.5,
    fontSize: 16,
    borderRadius: 10,
    borderColor: "#6B9080",
    backgroundColor: "#fff",
  },

  buttonGreen: {
    width: windowWidth * 0.9,
    alignItems: "center",
    backgroundColor: "#A4C3B2",
    padding: 12,
    borderRadius: 10,
  },
});
