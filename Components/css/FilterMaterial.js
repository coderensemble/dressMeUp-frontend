import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import { Dimensions } from "react-native";
import { EventParty, EventSport, EventCasual, EventWork } from "./Pictos";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const topMatiere = ["Coton", "Cuir", "Laine", "Lin", "Dentelle", "Soie", "Velours", "Autres"];
const bottomMatiere = ["Coton", "Cuir", "Denim", "Lin", "Dentelle", "Soie", "Velours", "Autres"];
const shoesMatiere = ["Caoutchouc","Plastique", "Cuir","Textile","Cork"];

// coton, cuir, laine, lin, polyester, denim, toile, dentelle, soie, cachemire

function FilterMaterialTop() {
  return (
    <View style={styles.filtersContainer}>
      <Text style={styles.filterTitle}>En quelle matière est votre habit ?</Text>
      <View style={styles.filterContainer}>
        {topMatiere.map((top, index) => (
          <View key={index} style={styles.filterButtonClicked}>
            <Text style={styles.filterTextClicked}>{top}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function FilterMaterialBottom() {
  return (
    <View style={styles.filtersContainer}>
      <Text style={styles.filterTitle}>De quel type de bas s’agit-il ? *</Text>
      <View style={styles.filterContainer}>
        {bottomMatiere.map((bottom, index) => (
          <View key={index} style={styles.filterButton}>
            <Text style={styles.filterText}>{bottom}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function FilterMaterialShoes() {
  return (
    <View style={styles.filtersContainer}>
      <Text style={styles.filterTitle}>De quel type de chaussures s’agit-il ? *</Text>
      <View style={styles.filterContainer}>
        {shoesMatiere.map((haut, index) => (
          <View key={index} style={styles.filterButton}>
            <Text style={styles.filterText}>{haut}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export { FilterMaterialTop, FilterMaterialBottom, FilterMaterialShoes };

const styles = StyleSheet.create({
  filtersContainer: {
    width: windowWidth * 0.9,
    alignContent: "center",
    paddingBottom : 20,
  },
  filterTitle: {
    fontSize: 18,
    fontFamily : "Lora-SemiBoldItalic",
    paddingBottom : 15,
    textAlign: "center",
  },
  filterContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    rowGap: 5,
    columnGap: 7,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#6B9080",
    borderWidth: 1,
    borderRadius: 20,
  },
  filterText: {
    fontSize: 12,
    fontFamily: "Lora-Medium",
    color: "#6B9080",
  },
  filterButtonClicked: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#6B9080",
    borderColor: "#6B9080",
    borderWidth: 1,
    borderRadius: 20,
  },
  filterTextClicked: {
    fontSize: 12,
    fontFamily: "Lora-Medium",
    color: "white",
  },
});