import { KeyboardAvoidingView, StyleSheet } from "react-native";
import Signin from "../Components/functional components/Signin"

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView>
      <Signin />
    </KeyboardAvoidingView>
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