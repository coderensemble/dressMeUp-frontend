import {
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
    Text,
  } from "react-native";
  
  import { Dimensions } from "react-native";  
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  
  function FilterBrand() {
    return (
      <View style={styles.filtersContainer}>
        <Text style={styles.filterTitle}>Quelle est sa marque ?</Text>
        <TextInput
        placeholder="Renseignez la marque de votre vêtement"
        style={styles.input}
      />
      </View>
    );
  }

  export { FilterBrand };
  
  const styles = StyleSheet.create({
    filtersContainer: {
      width: windowWidth * 0.9,
      alignContent: "center",
      marginTop: 20
    },
    filterTitle: {
      fontSize: 18,
      fontFamily : "Lora-SemiBoldItalic",
      paddingBottom : 15,
      textAlign: "center",
    },
    input: {
        width: windowWidth * 0.9,
        padding: 10,
        borderWidth: 1.5,
        fontSize: 16,
        borderRadius: 10,
        borderColor: "#6B9080",
        backgroundColor: "#fff",
      },
  });
  