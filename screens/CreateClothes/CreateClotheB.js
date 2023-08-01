// Correspond à 2A-B sur Figma

import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TopContainerPicto } from '../../Components/css/TopContainer'


function CreateClotheB() {
  return (
    <SafeAreaView style={styles.mainContainer}>
    <View>
          <TopContainerPicto />
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
      flex: 1,
      backgroundColor: '#F6FFF8',
      alignItems: 'center',
      justifyContent: 'flex-start',
  },


})
export default CreateClotheB
