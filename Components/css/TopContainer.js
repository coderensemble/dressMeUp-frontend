import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Dimensions } from "react-native";
import { LeftArrowCircle } from "./Pictos";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function TopContainer() {
  return (
    <View style={styles.headerMainContainer}>
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

function TopContainerPicto() {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainerPicto}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity>
            <LeftArrowCircle/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export {TopContainer, TopContainerPicto}

const styles = StyleSheet.create({
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
    color: "#6B9080",
  },
});
