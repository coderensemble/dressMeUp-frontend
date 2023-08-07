// Correspond à 2A-B sur Figma

import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TopContainerPicto } from '../../Components/css/TopContainer'
import { CardEvent } from '../../Components/css/CardEvent'
import ButtonGreenLight, { ButtonNextStep } from '../../Components/css/ButtonGreenLight'
import { useDispatch, useSelector } from 'react-redux';
import { setEvent, setName } from '../../reducers/clothes'

const windowWidth = Dimensions.get("window").width;


function CreateClotheB({ navigation }) {
  const dispatch = useDispatch()
  const clothemaintype = useSelector((state) => state.clothes.temporaryClothe.maintype);
  const clotheevent = useSelector((state) => state.clothes.temporaryClothe.event)
  const fullClothe = useSelector((state) => state.clothes.temporaryClothe)

  // console.log(clothemaintype)
  // console.log(clotheevent)

  const handleTopSubmit = () => {
    navigation.navigate('CreateClotheC');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const isSelected = (text) => {
    dispatch(setEvent(text))
  }

  const handleClotheName = () => {
    dispatch(setName(`${fullClothe.subtype} ${fullClothe.brand} ${fullClothe.color.name}`))
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <TopContainerPicto handleGoBack={handleGoBack} />
        <View style={styles.subContainer}>
          <Text style={styles.textTitle}>Pour quel(s) type(s) d’event(s) ?</Text>
          <Text style={styles.textSubtitle}>Choisissez un ou plusieurs type(s) parmi la liste ci-dessous </Text>
          <CardEvent isSelected={isSelected} />
        </View>
      </View>
      <ButtonNextStep handleTopSubmit={handleTopSubmit} handleClotheName={handleClotheName} />
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
export default CreateClotheB
