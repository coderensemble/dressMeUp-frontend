import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { LeftArrowCircle } from "./Pictos";

export default function Header() {
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity>
            <LeftArrowCircle/>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Ajouter...</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pictoHeader:{
    alignSelf: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  topText: {
    fontFamily: "Lora-SemiBoldItalic",
    fontSize: 30,
    color: "#6B9080",
  },
});