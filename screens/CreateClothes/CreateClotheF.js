// Correspond à 2A-F sur Figma

import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TopContainerPicto } from "../../Components/css/TopContainer";
import { ButtonValidate } from "../../Components/css/ButtonGreenLight";
import { PreviewTop } from "../../Components/css/CardPreviewClothes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function CreateClotheF() {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require("../../assets/images/1661139363d0af2b9ebc4be1a701c62b3af5e237ef.webp")}
        resizeMode="cover"
        style={styles.imageBackground}
        blurRadius={10}
      >
        <View style={styles.insidePicture}>
          <TopContainerPicto />
          <PreviewTop />
        </View>
      </ImageBackground>
      <View style={styles.modalContainer}>
        <View style={styles.modalGrey}>
          <Text style={styles.title}>Nom du vêtement</Text>
          <View style={styles.filtersContainer}>
            <Text style={styles.filterTitle}>Sous-type du vêtement</Text>
            <View style={styles.filterContainer}>
              <View style={styles.filterButton}>
                <Text style={styles.filterText}>Sous-type</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.filterTitle}>Couleur du vêtement</Text>
            <View style={styles.filterContainer}>
              <View style={styles.colorRound} />
            </View>
          </View>
          <View>
            <Text style={styles.filterTitle}>Marque du vêtement</Text>
            <View style={styles.filterContainer}>
              <View style={styles.filterButton}>
                <Text style={styles.filterText}>Marque</Text>
              </View>
            </View>
          </View>
          <View style={styles.filtersContainer}>
            <Text style={styles.filterTitle}>Optionnels</Text>
            <View style={styles.filterContainer}>
              <View style={styles.filterButton}>
                <Text style={styles.filterText}>Sous-type</Text>
              </View>
              <View style={styles.filterButton}>
                <Text style={styles.filterText}>Sous-type</Text>
              </View>
              <View style={styles.filterButton}>
                <Text style={styles.filterText}>Sous-type</Text>
              </View>
            </View>
          </View>
          <ButtonValidate />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F6FFF8",
    alignItems: "center",
  },
  imageBackground: {
    height: windowHeight * 0.5,
    justifyContent: "flex-start",
    paddingTop: 50,
    width: "100%",
  },
  insidePicture: {
    alignItems: "center",
  },
  image: {
    width: 170,
    height: 200,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    width : '100%'
  },
  modalGrey: {
    paddingTop: 20,
    height: windowHeight * 0.65,
    backgroundColor: "#EAF4F4",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    rowGap: 10,
  },
  title: {
    fontFamily: "Lora-Bold",
    fontSize: 25,
  },
  filterTitle: {
    fontSize: 18,
    fontFamily: "Lora-SemiBoldItalic",
    paddingBottom: 15,
    textAlign: "center",
  },
  filterContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    rowGap: 5,
    columnGap: 7,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#6B9080",
    borderWidth: 1,
    borderRadius: 20,
  },
  filterText: {
    fontSize: 12,
    fontFamily: "Lora-Medium",
    color: "#6B9080",
  },
  filtersContainer: {
    width: windowWidth * 0.9,
    alignContent: "center",
  },
  colorRound: {
    height: 35,
    width: 35,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "#222",
  },
  colorsContainer: {
    alignItems: "center",
  },
});

export default CreateClotheF;
