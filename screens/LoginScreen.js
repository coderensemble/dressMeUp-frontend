import { SafeAreaView, StyleSheet } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import Signin from "../Components/functionalcomponents/Signin"

export default function LoginScreen() {
  return (
    <SafeAreaView>
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