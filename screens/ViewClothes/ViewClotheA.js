// Correspond à 5A-A du Figma

import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LeftArrowCircle } from '../../Components/css/Pictos'
import { SafeAreaView } from 'react-native-safe-area-context';

function ViewClotheA() {
  return (
    <SafeAreaView style={styles.mainContainer}>
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity>
            <LeftArrowCircle/>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Mes vêtements</Text>
        </View>
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
    justifyContent: 'flex-start'
},
  headerMainContainer: {
    width: "90%",
  },
  pictoHeader:{
    alignSelf: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  headerContainerPicto: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
  },
  topText: {
    fontFamily: "Lora-SemiBoldItalic",
    fontSize: 30,
    color: "black",
    // opacity: 0.7
  },
});

export default ViewClotheA
