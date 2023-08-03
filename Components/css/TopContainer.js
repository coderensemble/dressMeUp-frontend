import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Dimensions } from "react-native";
import { LeftArrowCircle, Undo } from "./Pictos";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function TopContainerCreateClothe() {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pictoHeader}>
          <TouchableOpacity>
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
          <TouchableOpacity>
            <LeftArrowCircle />
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
            <LeftArrowCircle />
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
            <LeftArrowCircle />
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
            <LeftArrowCircle />
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
            <LeftArrowCircle />
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
    <View style={styles.headerOverviewMainContainer}>
      <View style={styles.headerOverviewContainer}>
        <View style={styles.doublePictoHeader}>
          <TouchableOpacity>
            <LeftArrowCircle />
          </TouchableOpacity>
          <TouchableOpacity>
            <Undo />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.topText}>Ma tenue</Text>
        </View>
      </View>
    </View>
  );
}

export {
  TopContainerCreateClothe,
  TopContainerPicto,
  TopContainerListingTop,
  TopContainerListingAccessories,
  TopContainerListingShoes,
  TopContainerListingBottom,
  TopContainerOverviewOutfit,
};

const styles = StyleSheet.create({
  headerMainContainer: {
    width: "90%",
  },
  pictoHeader: {
    alignSelf: "center",
  },
  doublePictoRow: {
    flexDirection: "row",
    columnGap: 5,
  },
  doublePictoHeader: {
    alignItems: "center",
    flexDirection: "row",
    columnGap: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  headerContainerPicto : {
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
