// Correspond à 2A-F sur Figma

import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TopContainerPicto } from '../../Components/css/TopContainer'
import { ButtonValidate } from '../../Components/css/ButtonGreenLight';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;



function CreateClotheF({navigation}) {

  const handleGoBack = () => {
    navigation.goBack();
};

  return (
    <View style={styles.mainContainer}>

      <ImageBackground
        source={require('../../assets/images/1661139363d0af2b9ebc4be1a701c62b3af5e237ef.webp')}
        resizeMode="cover"
        style={styles.imageBackground}
        blurRadius={10}
      >
        <View style={styles.insidePicture}>

          <TopContainerPicto handleGoBack={handleGoBack} />
          <Image style={styles.image} source={require('../../assets/images/1661139363d0af2b9ebc4be1a701c62b3af5e237ef.webp')} />
        </View>
      </ImageBackground>
      <View style={styles.modalContainer}>
        <View style={styles.modalGrey}>
        <Text style={styles.title}>Nom du vêtement</Text>
        <ButtonValidate/>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F6FFF8',
    alignItems: 'center',
  },
  imageBackground: {
    height: windowHeight * 0.5,
    justifyContent: "flex-start",
    paddingTop: 50,
    width: "100%",

  },
  insidePicture: {
    alignItems: "center"
  },
  image: {
    width: 170,
    height: 200,
    borderRadius: 5
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
    height: windowHeight * 0.65,
    backgroundColor: "#EAF4F4",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    rowGap: 10,
  },
  title: {
   fontFamily: 'Lora-Bold',
   fontSize: 25
  },


})


export default CreateClotheF
