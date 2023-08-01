import { KeyboardAvoidingView } from "react-native";
import Login from "../Components/functional components/Signin"

export default function HomeScreen() {
  return (
    <KeyboardAvoidingView>
      <Login />
    </KeyboardAvoidingView>
  );
}
