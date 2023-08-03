import React, { useState } from "react";
import { StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Text, View } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Signin() {
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (showSignup) {
      fetch("http://10.0.1.111:3000/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, email: email, password: password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            setUsername("");
            setEmail("");
            setPassword("");
          }
        });
    } else {
      fetch("http://10.0.1.111:3000/users/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            setUsername("");
            setPassword("");
          }
        });
    }
  };

  const handleToggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <View style={styles.modalGrey}>
        <View style={styles.imputContainer}>
          <Text style={styles.title}>{showSignup ? "Inscription" : "Connexion"}</Text>
          <Text style={styles.textContent}>Pour créer le dressing de ses rêves!</Text>
          <TextInput
            placeholder="Identifiant"
            autoCapitalize="none" // https://reactnative.dev/docs/textinput#autocapitalize
            keyboardType="default" // https://reactnative.dev/docs/textinput#keyboardtype
            textContentType="username" // https://reactnative.dev/docs/textinput#textcontenttype-ios
            autoComplete="username" // https://reactnative.dev/docs/textinput#autocomplete-android
            onChangeText={(value) => setUsername(value)}
            value={username}
            style={styles.input}
          />
          {showSignup && (
            <TextInput
              placeholder="Email"
              autoCapitalize="none" // https://reactnative.dev/docs/textinput#autocapitalize
              keyboardType="email-address" // https://reactnative.dev/docs/textinput#keyboardtype
              textContentType="emailAddress" // https://reactnative.dev/docs/textinput#textcontenttype-ios
              autoComplete="email" // https://reactnative.dev/docs/textinput#autocomplete-android
              onChangeText={(value) => setEmail(value)}
              value={email}
              style={styles.input}
            />
          )}
          <TextInput
            placeholder="Mot de passe"
            autoCapitalize="none" // https://reactnative.dev/docs/textinput#autocapitalize
            keyboardType="default" // https://reactnative.dev/docs/textinput#keyboardtype
            textContentType="password" // https://reactnative.dev/docs/textinput#textcontenttype-ios
            // autoComplete="current-password" // https://reactnative.dev/docs/textinput#autocomplete-android
            onChangeText={(value) => setPassword(value)}
            value={password}
            style={styles.input}
          />

          <TouchableOpacity style={styles.buttonGreen} onPress={() => handleSubmit()} activeOpacity={0.8}>
            <Text style={styles.textLink}>{showSignup ? "S'inscrire" : "Se connecter"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.textBottom}>{showSignup ? "Déjà un compte?" : "Pas encore de compte?"}</Text>
          <TouchableOpacity onPress={() => handleToggleSignup()} activeOpacity={0.8}>
            <Text style={styles.textLink}>{showSignup ? "Connexion" : "Inscription"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#6B9080",
    alignItems: "center",
    justifyContent: "center",
  },
  modalGrey: {
    paddingTop: 20,
    height: windowHeight * 0.77,
    backgroundColor: "#EAF4F4",
    width: "50%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "flex-start",
    rowGap: 10,
  },

  imputContainer: {
    position: "relative",
    bottom: "5%", // Alignement en bas de l'écran
    left: 0, // Vous pouvez ajuster cette valeur si nécessaire
    right: 0, // Vous pouvez ajuster cette valeur si nécessaire
    alignItems: "center",
    padding: "10%",
  },
  input: {
    width: windowWidth * 0.9,
    padding: 10,
    borderWidth: 1.5,
    fontSize: 16,
    borderRadius: 10,
    borderColor: "#6B9080",
    backgroundColor: "#fff",
    margin: 10,
  },

  buttonGreen: {
    width: windowWidth * 0.9,
    alignItems: "center",
    backgroundColor: "#A4C3B2",
    padding: 12,
    borderRadius: 10,
  },

  title: {
    fontFamily: "Lora-Bold",
    fontSize: 20,
    color: "black",
    textAlign: "left",
    padding: "5%",
  },
  viewContainer: {
    position: "absolute",
    bottom: "20%", // Alignement en bas de l'écran
    left: 0, // Vous pouvez ajuster cette valeur si nécessaire
    right: 0, // Vous pouvez ajuster cette valeur si nécessaire
    alignItems: "center",
    padding: "10%",
  },

  textBottom: {
    fontFamily: "Lora-Regular",
  },

  textLink: {
    fontFamily: "Lora-Bold",
  },

  textContent: {
    fontFamily: "Lora-Regular",
    paddingBottom: "5%",
    width: "100%",
  },
});
