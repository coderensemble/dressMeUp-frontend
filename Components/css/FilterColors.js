import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

function FilterColors() {
  const colors = [
    { name: "black", hexa: "#000000" },
    { name: "brown", hexa: "#A52A2A" },
    { name: "beige", hexa: "#D4BE8D" },
    { name: "grey", hexa: "#808080" },
    { name: "white", hexa: "#FFFFFF" },
    { name: "blue", hexa: "#0000FF" },
    { name: "green", hexa: "#008000" },
    { name: "yellow", hexa: "#FFFF00" },
    { name: "orange", hexa: "#FFA500" },
    { name: "red", hexa: "#FF0000" },
    { name: "pink", hexa: "#F563B9" },
    { name: "purple", hexa: "#800080" },
    { name: "gold", hexa: "#FFD700" },
    { name: "silver", hexa: "#C0C0C0" },
  ];

  return (
    <View>
      <Text style={styles.filterTitle}>Quelle est sa couleur ? *</Text>
      <View style={styles.colorsContainer}>
        {colors.map((color, index) => (
          <View
            key={index}
            name={color.name}
            style={[styles.colorRound, { backgroundColor: color.hexa }]}
          />
        ))}
      </View>
    </View>
  );
}

function FilterColorsClicked() {
  const colors = [
    { name: "black", hexa: "#000000" },
    { name: "brown", hexa: "#A52A2A" },
    { name: "beige", hexa: "#D4BE8D" },
    { name: "grey", hexa: "#808080" },
    { name: "white", hexa: "#FFFFFF" },
    { name: "blue", hexa: "#0000FF" },
    { name: "green", hexa: "#008000" },
    { name: "yellow", hexa: "#FFFF00" },
    { name: "orange", hexa: "#FFA500" },
    { name: "red", hexa: "#FF0000" },
    { name: "pink", hexa: "#F563B9" },
    { name: "purple", hexa: "#800080" },
    { name: "gold", hexa: "#FFD700" },
    { name: "silver", hexa: "#C0C0C0" },
  ];

  return (
    <View>
      <Text style={styles.filterTitle}>Quelle est sa couleur ? *</Text>
      <View style={styles.colorsContainer}>
      {colors.map((color, index) => (
        <View
          key={index}
          name={color.name}
          style={[styles.colorRoundClicked, { backgroundColor: color.hexa }]}
        />
      ))}
    </View>
    </View>
  );
}

export { FilterColors, FilterColorsClicked };

const styles = StyleSheet.create({
  colorsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    width: "90%",
    rowGap: 20,
    columnGap: 10,
  },
  colorRound: {
    height: 35,
    width: 35,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
  colorRoundClicked: {
    height: 35,
    width: 35,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderColor: "#5A796B",
    borderWidth: 1,
  },
  filterTitle: {
    fontSize: 18,
    fontFamily: "Lora-SemiBoldItalic",
    paddingBottom: 15,
    textAlign: "center",
  },
});
