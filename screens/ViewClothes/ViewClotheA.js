// Correspond à 5A-A du Figma
// Topcontainer coder en dur, il faut prévoir un composant spécifique à importer plutôt
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LeftArrowCircle } from '../../Components/css/Pictos'
import { SafeAreaView } from 'react-native-safe-area-context';
import {SmallPreviewAccessories, SmallPreviewBottom, SmallPreviewShoes, SmallPreviewTop } from '../../Components/css/CardPreviewClothes';

function ViewClotheA() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerMainContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.pictoHeader}>
            <TouchableOpacity>
              <LeftArrowCircle />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.topText}>Mes vêtements</Text>
          </View>
        </View>
      </View>
      <SmallPreviewTop />
      <SmallPreviewBottom/>
      <SmallPreviewShoes/>
      <SmallPreviewAccessories/>
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
  safearea: {
    flex: 1,
    backgroundColor: '#F6FFF8',
  },
  headerMainContainer: {
    width: "90%",
  },
  pictoHeader: {
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
    opacity: 0.7
  },
});

export default ViewClotheA
