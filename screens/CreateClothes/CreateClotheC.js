// Correspond à 2A-C sur Figma

import React from 'react'
import { Dimensions, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TopContainerPicto } from '../../Components/css/TopContainer'
import { FilterSubTypeAccessories, FilterSubTypeBottom, FilterSubTypeShoes, FilterSubTypeTop } from '../../Components/css/FilterSubType';
import { FilterColors } from '../../Components/css/FilterColors';
import { FilterBrand } from '../../Components/css/FilterBrand';
import ButtonOptions from '../../Components/css/ButtonOptions';
import { ButtonSkip } from '../../Components/css/ButtonGreenLight';
import { useDispatch, useSelector } from 'react-redux';
import { setBrand, setColor, setName, setSubtype } from '../../reducers/clothes';

const windowWidth = Dimensions.get("window").width;


function CreateClotheC({ navigation }) {
  const dispatch = useDispatch()
  const clothe = useSelector((state) => state.clothes.temporaryClothe);
  const fullClothe = useSelector((state) => state.clothes.temporaryClothe)

  const handleTopSubmit = () => {
    navigation.navigate('CreateClotheD');
  };
  const handleSkip = () => {
    navigation.navigate('CreateClotheE');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSubtypeInput = (text) => {
    dispatch(setSubtype(text))
  }

  const handleColorSelect = (text) => {
    dispatch(setColor(text))
  }

  const handleClotheName = () => {
    dispatch(setName(`${fullClothe.subtype} ${fullClothe.brand} ${fullClothe.color.name}`))
  }

  console.log(clothe)

  // GERER NAVIGATION IMPOSSIBLE SI LES FILTRES OBLIGATOIRES NON RENSEIGNES

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SafeAreaView style={styles.mainContainer}>
          <View>
            <TopContainerPicto handleGoBack={handleGoBack} />
            <View style={styles.subContainer}>
              {clothe.maintype === "accessories" ? <Text style={styles.textTitle}>Dites nous en plus sur votre accessoire</Text> : <Text style={styles.textTitle}>Dites nous en plus sur votre habit</Text>}
              <Text style={styles.textSubtitle}>Choisissez parmi les options ci-dessous </Text>
              <FilterBrand />
              {clothe.maintype === "top" && <FilterSubTypeTop handleSubtypeInput={handleSubtypeInput} />}
              {clothe.maintype === "bottom" && <FilterSubTypeBottom handleSubtypeInput={handleSubtypeInput} />}
              {clothe.maintype === "shoes" && <FilterSubTypeShoes handleSubtypeInput={handleSubtypeInput} />}
              {clothe.maintype === "accessories" && <FilterSubTypeAccessories handleSubtypeInput={handleSubtypeInput} />}
              <FilterColors handleColorSelect={handleColorSelect} />
              {clothe.maintype === "shoes" || clothe.maintype === "accessories" ? null : <ButtonOptions handleTopSubmit={handleTopSubmit} />}
            </View>
          </View>
          <ButtonSkip handleSkip={handleSkip} handleClotheName={handleClotheName} />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F6FFF8',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  subContainer: {
    alignItems: "center",
    // justifyContent: "space-evenly"
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
})

export default CreateClotheC
