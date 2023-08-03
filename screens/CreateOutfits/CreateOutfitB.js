// Correspond à 2A-A du Figma

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TopContainerCreateClothe } from "../../Components/css/TopContainer";
import { CardAddClothes } from "../../Components/css/CardAddClothes";
import { SafeAreaView } from "react-native-safe-area-context";

function CreateOutfitB() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TopContainerCreateClothe />
      <CardAddClothes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F6FFF8",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default CreateOutfitB;
