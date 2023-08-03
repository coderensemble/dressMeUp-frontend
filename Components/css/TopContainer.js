import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Dimensions } from "react-native";
import { LeftArrowCircle } from "./Pictos";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


function TopContainerCreateClothe({handleGoBack}) {

  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity handleGoBack={handleGoBack} >
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

function AccountTopContainer(){
  return(
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity>
            <LeftArrowCircle/>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Mon compte</Text>
        </View>
      </View>
    </View>
  )
}

function TopContainerPicto({handleGoBack}) {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainerPicto}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity onPress={handleGoBack}>
            <LeftArrowCircle/>
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
    alignItems: "center",
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
});