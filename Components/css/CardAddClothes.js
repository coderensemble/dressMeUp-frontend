import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import { PlusCircle } from "./Pictos";
import { Accessories, ClothesBas, ClothesHaut, Shoes } from "./Pictos";

function CardAddClothes() {
  return (
    <View style={styles.cardAddClothesContainer}>
      <View style={styles.cardAddClothes}>
        <View style={styles.category}>
          <Text style={styles.categoryText}>Un haut</Text>
        </View>
        <View>
          <ClothesHaut />
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.buttonPlus}>
            <PlusCircle />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.cardAddClothes}>
        <View style={styles.category}>
          <Text style={styles.categoryText}>Un bas</Text>
        </View>
        <View>
          <ClothesBas />
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.buttonPlus}>
            <PlusCircle />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.cardAddAccessories}>
        <View style={styles.category}>
          <Text style={styles.categoryText}>Des chaussures</Text>
        </View>
        <View style={styles.picto}>
          <Shoes />
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.buttonPlus}>
            <PlusCircle />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.cardAddAccessories}>
        <View style={styles.category}>
          <Text style={styles.categoryText}>Un accessoire</Text>
        </View>
        <View style={styles.picto}>
          <Accessories />
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.buttonPlus}>
            <PlusCircle />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export { CardAddClothes };

const styles = StyleSheet.create({
  cardAddClothesContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.846,
    justifyContent: 'space-evenly'
  },
  cardAddClothes: {
    width: "100%",  
    height : "20%",
    borderRadius: 10,
    backgroundColor: "#CCE3DE",
    justifyContent: "space-between",
  },
  cardAddAccessories: {
    width: "100%",
    height : "15%",
    borderRadius: 10,
    backgroundColor: "#CCE3DE",
    justifyContent: "space-between",
  },
  category: {
    marginLeft: 15,
    backgroundColor: "#6B9080",
    width: windowWidth * 0.3,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 2,
    paddingBottom: 4,
    fontSize: 13,
    borderRadius: 10,
    marginTop: -10,
  },
  categoryText: {
    fontFamily: "Lora-SemiBoldItalic",
    color: "#fff",
  },
  buttonPlus: {
    alignItems: "flex-end",
    marginBottom: -25,
    paddingRight: 10,
  },
  picto: {
    alignItems: "center",
  },
});