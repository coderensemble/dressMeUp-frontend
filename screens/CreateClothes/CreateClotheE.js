// Correspond à 2A-E sur Figma

import React from 'react'
import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TopContainerPicto } from '../../Components/css/TopContainer'
import { FilterSubTypeTop } from '../../Components/css/FilterSubType';
import { FilterColors } from '../../Components/css/FilterColors';
import { FilterBrand } from '../../Components/css/FilterBrand';
import ButtonOptions from '../../Components/css/ButtonOptions';
import { ButtonNextStep } from '../../Components/css/ButtonGreenLight';
import { TextInput } from 'react-native';
import { Camera } from '../../Components/css/Pictos';

const windowWidth = Dimensions.get("window").width;


function CreateClotheE({navigation}) {

  const handleTopSubmit = () => {
    navigation.navigate('CreateClotheF');
};

  const handleGoBack = () => {
    navigation.goBack();
};

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <SafeAreaView style={styles.mainContainer}>
        <View>
          <TopContainerPicto handleGoBack={handleGoBack} />
          <View style={styles.subContainer}>
            <Text style={styles.textTitle}>Finalisez votre habit</Text>
            <View style={styles.filtersContainer}>
              <Text style={styles.filterTitle}>Donnez un nom à votre vêtement</Text>
              <TextInput
                placeholder="Default name du vêtement"
                style={styles.input}
              />
            </View>
            <View style={styles.pictureContainer}>
              <Camera />
            </View>
            <View style={styles.tipsContainer}>
              <Text style={styles.tipTitle}>Astuces</Text>
              <Text>Photographiez votre vêtement sur un fond clair pour un meilleur rendu. N’hésitez pas également à utiliser la fonction de détourage si vous êtes sur iOS !</Text>
            </View>
          </View>
        </View>
        <ButtonNextStep handleTopSubmit={handleTopSubmit} />
      </SafeAreaView>
    </KeyboardAvoidingView>

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

  filtersContainer: {
    width: windowWidth * 0.9,
    alignContent: "center",
    marginTop: 20
  },
  filterTitle: {
    fontSize: 18,
    fontFamily: "Lora-SemiBoldItalic",
    paddingBottom: 15,
    textAlign: "center",
  },
  input: {
    width: windowWidth * 0.9,
    padding: 10,
    borderWidth: 1.5,
    fontSize: 16,
    borderRadius: 10,
    borderColor: "#6B9080",
    backgroundColor: "#fff",
  },
  pictureContainer: {
    width: 300,
    height: 300,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6B9080"
  },
  tipsContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.9
  },
  tipTitle: {
    fontFamily: "Lora-SemiBoldItalic",
    fontSize: 18,
    marginTop: 30,
    marginBottom: 30
  },

})

export default CreateClotheE
