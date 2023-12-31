import { StyleSheet, TextInput, View } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function InputSearch() {
  return (
      <TextInput
        placeholder="Remplacez par ce que vous voulez"
        style={styles.input}
      />
  );
}

const styles = StyleSheet.create({
  input: {
    width: windowWidth * 0.78,
    padding: 10,
    borderWidth: 1.5,
    fontSize: 16,
    borderRadius: 10,
    borderColor: "#6B9080",
    backgroundColor: "#fff",
  },
});
