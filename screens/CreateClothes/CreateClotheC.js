// Correspond à 2A-C sur Figma

import React from 'react'
import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TopContainerPicto } from '../../Components/css/TopContainer'
import { FilterSubTypeTop } from '../../Components/css/FilterSubType';
import { FilterColors } from '../../Components/css/FilterColors';
import { FilterBrand } from '../../Components/css/FilterBrand';
import ButtonOptions from '../../Components/css/ButtonOptions';
import { ButtonNextStep } from '../../Components/css/ButtonGreenLight';

const windowWidth = Dimensions.get("window").width;


function CreateClotheC() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

    <SafeAreaView style={styles.mainContainer}>
      <View>
        <TopContainerPicto />
        <View style={styles.subContainer}>
          <Text style={styles.textTitle}>Dites nous en plus sur votre habit</Text>
          <Text style={styles.textSubtitle}>Choisissez parmi les options ci-dessous </Text>
          <FilterSubTypeTop />
          <FilterColors />
          <FilterBrand />
          <ButtonOptions />
        </View>
      </View>
      <ButtonNextStep/>
    </SafeAreaView>
    </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F6FFF8',
    alignItems: 'center',
    justifyContent:'space-between'
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



})

export default CreateClotheC
