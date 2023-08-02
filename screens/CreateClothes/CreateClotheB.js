// Correspond à 2A-B sur Figma

import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TopContainerPicto } from '../../Components/css/TopContainer'
import {CardEvent}  from '../../Components/css/CardEvent'

const windowWidth = Dimensions.get("window").width;


function CreateClotheB() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TopContainerPicto />
      <Text style={styles.textTitle}>Pour quel(s) type(s) d’event(s) ?</Text>
      <Text style={styles.textSubtitle}>Choisissez un ou plusieurs type(s) parmi la liste ci-dessous </Text>
        <CardEvent style={styles.cardContainer} />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F6FFF8',
    alignItems: 'center',
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
  cardContainer: {
    marginVertical: 30
  },


})
export default CreateClotheB
