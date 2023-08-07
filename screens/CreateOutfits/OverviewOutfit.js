// Correspond à la visualisation des différents ajouts à la tenue sur Figma

import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TopContainerOverviewOutfit } from "../../Components/css/TopContainer";
import { PreviewOverview } from "../../Components/css/CardPreviewClothes";
import {
  ButtonAddClothes,
  ButtonValidateOutfit,
} from "../../Components/css/ButtonGreenLight";
import { useState } from "react";
import { Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { saveOutfit } from "../../reducers/outfits";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function OverviewOutfit({ navigation }) {
  const temporaryOutfit = useSelector((state) => state.outfits.temporaryOutfit);

  // Liste des accessoires ayant un subtype parmi "Bonnet", "Chapeau", "Casquette" ou "Lunettes"
  const priorityAccessories = ["Bonnet", "Chapeau", "Casquette", "Lunettes"];

  // Initialiser les tableaux dans l'ordre souhaité
  const hatList = [];
  const top1List = [];
  const beltList = [];
  const bottomList = [];
  const glassesList = [];
  const top2List = [];
  const shoeList = [];
  const otherAccessoriesList = [];

  // Remplir les tableaux en fonction du type de vêtement et du sous-type
  for (const clothe in temporaryOutfit) {
    const item = temporaryOutfit[clothe];
    if (item) {
      if (item.maintype === "accessories") {
        if (["Bonnet", "Chapeau", "Casquette"].includes(item.subtype)) {
          hatList.push(item);
        } else if (["Ceinture"].includes(item.subtype)) {
          beltList.push(item);
        } else if (["Lunettes"].includes(item.subtype)) {
          glassesList.push(item);
        } else {
          otherAccessoriesList.push(item);
        }
      } else if (item.maintype === "top") {
        if (["T-shirt", "Chemise"].includes(item.subtype)) {
          top1List.push(item);
        } else {
          top2List.push(item);
        }
      } else if (item.maintype === "bottom") {
        bottomList.push(item);
      } else if (item.maintype === "shoes") {
        shoeList.push(item);
      }
    }
  }

  // Combiner les tableaux dans l'ordre souhaité
  const combinedList = [
    ...hatList,
    ...top1List,
    ...bottomList,
    ...glassesList,
    ...top2List,
    ...beltList,
    ...shoeList,
    ...otherAccessoriesList,
  ];

  const selectedCount = combinedList.length;
  const isDoubleColumn = temporaryOutfit.top2 || selectedCount > 3;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleValidateOutfit = () => {
    dispatch(saveOutfit());
  };

  const handleAddClotheToOutfit = () => {
    navigation.navigate("CreateOutfitB");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TopContainerOverviewOutfit handleGoBack={handleGoBack} />
      <View
        style={
          isDoubleColumn
            ? styles.doubleColumnContainer
            : styles.singleColumnContainer
        }
      >
        {combinedList.map((clothe, index) => (
          <PreviewOverview key={index} clothe={clothe} />
        ))}
      </View>
      <View>
        <ButtonAddClothes handleAddClotheToOutfit={handleAddClotheToOutfit} />
        {selectedCount >= 2 && (
          <ButtonValidateOutfit handleValidateOutfit={handleValidateOutfit} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F6FFF8",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonGreen: {
    width: windowWidth * 0.9,
    alignItems: "center",
    backgroundColor: "#6B9080",
    padding: 12,
    borderRadius: 10,
  },
  textButton: {
    fontFamily: "Lora-SemiBold",
    color: "white",
  },
  doubleColumnContainer: {
    width: "90%",
    height: windowHeight * 0.7,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    rowGap: 5,
    columnGap: 5,
  },
  singleColumnContainer: {
    justifyContent: "space-between",
    rowGap: 5,
    columnGap: 5,
  },
});

export default OverviewOutfit;
