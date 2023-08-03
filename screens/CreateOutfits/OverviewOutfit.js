// Correspond à la visualisation des différents ajouts à la tenue sur Figma

import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TopContainerOverviewOutfit } from "../../Components/css/TopContainer";
import { PreviewTop } from "../../Components/css/CardPreviewClothes";
import { ButtonAddClothes } from "../../Components/css/ButtonGreenLight";
import { useState } from "react";

function OverviewOutfit() {
  
  // // Créer un useState qui va venir se remplir avec le choix des vêtements :
  // const [selectedClothes, setSelectedClothes] = useState({
  // top1: null,
  // top2 : null,
  // bottom: null,
  // shoes: null,
  // accessory1: null,
  // accessory2: null,
  // accessory3: null,
  // });

  // // Exemple d'un vêtement : bottom : { maintype: 'bottom', subtype: 'jeans', image: 'jeans.jpg' }

  // const selectedCount = Object.values(selectedClothes).filter((value) => value !== null).length;
  // const isDoubleColumn = selectedClothes.top2 || selectedCount > 3;

  // // Liste des accessoires ayant un subtype parmi "Bonnet", "Chapeau", "Casquette" ou "Lunettes"
  // const priorityAccessories = ["Bonnet", "Chapeau", "Casquette", "Lunettes"];

  // // Tableaux pour stocker les accessoires prioritaires et les autres accessoires
  // const priorityAccessoriesList = [];
  // const otherAccessoriesList = [];
  // const topList = [];
  // const bottomList = [];
  // const beltAndTightsList = [];
  // const shoeList = [];

  // Remplir les tableaux en fonction du type de vêtement et du sous-type
  // for (const key in selectedClothes) {
  //   const item = selectedClothes[key];
  //   if (item) {
  //     if (priorityAccessories.includes(item.subtype)) {
  //       priorityAccessoriesList.push(item);
  //     } else {
  //       // Vérifier le type du vêtement pour le classer comme top, bottom, shoe, ceinture ou collant
  //       if (key === "top1" || key === "top2") {
  //         topList.push(item);
  //       } else if (key === "bottom") {
  //         bottomList.push(item);
  //       } else if (key === "shoes") {
  //         shoeList.push(item);
  //       } else if (item.subtype === "Ceinture" || item.subtype === "Collant") {
  //         beltAndTightsList.push(item);
  //       } else {
  //         otherAccessoriesList.push(item);
  //       }
  //     }
  //   }
  // }

  // // Combiner les tableaux dans l'ordre souhaité
  // const combinedList = [
  //   ...priorityAccessoriesList,
  //   ...topList,
  //   ...bottomList,
  //   ...shoeList,
  //   ...beltAndTightsList,
  //   ...otherAccessoriesList,
  // ];

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TopContainerOverviewOutfit />
      <ButtonAddClothes style={styles.buttonAddClothes} />
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
});

export default OverviewOutfit;
