import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import { Dimensions } from "react-native";
import { EventParty, EventSport, EventCasual, EventWork } from "./Pictos";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function CardEvent() {

  const events = [
    { Picto: <EventParty />, Text: "Soirée" },
    { Picto: <EventSport />, Text: "Sport" },
    { Picto: <EventCasual />, Text: "Casual" },
    { Picto: <EventWork />, Text: "Work" },
  ];

  return (
    <View style={styles.cardsEventContainer}>
    {events.map((event, index) => (
      <View key={index} style={styles.cardEventContainer}>
        <View style={styles.pictoEvent}>{event.Picto}</View>
        <View>
          <Text style={styles.cardEventText}>{event.Text}</Text>
        </View>
      </View>
    ))}
  </View>
  );
}

export { CardEvent };

const styles = StyleSheet.create({
  cardsEventContainer:{
    flexWrap: 'wrap',
    flexDirection: "row",
    justifyContent : "center",
    rowGap : 30,
    columnGap : 10,
    width: windowWidth * 0.9
  },
  cardEventContainer: {
    width: "45%",
    height: windowHeight * 0.3,
    borderRadius: 10,
    backgroundColor: "#CCE3DE",
    alignContent: "center",
    justifyContent: "center",
  },
  cardEventText: {
    paddingTop: 50,
    textAlign: "center",
    fontFamily: "Lora-SemiBold",
    fontSize: 20,
    color: "#6B9080",
  },
  pictoEvent: {
    alignItems: "center",
  },
});
