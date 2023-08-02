import { KeyboardAvoidingView } from "react-native";
import Signin from "../Components/functionalcomponents/Signin"

export default function HomeScreen() {
  return (
    <KeyboardAvoidingView>
      <Signin />
    </KeyboardAvoidingView>
  );
}
