import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import { Dimensions } from "react-native";
import { EventParty, EventSport, EventCasual, EventWork } from "./Pictos";
import { useSelector } from "react-redux";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const tops = ["Chemise", "Manteau", "Pull", "Robe", "T-shirt", "Veste"];
const bottoms = ["Chino", "Jean", "Jupe", "Jogging", "Pantacourt", "Pantalon", "Short"];
const shoes = ["Ballerines", "Basket", "Bottes", "Bottines", "Escarpins", "Mocassins", "Sandales"];
const accessories = ["Bijoux", "Bonnet", "Casquette", "Ceinture", "Chapeau", "Collant", "Echarpe", "Lunettes", "Montre"];

function FilterSubTypeTop({handleSubtypeInput}) {

  const subtype = useSelector((state) => state.clothes.temporaryClothe.subtype)


  return (
    <View style={styles.filtersContainer}>
      <Text style={styles.filterTitle}>De quel type de haut s’agit-il ? *</Text>
      <View style={styles.filterContainer}>
        {tops.map((top, index) => (
          <TouchableOpacity key={index} onPress={() => handleSubtypeInput(tops[index])}>
          <View style={tops[index] === subtype ? styles.filterButtonClicked: styles.filterButton}>
            <Text style={tops[index] === subtype ? styles.filterTextClicked: styles.filterText}>{top}</Text>
          </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

function FilterSubTypeBottom({handleSubtypeInput}) {

  const subtype = useSelector((state) => state.clothes.temporaryClothe.subtype)


  return (
    <View style={styles.filtersContainer}>
      <Text style={styles.filterTitle}>De quel type de bas s’agit-il ? *</Text>
      <View style={styles.filterContainer}>
        {bottoms.map((bottom, index) => (
          <TouchableOpacity key={index} onPress={() => handleSubtypeInput(bottoms[index])}>
          <View style={bottoms[index] === subtype ? styles.filterButtonClicked : styles.filterButton}>
            <Text style={bottoms[index] === subtype ? styles.filterTextClicked: styles.filterText}>{bottom}</Text>
          </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

function FilterSubTypeShoes({handleSubtypeInput}) {

  const subtype = useSelector((state) => state.clothes.temporaryClothe.subtype)

  return (
    <View style={styles.filtersContainer}>
      <Text style={styles.filterTitle}>De quel type de chaussures s’agit-il ? *</Text>
      <View style={styles.filterContainer}>
        {shoes.map((shoe, index) => (
          <TouchableOpacity key={index} onPress={() => handleSubtypeInput(shoes[index])}>
          <View style={shoes[index] === subtype ? styles.filterButtonClicked : styles.filterButton}>
            <Text style={shoes[index] === subtype ? styles.filterTextClicked: styles.filterText}>{shoe}</Text>
          </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

function FilterSubTypeAccessories({handleSubtypeInput}) {

  const subtype = useSelector((state) => state.clothes.temporaryClothe.subtype)

  return (
    <View style={styles.filtersContainer}>
      <Text style={styles.filterTitle}>De quel type d'accessoire s’agit-il ? *</Text>
      <View style={styles.filterContainer}>
        {accessories.map((accessorie, index) => (
          <TouchableOpacity key={index} onPress={() => handleSubtypeInput(accessories[index])}>
          <View style={accessories[index] === subtype ? styles.filterButtonClicked : styles.filterButton}>
            <Text style={accessories[index] === subtype ? styles.filterTextClicked: styles.filterText}>{accessorie}</Text>
          </View>
          </TouchableOpacity>
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
