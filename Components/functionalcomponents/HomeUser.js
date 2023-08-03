import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Dimensions } from "react-native";
import { PlusCircle, Settings } from "../css/Pictos";
import { ClothesHaut } from "../css/Pictos";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function HomeUser() {
  const navigation = useNavigation();
  const handleSettingsPress = () => {
    navigation.navigate('UserProfileScreen');
  };
  return (
    <View style={styles.cardAddClothesContainer}>
      <View style={styles.head}>
        <Text style={styles.welcome}>Hello Mich&Nico</Text>
        <TouchableOpacity activeOpacity={0.5} style={styles.settings} onPress={handleSettingsPress}>
          <Settings />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Mes vêtements</Text>
      <View style={styles.cardAddClothes}>
        <Text style={styles.textContent}>Ajoutez votre premier vêtements</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <TouchableOpacity style={styles.buttonPlus}>
            <PlusCircle />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.img}>
          <ClothesHaut />
        </View>
      </View>
      <Text style={styles.title}>Mes tenues</Text>
      <View style={styles.cardAddClothes}>
        <Text style={styles.textContent}>Ajoutez au moins deux vêtements pour créer votr première tenue</Text>
        <View style={styles.img2}>
          <ClothesHaut />
        </View>
      </View>
      <Text style={styles.title}>Mes tenues favorites</Text>
      <View style={styles.cardAddClothes}>
        <Text style={styles.textContent}>Vous n'avez pas encore de tenue favorite</Text>
        <View style={styles.img2}>
          <ClothesHaut />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    bottom: "5%", // Alignement en bas de l'écran
    left: 0, // Vous pouvez ajuster cette valeur si nécessaire
    right: 0, // Vous pouvez ajuster cette valeur si nécessaire
  },
  settings: {
    paddingTop: 12,
  },

  cardAddClothesContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.846,
    justifyContent: "space-evenly",
  },
  cardAddClothes: {
    width: "100%",
    height: "20%",
    borderRadius: 10,
    backgroundColor: "#CCE3DE",
    justifyContent: "space-around",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "Lora-Bold",
    color: "black",
    textAlign: "left",
    fontSize: 20,
  },

  welcome: {
    fontFamily: "Lora-Bold",
    fontSize: 30,
  },

  textContent: {
    fontFamily: "Lora-Regular",
    fontSize: 15,
    color: "black",
    textAlign: "center",
    alignItems: "center",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "45%",
    padding: 15,
  },
  buttonPlus: {
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "10%",
    top: "85%",
  },

  img: {
    flex: 0.5,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "20%",
    paddingVertical: "10%",
  },

  img2: {
    flex: 0.5,
    flexGrow: 1,
    flexBasis: "20%",
    paddingVertical: "10%",
    marginLeft: "12%",
  },
});
