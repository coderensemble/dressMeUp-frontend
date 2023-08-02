import Signin from "../Components/functional components/Signin";
import { SafeAreaView, StyleSheet } from "react-native";

export default function LoginScreen() {
  return (
    <SafeAreaView  style={styles.mainContainer}>
      <Signin />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
mainContainer: {
  flex: 1,
  backgroundColor: "#F6FFF8",
  alignItems: "center",
  justifyContent: "center",
},
});