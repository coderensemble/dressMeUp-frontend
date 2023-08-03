import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Dimensions } from "react-native";
import { LeftArrowCircle, Undo } from "./Pictos";

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

function TopContainerListingTop() {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity>
            <LeftArrowCircle/>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Mes hauts</Text>
        </View>
      </View>
    </View>
  );
}

function TopContainerListingBottom() {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity>
            <LeftArrowCircle/>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Mes bas</Text>
        </View>
      </View>
    </View>
  );
}

function TopContainerListingShoes() {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity>
            <LeftArrowCircle/>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Mes chaussures</Text>
        </View>
      </View>
    </View>
  );
}

function TopContainerListingAccessories() {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity>
            <LeftArrowCircle/>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Mes accessoires</Text>
        </View>
      </View>
    </View>
  );
}

function TopContainerOverviewOutfit() {
  return (
    <View>
      <View style={styles.headerOverviewContainer}>
        <View>
          <TouchableOpacity style={styles.doublePictoHeader}>
            <LeftArrowCircle/>
            <Undo />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Mes accessoires</Text>
        </View>
      </View>
    </View>
  );
}

export {TopContainerCreateClothe, TopContainerPicto, TopContainerListingTop, TopContainerListingAccessories, TopContainerListingShoes, TopContainerListingBottom, TopContainerOverviewOutfit}

const styles = StyleSheet.create({
  headerMainContainer: {
    width: "90%",
  },
  pictoHeader:{
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
  headerOverviewContainer : {
    flexDirection: "row",
    alignItems : "center",
    justifyContent : "space-between",
    width : '90%',
  },
  headerContainerPicto: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
  },
  topText: {
    fontFamily: "Lora-SemiBoldItalic",
    fontSize: 30,
    color: "black",
    opacity: 0.7
  },
});