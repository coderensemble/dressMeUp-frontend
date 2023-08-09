import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity, Text, Image, SafeAreaView } from "react-native";
import { Dimensions } from "react-native";
import { PlusCircle, Settings } from "../Components/css/Pictos";
import {
  AddFirstClothe,
  NoOutfits,
  NoFav,
  FirstOutfit,
  ViewClothe,
  MyOutfits,
  AddFirstFav,
  MyFirstFav,
  TwoFav,
  MoreThanTwoFav,
} from "../Components/css/HomeComponents";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function HomeUser() {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.value);
  console.log("USER", user);

  const handleSettingsPress = () => {
    navigation.navigate("UserProfileScreen");
  };

  const handleCreateClosePress = () => {
    navigation.navigate("CreateClotheA");
  };

  const handleViewClothesPress = () => {
    navigation.navigate("ViewClotheA");
  };

  const handleCreateOutfitsPress = () => {
    navigation.navigate("CreateOutfitA");
  };

  const handleViewOutfitPress = () => {
    navigation.navigate("ViewOutfitA");
  };

  const handleCreateFav = () => {
    navigation.navigate("CreateFav");
  };

  const handleViewFav = () => {
    navigation.navigate("ViewFav");
  };

  let conditionalJSX;
  function handleHomeScreen() {
    switch (user) {
      case user.clothes.length === 1:
        screenToRender = (
          <>
            <ViewClothe handleCreateClosePress={handleCreateClosePress} />
            <NoOutfits />
            <NoFav />
          </>
        );
        break;

      case user.clothes.length >= 2 && user.outfit.length === 0:
        screenToRender = (
          <>
            <FirstOutfit />
            <ViewClothe />
            <NoFav />
          </>
        );
        break;

      case user.outfit.length >= 1 && user.fav.length === 0:
        screenToRender = (
          <>
            <MyOutfits />
            <AddFirstFav />
            <ViewClothe />
          </>
        );
        break;

      case user.fav.length === 1:
        screenToRender = (
          <>
            <MyOutfits />
            <MyFirstFav />
            <ViewClothe />
          </>
        );
        break;

      case user.fav.length === 2:
        screenToRender = (
          <>
            <MyOutfits />
            <TwoFav />
            <ViewClothe />
          </>
        );
        break;

      case user.fav.length > 2:
        screenToRender = (
          <>
            <MyOutfits />
            <MoreThanTwoFav />
            <ViewClothe />
          </>
        );
        break;

      default:
        screenToRender = (
          <>
            <AddFirstClothe handleCreateClosePress={handleCreateClosePress} />
            <NoOutfits />
            <NoFav />
          </>
        );
    }
  }
  handleHomeScreen();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.head}>
        <Text style={styles.welcome}>Hello {user.username}</Text>
        <TouchableOpacity activeOpacity={0.5} style={styles.settings} onPress={handleSettingsPress}>
          <Settings />
        </TouchableOpacity>
      </View>
      {conditionalJSX}
      <View style={styles.cardAddClothesContainer}>
        <AddFirstClothe handleCreateClosePress={handleCreateClosePress} />
        <NoOutfits />
        <NoFav />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F6FFF8",
    alignItems: "center",
    justifyContent: "center",
  },

  head: {
    width: "90%",
    marginBottom: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  settings: {
    paddingTop: 12,
  },

  cardAddClothesContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.7,
    justifyContent: "space-around",
  },

  welcome: {
    fontFamily: "Lora-Bold",
    fontSize: 30,
  },
});
