import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity, Text, Image, SafeAreaView } from "react-native";
import { Dimensions } from "react-native";
import { PlusCircle, Settings } from "../Components/css/Pictos";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function HomeUser() {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.value);
  // console.log(user);

  const handleSettingsPress = () => {
    navigation.navigate("UserProfileScreen");
  };

  const handleCreateClosePress = () =>
{
  navigation.navigate("CreateClotheA");
}
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View >
        <View style={styles.head}>
          <Text style={styles.welcome}>Hello {user.username}</Text>
          <TouchableOpacity activeOpacity={0.5} style={styles.settings} onPress={handleSettingsPress}>
            <Settings />
          </TouchableOpacity>
        </View>
        <View style={styles.cardAddClothesContainer}>
          <Text style={styles.title}>Mes vêtements</Text>
          <View style={styles.cardAddClothes}>
            <Text style={styles.textContent}>Ajoutez votre premier vêtements</Text>
            <TouchableOpacity activeOpacity={0.5}>
              <TouchableOpacity style={styles.buttonPlus} onPress={handleCreateClosePress}>
                <PlusCircle />
              </TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.img}>
              <Image style={styles.image} source={require("../assets/images/Dressing.png")} />
            </View>
          </View>
          <Text style={styles.title}>Mes tenues</Text>
          <View style={styles.cardAddClothes}>
            <Text style={styles.textContent}>Ajoutez au moins deux vêtements pour créer votre première tenue</Text>
            <View style={styles.img2}>
              <Image style={styles.image} source={require("../assets/images/tenue.png")} />
            </View>
          </View>
          <Text style={styles.title}>Mes tenues favorites</Text>
          <View style={styles.cardAddClothes}>
            <Text style={styles.textContent}>Vous n'avez pas encore de tenue favorite</Text>
            <View style={styles.img2}>
              <Image style={styles.image} source={require("../assets/images/fav.png")} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    backgroundColor: "#F6FFF8",
    alignItems: "center",
    justifyContent: "center"
  },

  head: {
    flexDirection: "row",
    justifyContent: "space-between",
  
  },

  settings: {
    paddingTop: 12,
  },

  cardAddClothesContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.846,
    justifyContent: "space-between",
  
  },
  cardAddClothes: {
    width: "100%",
    height: "20%",
    borderRadius: 10,
    backgroundColor: "#CCE3DE",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Lora-Bold",
    color: "black",
    textAlign: "left",
    fontSize: 20,
    top: "5%",
  },

  welcome: {
    fontFamily: "Lora-Bold",
    fontSize: 30,
  },

  textContent: {
    fontFamily: "Lora-Regular",
    fontSize: 15,
    color: "black",
    textAlign: "center",
    alignItems: "center",
    flexBasis: "45%",
    padding: 15,
  },
  buttonPlus: {
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "10%",
    top: "80%",
  },

  image: {
    height: "110%",
    width: "100%",
    bottom: "15%",
    right: "10%",
  },

  img: {
    flex: 0.5,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "20%",
    marginLeft: "10%",
  },

  img2: {
    flex: 0.5,
    flexGrow: 1,
    flexBasis: "20%",
    marginLeft: "20%",
  },
});
