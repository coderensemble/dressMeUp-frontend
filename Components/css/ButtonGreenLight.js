import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function ButtonGreenLight() {
  return (
    <TouchableOpacity style={styles.buttonGreen} activeOpacity={0.8}>
      <Text style={styles.textButton}>TEXT BUTTON</Text>
    </TouchableOpacity>
  );
}
function ButtonNextStep() {
  return (
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.buttonGreen} activeOpacity={0.8}>
      <Text style={styles.textButton}>Etape suivante</Text>
    </TouchableOpacity>  
    </View>
  );
}
function ButtonValidate() {
  return (
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.buttonGreen} activeOpacity={0.8}>
      <Text style={styles.textButton}>Valider</Text>
    </TouchableOpacity>  
    </View>
  );
}

export {ButtonGreenLight, ButtonNextStep, ButtonValidate}

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 30
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
});
