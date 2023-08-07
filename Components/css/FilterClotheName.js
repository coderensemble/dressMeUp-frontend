import { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { setName } from "../../reducers/clothes";
import { SmallPlusCircle } from "./Pictos";

function FilterClotheName() {
  const dispatch = useDispatch()
  const clotheName = useSelector((state) => state.clothes.temporaryClothe.name)


  const [customName, setCustomName] = useState("")

  const resetName = () => {
    setCustomName('')
  }


  return (
    <View style={styles.filtersContainer}>
      <View style={styles.brandInputRow} >
        <TextInput onChangeText={(value) => setCustomName(value)} value={customName}
          placeholder={clotheName}
          style={styles.input}
        />
        <TouchableOpacity style={styles.addBrandToStore} onPress={() => { dispatch(setName(customName)), resetName() }} >
          <SmallPlusCircle />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export { FilterClotheName };

const styles = StyleSheet.create({
  filtersContainer: {
    width: windowWidth * 0.9,
    alignContent: "center",
    marginTop: 20
  },
  filterTitle: {
    fontSize: 18,
    fontFamily: "Lora-SemiBoldItalic",
    paddingBottom: 15,
    textAlign: "center",
  },
  brandInputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: windowWidth * 0.9,
    padding: 5,
    borderWidth: 1.5,
    fontSize: 16,
    borderRadius: 10,
    borderColor: "#6B9080",
    backgroundColor: "#fff",
  },
  input: {
    width: windowWidth * 0.75,
  },
  addBrandToStore: {
    width: windowWidth * 0.1,
  },
});
