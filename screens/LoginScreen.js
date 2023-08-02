import { KeyboardAvoidingView } from "react-native";
import Signin from "../Components/functionalcomponents/Signin"

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView>
      <Signin />
    </KeyboardAvoidingView>
  );
}
