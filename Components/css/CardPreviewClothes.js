import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function PreviewTop() {
  return (
    <View style={styles.previewContainer}>
      <TouchableOpacity>
        <View style={styles.cardClothes}>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.cardClothes}>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function PreviewAccessories() {
  return (
    <View style={styles.previewContainer}>
      <TouchableOpacity>
        <View style={styles.cardAccessories}>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.cardAccessories}>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export { PreviewTop, PreviewAccessories }

const styles = StyleSheet.create({
  previewContainer: {
    width: "90%",
    flexWrap : 'wrap',
    flexDirection : "row", 
    rowGap : 10,
    columnGap : 10,
    paddingTop : 10,
  
  },
  cardClothes: {
    width: windowWidth * 0.435,
    height: windowHeight * 0.237,
    borderRadius : 10,
    backgroundColor : '#222',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  cardAccessories: {
    width: windowWidth * 0.435,
    height: windowHeight * 0.118,
    borderRadius : 10,
    backgroundColor : '#222',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
});
