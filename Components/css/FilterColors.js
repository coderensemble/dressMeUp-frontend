import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { useSelector } from "react-redux";

function FilterColors({handleColorSelect}) {

  const colorState = useSelector((state) => state.clothes.temporaryClothe.color)

  const [colorsState, setColorsState] = useState([
    { isClicked: false }, // black
    { isClicked: false }, // brown
    { isClicked: false }, // beige
    { isClicked: false }, // grey
    { isClicked: false }, // white
    { isClicked: false }, // blue
    { isClicked: false }, // green
    { isClicked: false }, // yellow
    { isClicked: false }, // Soirée
    { isClicked: false }, // orange
    { isClicked: false }, // red
    { isClicked: false }, // pink
    { isClicked: false }, // purple
    { isClicked: false }, // gold
    { isClicked: false }, // silver
  ]);

  const colors = [
    { name: "black", translate: "noir" , hexa: "#000000" },
    { name: "brown", translate: "marron" , hexa: "#A52A2A" },
    { name: "beige", translate: "beige" , hexa: "#D4BE8D" },
    { name: "grey", translate: "gris" , hexa: "#808080" },
    { name: "white", translate: "blanc" , hexa: "#FFFFFF" },
    { name: "blue", translate: "bleu" , hexa: "#0000FF" },
    { name: "green", translate: "vert" , hexa: "#008000" },
    { name: "yellow", translate: "jaune" , hexa: "#FFFF00" },
    { name: "orange", translate: "orange" , hexa: "#FFA500" },
    { name: "red", translate: "rouge" , hexa: "#FF0000" },
    { name: "pink", translate: "rose" , hexa: "#F563B9" },
    { name: "purple", translate: "violet" , hexa: "#800080" },
    { name: "gold", translate: "en or" , hexa: "#FFD700" },
    { name: "silver", translate: "en argent" , hexa: "#C0C0C0" },
  ];

  const handlePress = (index) => {
    const updatedColorStates = [...colorsState];
    updatedColorStates.map((color, index) =>{
      updatedColorStates[index].isClicked = false
    })
    updatedColorStates[index].isClicked = !updatedColorStates[index].isClicked;
    setColorsState(updatedColorStates);
  };

  return (
    <View>
      <Text style={styles.filterTitle}>Quelle est la couleur ? *</Text>
      <View style={styles.colorsContainer}>

        {colors.map((color, index) => (
          <TouchableOpacity key={index} onPress={() => {handleColorSelect(color), handlePress(index)}}
          style={colorsState[index].isClicked ?[styles.colorRoundClicked, { backgroundColor: color.hexa }]: [styles.colorRound, { backgroundColor: color.hexa }] }
          >
          <View
            name={color.name}
            style={colorsState[index].isClicked ?[styles.colorRoundClicked, { backgroundColor: color.hexa }]: [styles.colorRound, { backgroundColor: color.hexa }] }>
          </View>
          </TouchableOpacity> 
        ))}
        </View>

    </View>
  );
}


export { FilterColors };

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
    shadowRadius: 5,
    elevation: 5,
    borderColor: "#5A796B",
    borderWidth: 0.2,
  },
  filterTitle: {
    fontSize: 18,
    fontFamily: "Lora-SemiBoldItalic",
    paddingBottom: 15,
    textAlign: "center",
  },
});
