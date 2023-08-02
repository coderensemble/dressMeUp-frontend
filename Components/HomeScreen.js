import {KeyboardAvoidingView, Text, View} from 'react-native'


export default function HomeScreen() {
return(
    <KeyboardAvoidingView>
        <Text>Hello Nico&Michel</Text>
        <View><Text>Mes vêtements</Text></View>
        <View><Text>Mes tenues</Text></View>
        <View><Text>Mes tenues favorites</Text></View>
    </KeyboardAvoidingView>
)
}