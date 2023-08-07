// Correspond à 3A-C du Figma

import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  TopContainerListingAccessories,
  TopContainerListingTop,
  TopContainerListingBottom,
  TopContainerListingShoes,
} from "../../Components/css/TopContainer";
import { Dimensions } from "react-native";
import { Filters } from "../../Components/css/Pictos";
import {
  setTop1,
  setTop2,
  setBottom,
} from "../../reducers/outfits";
import {
  PreviewListingBottom,
  PreviewListingTop,
} from "../../Components/css/CardPreviewClothes";

import { useDispatch, useSelector } from "react-redux";

const windowWidth = Dimensions.get("window").width;

function CreateOutfitC({ navigation }) {

  const dispatch = useDispatch()

  const temporaryOutfit = useSelector((state) => state.outfits.temporaryOutfit)
  const top1 = useSelector((state) => state.outfits.temporaryOutfit.top1);
  const top2 = useSelector((state) => state.outfits.temporaryOutfit.top2);

  const outfitmaintype = useSelector((state) => state.outfits.maintype);
  
  const handleTopOutfitSubmit = (selectedTop) => {
    if (!top1) {
      dispatch(setTop1(selectedTop));
      navigation.navigate("OverviewOutfit")
    } else {
      dispatch(setTop2(selectedTop));
      navigation.navigate("OverviewOutfit")
    }
  };

  const handleBottomOutfitSubmit = (selectedBottom) => {
    dispatch(setBottom(selectedBottom));
    navigation.navigate("OverviewOutfit")
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {outfitmaintype === "top" && (
        <TopContainerListingTop handleGoBack={handleGoBack} />
      )}
      {outfitmaintype === "bottom" && (
        <TopContainerListingBottom handleGoBack={handleGoBack} />
      )}
      <View style={styles.filterContainer}>
        <View>
          <TextInput placeholder="Que cherchez-vous ?" style={styles.input} />
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
        {outfitmaintype === "top" && (
          <PreviewListingTop handleTopOutfitSubmit={handleTopOutfitSubmit} />
        )}
        {outfitmaintype === "bottom" && (
          <PreviewListingBottom
            handleBottomOutfitSubmit={handleBottomOutfitSubmit}
          />
        )}
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
    rowGap: 20,
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
    rowGap: 10,
    columnGap: 10,
  },
  pictoFilter: {
    alignSelf: "center",
    transform: [{ rotate: "90deg" }],
  },
  filterContainer: {
    width: windowWidth * 0.9,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
});

export default CreateOutfitC;
