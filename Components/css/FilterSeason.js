import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import { Dimensions } from "react-native";
import { Spring, Summer, Autumn, Winter } from "./Pictos";

function FilterSeason() {
  const seasons = [
    { Picto: <Spring />, Text: "Printemps" },
    { Picto: <Summer />, Text: "Été" },
    { Picto: <Autumn />, Text: "Automne" },
    { Picto: <Winter />, Text: "Hiver" },
  ];

  return (
    <View style={styles.seasonContainer}>
      <Text style={styles.filtersSeasonTitle}>Pour quelle(s) saison(s) ? *</Text>
      <View style={styles.filtersSeasonContainer}>
      {seasons.map((season, index) => (
        <View key={index} style={styles.filterSeasonContainer}>
          <View style={styles.pictoEvent}>{season.Picto}</View>
          <View>
            <Text style={styles.cardSeasonText}>{season.Text}</Text>
          </View>
        </View>
      ))}
      </View>
    </View>
  );
}

export { FilterSeason };

const styles = StyleSheet.create({

  seasonContainer :{
    width: "90%",
    height: "20%",
  },
  filtersSeasonContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    width : "100%",
    columnGap: "5%",
    justifyContent: "center",
  },
  filterSeasonContainer: {
    borderWidth: 1,
    borderColor : '#6B9080',
    width: "20%",
    height : "70%",
    borderRadius: 10,
    backgroundColor: "#EAF4F4",
    alignContent: "center",
    justifyContent: "space-around",
  },
  cardSeasonText: {
    textAlign: "center",
    fontFamily: "Lora-SemiBold",
    fontSize: 12,
    color: "#6B9080",
  },
  pictoEvent: {
    alignItems: "center",
  },
  filtersSeasonTitle : {
    fontSize: 18,
    fontFamily : "Lora-SemiBoldItalic",
    paddingBottom : 15,
    textAlign: "center",
  },
});
