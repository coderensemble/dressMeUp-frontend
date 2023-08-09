import React from "react";
import SignIn from "../Components/functionalcomponents/Signin";
import { SafeAreaView, StyleSheet, Image, Dimensions, View } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.imgContainer}>
      <Image style={styles.image} source={require("../assets/images/Logo.png")} resizeMode="contain"/>
      </View>
      <SignIn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#6B9080",
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    flex: 1,
    width: windowWidth * 0.7, // Ajustez la largeur du conteneur de l'image selon vos besoins
    paddingBottom: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1, // Permet de conserver les proportions de l'image pour qu'elle ne soit pas déformée
  },
});