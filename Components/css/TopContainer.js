import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Dimensions } from "react-native";
import { LeftArrowCircle } from "./Pictos";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function TopContainerCreateClothe({ handleGoBack }) {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity onPress={handleGoBack}>
            <LeftArrowCircle />
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
          <TouchableOpacity onPress={handleGoBack}>
            <LeftArrowCircle />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export {TopContainerCreateClothe, TopContainerPicto}

const styles = StyleSheet.create({
  headerMainContainer: {
    width: "90%",
  },
  pictoHeader: {
    alignSelf: "center",
  },
  doublePictoHeader : {
    flexDirection : "row"
  },
  headerContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  headerContainerPicto: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  headerOverviewContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  headerOverviewMainContainer: {
    width: "90%",
  },
  topText: {
    fontFamily: "Lora-SemiBoldItalic",
    fontSize: 30,
    color: "black",
    opacity: 0.7,
  },
  doublePictoHeader: {
    flexDirection: "row",
    columnGap: 20,
    alignSelf : "center"
  },
});