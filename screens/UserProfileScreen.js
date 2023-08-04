import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Text, TouchableOpacity } from "react-native";
import { logout } from "../reducers/user";
import { useDispatch } from "react-redux";
import { Dimensions } from "react-native";
import { Edit, PlusCircle } from "../Components/css/Pictos";
import { AccountTopContainer } from "../Components/css/TopContainer";
import CustomPopup from "../Components/functionalcomponents/CustomPopup";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Setting({navigation}) {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleDeleteAccount = () => {
    // Ajoutez ici le code pour supprimer le compte de l'utilisateur
    // ...
    closePopup(); // Ferme le popup après la suppression
  };

  const handleGoBack = () => {
    navigation.goBack();
};

  return(
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <KeyboardAvoidingView>
          <View style={styles.headContainer}>
            <AccountTopContainer handleGoBack={handleGoBack}/>
          </View>

          <View style={styles.middlePart}>
            <View style={styles.circlePlusCircle}>
              <View style={styles.circle}></View>

              <TouchableOpacity style={styles.buttonPlus}>
                <PlusCircle />
              </TouchableOpacity>
            </View>

            <View style={styles.input}>
              <Text style={styles.inputTitle}>Mon pseudo</Text>
              <Text style={styles.info}></Text>
              <TouchableOpacity style={styles.edit}>
                <Edit />
              </TouchableOpacity>
            </View>
            <View style={styles.input}>
              <Text style={styles.inputTitle}>Mon email</Text>
              <Text style={styles.info}></Text>
              <TouchableOpacity style={styles.edit}>
                <Edit />
              </TouchableOpacity>
            </View>
            <View style={styles.input}>
              <Text style={styles.inputTitle}>Mon mot de passe</Text>
              <Text style={styles.info}></Text>
              <TouchableOpacity style={styles.edit}>
                <Edit />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomView}>
            <TouchableOpacity style={styles.buttonGreen} activeOpacity={0.8} onPress={openPopup}>
              <Text style={styles.button}>Supprimer mon compte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonGreen} activeOpacity={0.8} onPress={() => dispatch(logout())}>
              <Text style={styles.button}>Se déconnecter</Text>
            </TouchableOpacity>
          </View>

          {/* Affiche le popup */}
          <CustomPopup isVisible={showPopup} onClose={closePopup} onDelete={handleDeleteAccount} />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
  },

  mainContainer: {
    backgroundColor: "#F6FFF8",
    justifyContent: "center",
    height: "100%",
    paddingTop: 20, // Ajoute un espacement en haut de l'écran
  },
  headContainer: {
    textAlign: "center",
    alignItems: "center",
  },

  middlePart: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "12%",
  },

  circlePlusCircle: {
    marginBottom: "20%",
  },
  circle: {
    backgroundColor: "#D9D9D9",
    width: windowWidth * 0.4, // Utilisez des pourcentages pour définir la largeur du cercle
    height: windowWidth * 0.4, // Utilisez des pourcentages pour définir la hauteur du cercle
    borderRadius: (windowWidth * 0.4) / 2,
  },
  buttonPlus: {
    alignItems: "center",
    flexBasis: "10%",
    top: "-15%",
    left: "15%",
  },
  input: {
    bottom: "15%",
  },

  inputTitle: {
    fontFamily: "Lora-SemiBold",
    fontSize: 20,
    color: "black",
    textAlign: "center",
    alignItems: "center",
    padding: 5,
  },

  edit: {
    left: "83%",
    top: -30,
  },

  info: {
    width: windowWidth * 0.9,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 5,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    textAlign: "center",
    fontFamily: "Lora-Regular",
    fontSize: 20,
  },

  bottomView: {
    textAlign: "center",
    alignItems: "center",
    bottom: "5%",
  },

  buttonGreen: {
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.9,
    backgroundColor: "#A4C3B2",
    padding: 12,
    borderRadius: 10,
    margin: 10,
    bottom: "5%",
  },
  button: {
    fontFamily: "Lora-SemiBold",
  },
});
