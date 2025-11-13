// Correspond à 2A-E sur Figma

import React, { useState } from "react";
import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TopContainerPicto } from "../../Components/css/TopContainer";
import { ButtonImport, ButtonNextStep } from "../../Components/css/ButtonGreenLight";
import { TextInput, Platform } from "react-native";
import { CameraPicto } from "../../Components/css/Pictos";
import { FilterClotheName } from "../../Components/css/FilterClotheName";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";

import { CLOUDINARY_URL } from "@env";
//import { LOCAL_BACKEND_URL } from '@env';

import { setImage } from "../../reducers/clothes";
import { useDispatch } from "react-redux";

const windowWidth = Dimensions.get("window").width;

function CreateClotheE({ navigation }) {
  const dispatch = useDispatch();

  const [takingPicture, setTakingPicture] = useState(false);
  const [picture, setPicture] = useState(null);

  const handleTopSubmit = () => {
    navigation.navigate("CreateClotheF", { imageUrl: picture });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handlePictureClick = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status === "granted") {
      setTakingPicture(true);
      console.log(status);
      navigation.navigate("SnapScreen");
    } else {
      console.log(status);
    }
  };

  const handlePictureImport = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      return alert("Permission denied");
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    console.log(result);
    if (result.canceled) return;

    const compressedImage = await ImageManipulator.manipulateAsync(
      result.assets[0].uri,
      [{ resize: { width: 300, height: 300 } }],
      { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
    );

    const formData = new FormData();
    formData.append("file", {
      uri: compressedImage.uri,
      name: "photo.jpg",
      type: "image/jpeg",
    });
    formData.append("upload_preset", "DressMeUp");

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/dzo6gbcho/image/upload", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`Cloudinary error: ${response.status}`);
      }
      const data = await response.json();
      console.log("Cloudinary response:", data);

      if (!data.secure_url) {
        throw new Error("L'image n'a pas été uploadée correctement");
      }

      // Met à jour Redux
      dispatch(setImage(data.secure_url));

      // Navigue seulement après que l'image soit uploadée
      navigation.navigate("CreateClotheF", { imageUrl: data.secure_url });
    } catch (error) {
      console.error("Upload error:", error);
      alert("Erreur lors de l'upload de l'image");
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <SafeAreaView style={styles.mainContainer}>
        <View>
          <TopContainerPicto handleGoBack={handleGoBack} />
          <View style={styles.subContainer}>
            <Text style={styles.textTitle}>Finalisez votre habit</Text>
            <View style={styles.filtersContainer}>
              <Text style={styles.filterTitle}>Donnez un nom à votre vêtement</Text>
              <FilterClotheName />
            </View>
            <TouchableOpacity onPress={handlePictureClick}>
              <View style={styles.pictureContainer}>
                <CameraPicto />
              </View>
            </TouchableOpacity>
            <ButtonImport handlePictureImport={handlePictureImport} />
            <View style={styles.tipsContainer}>
              <Text style={styles.tipTitle}>Astuces</Text>
              <Text style={styles.tip}>
                Photographiez votre vêtement sur un fond clair pour un meilleur rendu. N’hésitez pas également à
                utiliser la fonction de détourage si vous êtes sur iOS !
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F6FFF8",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  subContainer: {
    alignItems: "center",
  },
  textTitle: {
    fontFamily: "Lora-SemiBoldItalic",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  textSubtitle: {
    width: windowWidth * 0.7,
    marginBottom: 20,
  },
  filterText: {
    fontFamily: "Lora-SemiBoldItalic",
    fontSize: 18,
  },

  filtersContainer: {
    width: windowWidth * 0.9,
    alignContent: "center",
    marginTop: 20,
  },
  filterTitle: {
    fontSize: 18,
    fontFamily: "Lora-SemiBoldItalic",
    paddingBottom: 15,
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
  pictureContainer: {
    width: 300,
    height: 300,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6B9080",
  },
  tipsContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.9,
  },
  tipTitle: {
    fontFamily: "Lora-SemiBoldItalic",
    fontSize: 18,
    marginTop: 30,
    marginBottom: 30,
  },
  tip: {
    fontFamily: "Lora-Regular",
    textAlign: "center",
  },
});

export default CreateClotheE;
