import { KeyboardAvoidingView } from "react-native";
import Login from "../components/functional components/Login"

export default function HomeScreen() {
  return (
    <KeyboardAvoidingView>
      <Login />
    </KeyboardAvoidingView>
  );
}
