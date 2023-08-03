import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Setting from '../Components/functionalcomponents/Setting'

export default function UserProfileScreen() {
  return (
    <SafeAreaView  style={styles.mainContainer}>
      <Setting />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
mainContainer: {
  flex: 1,
  backgroundColor: "#F6FFF8",
  alignItems: "center",
  justifyContent: "center",
},
})
