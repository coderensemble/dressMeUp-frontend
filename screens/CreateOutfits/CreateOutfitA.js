// Correspond à 3A-A du Figma

import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, Text } from 'react-native'
import { TopContainerPicto } from '../../Components/css/TopContainer'
import { useDispatch } from 'react-redux'
import { CardEvent } from '../../Components/css/CardEvent'
import { Dimensions } from 'react-native'
import { ButtonNextStep } from '../../Components/css/ButtonGreenLight'

const windowWidth = Dimensions.get("window").width;


function CreateOutfitA() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <TopContainerPicto />
        <View style={styles.subContainer}>
          <Text style={styles.textTitle}>Pour quel(s) type(s) d’event(s) ?</Text>
          <Text style={styles.textSubtitle}>Choisissez un ou plusieurs type(s) parmi la liste ci-dessous </Text>
          <CardEvent />
        </View>
      </View>

      <ButtonNextStep />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F6FFF8',
    alignItems: 'center',
    justifyContent: "space-between"
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
  buttonGreen: {
    width: windowWidth * 0.9,
    alignItems: "center",
    backgroundColor: "#A4C3B2",
    padding: 12,
    borderRadius: 10,
  },
  textButton: {
    fontFamily: "Lora-SemiBold",
  },
})

export default CreateOutfitA
