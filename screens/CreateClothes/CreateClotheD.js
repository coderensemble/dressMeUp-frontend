// Correspond à 2A-D sur Figma
import React from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TopContainerPicto, TopContainerPictoSubtext } from "../../Components/css/TopContainer";
import { ButtonNextStep } from "../../Components/css/ButtonGreenLight";
import {
  FilterMaterialBottom,
  FilterMaterialTop,
} from "../../Components/css/FilterMaterial";
import { FilterShapeClothes } from "../../Components/css/FilterType";
import { FilterSeason } from "../../Components/css/FilterSeason";
import Meteo from "../../Components/css/Meteo";
import { useDispatch, useSelector } from "react-redux";
import {
  setCut,
  setMaterial,
  setName,
  setSeason,
  setWaterproof,
} from "../../reducers/clothes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function CreateClotheD({ navigation }) {
  const dispatch = useDispatch();
  const clothe = useSelector((state) => state.clothes.temporaryClothe);
  const fullClothe = useSelector((state) => state.clothes.temporaryClothe);

  // console.log(clothe)
  const handleTopSubmit = () => {
    navigation.navigate("CreateClotheE");
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleMaterialInput = (text) => {
    dispatch(setMaterial(text));
  };
  const handleShapeInput = (text) => {
    dispatch(setCut(text));
  };
  const handleMeteo = (text) => {
    dispatch(setWaterproof(text));
  };

  const isSelected = (text) => {
    dispatch(setSeason(text));
  };

  const handleClotheName = () => {
    dispatch(
      setName(
        `${fullClothe.subtype} ${fullClothe.brand} ${fullClothe.color.translate}`
      )
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TopContainerPictoSubtext handleGoBack={handleGoBack} />
      <View style={styles.modalContainer}>
        <View style={styles.modalGrey}>
          {clothe.maintype === "top" ? (
            <FilterMaterialTop handleMaterialInput={handleMaterialInput} />
          ) : (
            <FilterMaterialBottom handleMaterialInput={handleMaterialInput} />
          )}
          <FilterShapeClothes handleShapeInput={handleShapeInput} />
          <FilterSeason isSelected={isSelected} />
          <Meteo handleMeteo={handleMeteo} />
          <ButtonNextStep
            handleTopSubmit={handleTopSubmit}
            handleClotheName={handleClotheName}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex : 1,
    backgroundColor: "#F6FFF8",
    alignItems: "center",
    justifyContent : "space-between",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  filterText: {
    fontFamily: "Lora-SemiBoldItalic",
    fontSize: 18,
  },
  modalContainer: {
    width : '100%',
    justifyContent: "flex-end",
    position : "absolute",
    bottom : 0,
  },
  modalGrey: {
    paddingTop: 20,
    height: windowHeight * 0.77,
    backgroundColor: "#EAF4F4",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    rowGap: 10,
  },
});

export default CreateClotheD;
