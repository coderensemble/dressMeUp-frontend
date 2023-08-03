// Correspond à 5A-B du Figma

import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { TopContainerListingTop } from "../../Components/css/TopContainer";
import { Dimensions } from "react-native";
import { PreviewTop } from "../../Components/css/CardPreviewClothes";
import { CurrentRenderContext } from "@react-navigation/native";
import { Filters } from "../../Components/css/Pictos";

const windowWidth = Dimensions.get("window").width;

// Mettre une condition pour render soit TopContainerListingTop / soit TopContainerListingBottom
// Mettre une condition pour render soit PreviewTop / soit PreviewBottom

function ViewClotheB() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TopContainerListingTop />
      <View style={styles.filterContainer}>
        <View>
          <TextInput
            placeholder="Quel article cherchez-vous ?"
            style={styles.input}
          />
        </View>
        <View style={styles.pictoFilter}>
          <TouchableOpacity>
            <Filters />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <PreviewTop />
        <PreviewTop />
        <PreviewTop />
        <PreviewTop />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F6FFF8",
    alignItems: "center",
    justifyContent: "flex-start",
    rowGap: 10,
  },
  input: {
    width: windowWidth * 0.78,
    padding: 10,
    borderWidth: 1.5,
    fontSize: 16,
    borderRadius: 10,
    borderColor: "#6B9080",
    backgroundColor: "#fff",
  },
  scrollViewContentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  pictoFilter:{
    alignSelf: "center",
    transform: [{ rotate: "90deg" }],
  },
  filterContainer: {
    width : windowWidth * 0.9,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
});

export default ViewClotheB
