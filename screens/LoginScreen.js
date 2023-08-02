<<<<<<< HEAD
import Signin from "../Components/functional components/Signin";
import { SafeAreaView, StyleSheet } from "react-native";
=======
import { KeyboardAvoidingView } from "react-native";
import Signin from "../Components/functionalcomponents/Signin"
>>>>>>> 5124932cde7f4c0ef50da24fe6b762bb9842676d

export default function LoginScreen() {
  return (
<<<<<<< HEAD
    <SafeAreaView  style={styles.mainContainer}>
      <Signin />
    </SafeAreaView>
=======
    <KeyboardAvoidingView>
      <Signin />
    </KeyboardAvoidingView>
>>>>>>> 5124932cde7f4c0ef50da24fe6b762bb9842676d
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