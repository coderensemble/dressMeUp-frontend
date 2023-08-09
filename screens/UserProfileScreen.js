import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { login, logout, setPhoto, setUsername, setEmail } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { Dimensions } from "react-native";
import { Edit, PlusCircle } from "../Components/css/Pictos";
import { AccountTopContainer } from "../Components/css/TopContainer";
import CustomPopup from "../Components/functionalcomponents/CustomPopup";
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera, CameraType } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Setting({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  console.log("Username:", user.username);
  console.log("email:", user.email);

  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const [isUsernameInputVisible, setIsUsernameInputVisible] = useState(false);
  const [isEmailInputVisible, setIsEmailInputVisible] = useState(false);
  const photoURL = useSelector((state) => state.user.value.photoURL);

  const [showPopup, setShowPopup] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [cameraType, setCameraType] = useState(CameraType.front);
  const isFocused = useIsFocused();
  let cameraRef = useRef(null);

  // console.log("Valeur de photoURL :", state.value.photoURL);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (!hasPermission || !isFocused) {
    return <View></View>;
  }

  //console.log(user.token, "user.token")

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync({ quality: 0.3 });
      const formData = new FormData();

      formData.append("photoFromFront", {
        uri: photo.uri,
        name: "photo.jpg",
        type: "image/jpeg",
      });

      //console.log("Selfie:", photo.uri);
      setIsCameraVisible(false);

      fetch(`http://10.0.1.111:3000/users/upload/${user.token}`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data)
          data.result && dispatch(user.photoURL);
        });
    }
  };

  const openCamera = () => {
    setIsCameraVisible(true);
  };

  const openPopup = () => {
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };
  const handleDeleteAccount = () => {
    closePopup();
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleNewEmailInput = () => {
    setIsEmailInputVisible(true);
  };

  // const handleNewEmailSave = () => {
  //   setIsEmailInputVisible(false);
  // };

  const handleConfirmEmailChange = () => {
    // handleNewEmailSave();
    if (newEmail && newEmail.trim() !== "") {
      fetch("http://10.0.1.111:3000/users", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          replacementEmail: newEmail,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          dispatch(setEmail(newEmail));
          setIsEmailInputVisible(false);
        });
    }
  };

  const handleNewUsernameInput = () => {
    setIsUsernameInputVisible(true);
  };

  const handleNewUsernameSave = () => {
    setIsUsernameInputVisible(false);
    setNewUsername(newUsername);
  };

  const handleConfirmUsernameChange = () => {
    handleNewUsernameSave();
    if (newUsername && newUsername.trim() !== "") {
      fetch("http://10.0.1.111:3000/users", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          replacementUsername: newUsername,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(setUsername(newUsername));
          //console.log(data);
        });
    } else {
      console.log("Le nom d'utilisateur ne peut pas être vide.");
    }
  };

  const handleConnection = () => {
    navigation.navigate("LoginScreen");
  };

  console.log(photoURL, "test");

  if (isCameraVisible) {
    return (
      <Camera style={styles.takePict} type={cameraType} ref={(ref) => (cameraRef = ref)}>
        <TouchableOpacity onPress={() => cameraRef && takePicture()}>
          <PlusCircle />
        </TouchableOpacity>
      </Camera>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <KeyboardAvoidingView>
          <View style={styles.headContainer}>
            <AccountTopContainer handleGoBack={handleGoBack} />
          </View>

          <View style={styles.middlePart}>
            <View style={styles.circlePlusCircle}>
              <View style={styles.circle}>
                {photoURL ? (
                  <Image
                    source={user.photoURL}
                    style={{ width: "100%", height: "100%", borderRadius: (windowWidth * 0.4) / 2 }}
                  />
                ) : (
                  <Text>Votre photo</Text>
                )}
              </View>

              <TouchableOpacity style={styles.buttonPlus} onPress={openCamera}>
                <PlusCircle />
              </TouchableOpacity>
            </View>

            <View style={styles.input}>
              <Text style={styles.inputTitle}>Mon pseudo</Text>
              {isUsernameInputVisible ? (
                <TextInput
                  style={styles.info}
                  onChangeText={(value) => setNewUsername(value)}
                  value={newUsername}
                  autoFocus={true}
                  onSubmitEditing={handleNewUsernameSave}
                />
              ) : (
                <Text style={styles.info}>{newUsername || user.username}</Text>
              )}
              {!isUsernameInputVisible && (
                <TouchableOpacity style={styles.edit} onPress={handleNewUsernameInput}>
                  <Edit />
                </TouchableOpacity>
              )}
              {isUsernameInputVisible && (
                <TouchableOpacity style={styles.button} onPress={handleConfirmUsernameChange}>
                  <Text style={styles.buttonText}>Confirmer</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.input}>
              <Text style={styles.inputTitle}>Mon email</Text>
              {isEmailInputVisible ? (
                <TextInput
                  style={styles.info}
                  onChangeText={(value) => setNewEmail(value)}
                  value={newEmail}
                  autoFocus={true}
                  // onSubmitEditing={handleNewEmailSave}
                />
              ) : (
                <Text style={styles.info}>{newEmail || user.email}</Text>
              )}
              {!isEmailInputVisible && (
                <TouchableOpacity style={styles.edit} onPress={handleNewEmailInput}>
                  <Edit />
                </TouchableOpacity>
              )}
              {isEmailInputVisible && (
                <TouchableOpacity style={styles.button} onPress={handleConfirmEmailChange}>
                  <Text style={styles.buttonText}>Confirmer</Text>
                </TouchableOpacity>
              )}
            </View>
            {/* <View style={styles.input}>
              <Text style={styles.inputTitle}>Mon mot de passe</Text>
              <Text style={styles.info}></Text>
              <TouchableOpacity style={styles.edit}>
                <Edit />
              </TouchableOpacity>
            </View> */}
          </View>
          <View style={styles.bottomView}>
            <TouchableOpacity style={styles.buttonGreen} activeOpacity={0.8} onPress={openPopup}>
              <Text style={styles.button}>Supprimer mon compte</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonGreen}
              activeOpacity={0.8}
              onPress={() => {
                handleConnection(), dispatch(logout());
              }}>
              <Text style={styles.button}>Se déconnecter</Text>
            </TouchableOpacity>
          </View>

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
  takePict: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: "20%",
  },
});
