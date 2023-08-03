import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function PreviewListingTop() {
  return (
    <TouchableOpacity>
      <View style={styles.cardClothes}></View>
    </TouchableOpacity>
  );
}

function PreviewTop() {
  return <View style={styles.cardClothes}>
    <Image style={styles.imagePreview} resizeMode="contain" source={require('../../assets/images/1661139363d0af2b9ebc4be1a701c62b3af5e237ef.webp')} />
  </View>;
}

function PreviewAccessories() {
  return (
    <TouchableOpacity>
      <View style={styles.cardAccessories}></View>
    </TouchableOpacity>
  );
}

export { PreviewTop, PreviewAccessories, PreviewListingTop };

const styles = StyleSheet.create({
  cardClothes: {
    width: windowWidth * 0.435,
    height: windowHeight * 0.237,
    borderRadius: 10,
    backgroundColor: "#222",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.8,
    // shadowRadius: 5,
    // elevation: 5,
  },
  imagePreview: {
    width : '100%',
    
  },
  cardAccessories: {
    width: windowWidth * 0.435,
    height: windowHeight * 0.118,
    borderRadius: 10,
    backgroundColor: "#222",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.8,
    // shadowRadius: 5,
    // elevation: 5,
  },
});
