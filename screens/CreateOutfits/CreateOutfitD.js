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
  TopContainerListingShoes,
} from "../../Components/css/TopContainer";
import { Dimensions } from "react-native";
import { Filters } from "../../Components/css/Pictos";

import {
  setShoes,
  setAccessory1,
  setAccessory2,
  setAccessory3,
} from "../../reducers/outfits";
import {
  PreviewListingAccessories,
  PreviewListingShoes,
} from "../../Components/css/CardPreviewClothes";
import { useDispatch, useSelector } from "react-redux";

const windowWidth = Dimensions.get("window").width;

// Mettre une condition pour render soit PreviewShoes / soit PreviewAccessories
// Mettre une condition pour render soit TopContainterListingShoes / soit TopContainterListingAccessories

function CreateOutfitD({ navigation }) {

  const dispatch = useDispatch()

  const accessory1 = useSelector(
    (state) => state.outfits.temporaryOutfit.accessory1
  );
  const accessory2 = useSelector(
    (state) => state.outfits.temporaryOutfit.accessory2
  );
  const accessory3 = useSelector(
    (state) => state.outfits.temporaryOutfit.accessory3
  );

  const outfitmaintype = useSelector((state) => state.outfits.maintype);

  const handleShoesOutfitSubmit = (selectedShoes) => {
    dispatch(setShoes(selectedShoes));
    navigation.navigate("OverviewOutfit");
  };

  const handleAccessoryOutfitSubmit = (selectedAccessory) => {
    if (!accessory1) {
      dispatch(setAccessory1(selectedAccessory));
      navigation.navigate("OverviewOutfit");
    } else if (!accessory2) {
      dispatch(setAccessory2(selectedAccessory));
      navigation.navigate("OverviewOutfit");
    } else {
      dispatch(setAccessory3(selectedAccessory));
      navigation.navigate("OverviewOutfit");
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {outfitmaintype === "shoes" && (
        <TopContainerListingShoes handleGoBack={handleGoBack} />
      )}
      {outfitmaintype === "accessories" && (
        <TopContainerListingAccessories handleGoBack={handleGoBack} />
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
        {outfitmaintype === "shoes" && (
          <PreviewListingShoes
            handleShoesOutfitSubmit={handleShoesOutfitSubmit}
          />
        )}
        {outfitmaintype === "accessories" && (
          <PreviewListingAccessories
            handleAccessoryOutfitSubmit={handleAccessoryOutfitSubmit}
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
    columnGap: 10,
    rowGap: 10,
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

export default CreateOutfitD;