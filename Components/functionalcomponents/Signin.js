import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../reducers/user";
import { StyleSheet, TextInput, TouchableOpacity, Text, View, Dimensions, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Signin() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  //Redirect to /home if logged in
  const navigation = useNavigation();

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
            dispatch(
              login({
                token: data.token,
                username: data.username,
                password: data.password,
              })
            );
            navigation.navigate("HomeScreen");
          }
        });
    }
  };

  const handleToggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <View>
      <Text style={styles.title}>{showSignup ? "Inscription" : "Connexion"}</Text>
      <Text style={styles.textContent}>Pour créer le dressing de ses rêves!</Text>
      <KeyboardAvoidingView>
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
        onChangeText={(value) => setPassword(value)}
        value={password}
        style={styles.input}
      />
      </KeyboardAvoidingView>

      <TouchableOpacity style={styles.buttonGreen} onPress={() => handleSubmit()} activeOpacity={0.8}>
        <Text style={styles.textButton}>{showSignup ? "S'inscrire" : "Se connecter"}</Text>
      </TouchableOpacity>

      <Text style={styles.textContent}>{showSignup ? "Déjà un compte?" : "Pas encore de compte?"}</Text>

      <TouchableOpacity onPress={() => handleToggleSignup()} activeOpacity={0.8}>
        <Text style={styles.textContent}>{showSignup ? "Connexion" : "Inscription"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: windowWidth * 0.9,
    padding: 10,
    borderWidth: 1.5,
    fontSize: 16,
    borderRadius: 10,
    borderColor: "#6B9080",
    backgroundColor: "#fff",
    margin: 15,
  },

  buttonGreen: {
    width: windowWidth * 0.9,
    alignItems: "center",
    backgroundColor: "#6B9080",
    padding: 12,
    margin: 15,
    borderRadius: 10,
  },

  textButton: {
    fontFamily: "Lora-Bold",
  },

  textContent: {
    fontFamily: "Lora-Regular",
    color: "black",
    textAlign: "center",
    padding: 12,
  },

  title: {
    fontFamily: "Lora-Bold",
    color: "black",
    textAlign: "center",
  },
});