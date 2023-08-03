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

const top = ["T-shirt", "Chemise", "Pull", "Veste", "Manteau", "Robe"];
const bottom = ["Pantalon", "Short", "Jupe", "Pantacourt", "Jean", "Chino"];
const shoes = ["Basket","Mocassins","Escarpins","Bottes","Bottines","Ballerines","Sandales"];
const accessories = ["Bonnet","Chapeau","Casquette","Ceinture","Collant","Ceinture","Bijoux","Lunettes"];

function FilterSubTypeTop() {
  return (
    <View style={styles.filtersContainer}>
      <Text style={styles.filterTitle}>De quel type de haut s’agit-il ? *</Text>
      <View style={styles.filterContainer}>
        {top.map((top, index) => (
          <View key={index} style={styles.filterButtonClicked}>
            <Text style={styles.filterTextClicked}>{top}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function FilterSubTypeBottom() {
  return (
    <View style={styles.filtersContainer}>
      <Text style={styles.filterTitle}>De quel type de bas s’agit-il ? *</Text>
      <View style={styles.filterContainer}>
        {bottom.map((bottom, index) => (
          <View key={index} style={styles.filterButton}>
            <Text style={styles.filterText}>{bottom}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function FilterSubTypeShoes() {
  return (
    <View style={styles.filtersContainer}>
      <Text style={styles.filterTitle}>De quel type de chaussures s’agit-il ? *</Text>
      <View style={styles.filterContainer}>
        {shoes.map((haut, index) => (
          <View key={index} style={styles.filterButton}>
            <Text style={styles.filterText}>{haut}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function FilterSubTypeAccessories() {
  return (
    <View style={styles.filtersContainer}>
      <Text style={styles.filterTitle}>De quel type d'accessoire s’agit-il ? *</Text>
      <View style={styles.filterContainer}>
        {accessories.map((accessories, index) => (
          <View key={index} style={styles.filterButton}>
            <Text style={styles.filterText}>{accessories}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export { FilterSubTypeTop, FilterSubTypeBottom, FilterSubTypeShoes, FilterSubTypeAccessories };

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
