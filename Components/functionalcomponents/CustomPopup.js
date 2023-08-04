import React, { useState } from "react";
import { logout } from "../../reducers/user";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomPopup = ({ isVisible, onClose, onDelete }) => {
  const [deleteUser, setDeleteUser] = useState(false);

  const clickDeleteButton = () => {
    setDeleteUser(true);
    console.log("tu es suprimé");
  };

  if (!isVisible) return null;

  return (
    <View style={styles.popupContainer}>
      <View style={styles.popupContent}>
        <Text style={styles.textContent}>
          Attention, vous vous apprêtez à supprimer votre compte, cette action est irréversible . Voulez-vous continuer
          ?
        </Text>
        <TouchableOpacity style={styles.deleteButton} onPress={clickDeleteButton}>
          <Text style={styles.textTitle}>Confirmer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={onClose}>
          <Text style={styles.textTitle}>Annuler</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent background
  },
  popupContent: {
    backgroundColor: "#6B9080",
    width: "75%",
    height: "35%",
    borderRadius: 10,
    alignItems: "center",
  },
  textContent: {
    fontFamily: "Lora-Regular",
    color: "white",
    fontSize: 15,
    width: "70%",
    margin: 10,
    top: "10%",
    alignItems: "center",
    textAlign: "center",
  },
  deleteButton: {
    width: "80%",
    marginTop: 10,
    top: "30%",
    backgroundColor: "#A4C3B2",
    padding: 10,
    borderRadius: 5,
  },

  textTitle: {
    fontFamily: "Lora-SemiBold",
    textAlign: "center",
  },
});

export default CustomPopup;
