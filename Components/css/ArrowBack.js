import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { LeftArrowCircle } from "./Pictos";

export default function ArrowBack() {
    return (
        <View>
            <View style={styles.headerContainer}>
                <View style={styles.pictoHeader}>
                    <TouchableOpacity>
                        <LeftArrowCircle />
                    </TouchableOpacity>
                </View>
                <View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pictoHeader:{
        alignSelf: "center",
      },
      headerContainer: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
      },
});