// Correspond à 2A-D sur Figma
import React from 'react'
import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TopContainerPicto } from '../../Components/css/TopContainer';
import { ButtonNextStep } from '../../Components/css/ButtonGreenLight';
import { FilterMaterialTop } from '../../Components/css/FilterMaterial';
import { FilterTypeClothes } from '../../Components/css/FilterType';
import { FilterSeason } from '../../Components/css/FilterSeason';
import Meteo from '../../Components/css/Meteo';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


function CreateClotheD({navigation}) {

  const handleTopSubmit = () => {
    navigation.navigate('CreateClotheE');
};

  const handleGoBack = () => {
    navigation.goBack();
};

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TopContainerPicto handleGoBack={handleGoBack}/>

      <View>
        <View style={styles.subContainer}>
          <Text style={styles.textTitle}>Dites nous en plus sur votre habit</Text>
          <Text style={styles.textSubtitle}>Choisissez parmi les options ci-dessous </Text>
        </View>
      </View>

      <View style={styles.modalContainer}>
        <View style={styles.modalGrey}>
          <FilterMaterialTop />
          <FilterTypeClothes />
          <FilterSeason />
          <Meteo/>
          <ButtonNextStep handleTopSubmit={handleTopSubmit} />
        </View>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F6FFF8',
    alignItems: 'center',
  },
  subContainer: {
    alignItems: "center"
  },
  textTitle: {
    fontFamily: "Lora-SemiBoldItalic",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  textSubtitle: {
    width: windowWidth * 0.7,
    marginBottom: 20
  },
  filterText: {
    fontFamily: "Lora-SemiBoldItalic",
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0
  },
  modalGrey: {
    paddingTop: 20,
    height: windowHeight * 0.77,
    backgroundColor: "#EAF4F4",
    borderRadius: 20,
    alignItems: "space-between",
    justifyContent: "flex-start",
    rowGap: 10,
    paddingRight: 20
  },
})

export default CreateClotheD
