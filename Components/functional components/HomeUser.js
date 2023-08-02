import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import { PlusCircle, RightArrowCircle } from "../css/Pictos";
import { ClothesHaut } from "../css/Pictos";

export default function HomeUser() {
  return (
    <View style={styles.cardAddClothesContainer}>
      <Text styles={styles.welcome}>Hello Mich&Nico</Text>
      <TouchableOpacity activeOpacity={0.5}>
        <RightArrowCircle />
      </TouchableOpacity>
      <Text style={styles.title}>Mes vêtements</Text>
      <View style={styles.cardAddClothes}>
        <Text style={styles.textContent}>Ajoutez votre premier vêtements</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.buttonPlus}>
            <PlusCircle />
          </View>
        </TouchableOpacity>
        <View style={styles.img}>
          <ClothesHaut />
        </View>
      </View>
      <Text style={styles.title}>Mes tenues</Text>
      <View style={styles.cardAddClothes}>
        <Text style={styles.textContent}>Ajoutez au moins deux vêtements pour créer votr première tenue</Text>
        <View style={styles.img}>
          <ClothesHaut />
        </View>
      </View>
      <Text style={styles.title}>Mes tenues favorites</Text>
      <View style={styles.cardAddClothes}>
        <Text style={styles.textContent}>Vous n'avez pas encore de tenue favorite</Text>
        <View style={styles.img}>
          <ClothesHaut />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    alignItems: 'center',
  },
  title: {
    fontFamily: "Lora-Bold",
    color: "black",
    textAlign: "left",
  },
  welcome:{
    fontFamily: "Lora-Bold",
  },
  textContent: {
    fontFamily: "Lora-Regular",
    color: "black",
    textAlign: "center",
    alignItems:"center",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "45%",
    padding:15,
  },
  buttonPlus: {
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "10%",
    top: "85%",
  },

  img:{
    flex: 0.5,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "20%",
    paddingVertical:"10%"
  }
});
