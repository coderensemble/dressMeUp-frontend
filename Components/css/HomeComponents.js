import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { PlusCircle } from "./Pictos";

function AddFirstClothe({ handleCreateClosePress }) {
  return (
    <>
      <View>
        <Text style={styles.title}>Mes vêtements</Text>
      </View>
      <View style={styles.cardAddClothes}>
        <Text style={styles.textContent}>Ajoutez votre premier vêtements</Text>
        <View style={styles.img}>
          <Image style={styles.image} source={require("../../assets/images/Dressing.png")} />
        </View>
      </View>
      <View style={styles.buttonPlus}>
        <TouchableOpacity activeOpacity={0.5} onPress={handleCreateClosePress}>
          <PlusCircle />
        </TouchableOpacity>
      </View>
    </>
  );
}

function ViewClothe() {
  return (
    <View style={styles.cardAddClothes}>
      <Text style={styles.title}>Mes vêtements</Text>
      <Text style={styles.textContent}>Consultez tout vos vêtements</Text>
      <View style={styles.img}>
        <Image style={styles.image} source={require("../../assets/images/Dressing.png")} />
      </View>
      <TouchableOpacity activeOpacity={0.5} style={styles.buttonPlus} onPress={handleCreateClosePress}>
        <PlusCircle />
      </TouchableOpacity>
    </View>
  );
}

function NoOutfits() {
  return (
    <>
      <View>
        <Text style={styles.title}>Mes tenues</Text>
      </View>
      <View style={styles.cardAddClothes}>
        <Text style={styles.textContent}>Ajoutez au moins deux vêtements pour créer votre première tenue</Text>
        <View style={styles.img2}>
          <Image style={styles.image} source={require("../../assets/images/tenue.png")} />
        </View>
      </View>
    </>
  );
}

function FirstOutfit() {
  return (
    <View style={styles.cardAddClothes}>
      <Text style={styles.title}>Mes tenues</Text>
      <Text style={styles.textContent}>Ajoutez votre première tenue</Text>
      <TouchableOpacity activeOpacity={0.5} style={styles.buttonPlus} onPress={handleCreateClosePress}>
        <PlusCircle />
      </TouchableOpacity>
      <View style={styles.img2}>
        <Image style={styles.image} source={require("../../assets/images/tenue.png")} />
      </View>
    </View>
  );
}

function MyOutfits() {
  return (
    <View style={styles.cardAddClothes}>
      <Text style={styles.title}>Mes tenues</Text>
      <Text style={styles.textContent}>Consutez toutes vos tenue</Text>
      <TouchableOpacity activeOpacity={0.5} style={styles.buttonPlus} onPress={handleCreateClosePress}>
        <PlusCircle />
      </TouchableOpacity>
      <View style={styles.img2}>
        <Image style={styles.image} source={require("../../assets/images/tenue.png")} />
      </View>
    </View>
  );
}

function NoFav() {
  return (
    <>
      <View>
        <Text style={styles.title}>Mes tenues favorites</Text>
      </View>
      <View style={styles.cardAddClothes}>
        <Text style={styles.textContent}>Vous n'avez pas encore de tenue favorite</Text>
        <View style={styles.img2}>
          <Image style={styles.image} source={require("../../assets/images/fav.png")} />
        </View>
      </View>
    </>
  );
}

function AddFirstFav() {
  return (
    <View style={styles.cardAddClothes}>
      <Text style={styles.title}>Mes tenues favorites</Text>
      <Text style={styles.textContent}>Vous n'avez pas encore de tenue favorite</Text>
      <View style={styles.img2}>
        <Image style={styles.image} source={require("../../assets/images/fav.png")} />
      </View>
    </View>
  );
}

function MyFirstFav() {
  return (
    <View style={styles.cardAddClothes}>
      <View style={styles.fav}></View>
      <View style={styles.fav}>
        <TouchableOpacity activeOpacity={0.5} style={styles.buttonPlus} onPress={handleCreateClosePress}>
          <PlusCircle />
        </TouchableOpacity>
      </View>
      <View style={styles.img2}>
        <Image style={styles.image} source={require("../../assets/images/fav.png")} />
      </View>
    </View>
  );
}

function TwoFav() {
  return (
    <View style={styles.cardAddClothes}>
      <View style={styles.fav}></View>
      <View style={styles.fav}></View>
      <View style={styles.fav}>
        <TouchableOpacity activeOpacity={0.5} style={styles.buttonPlus} onPress={handleCreateClosePress}>
          <PlusCircle />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function MoreThanTwoFav() {
  return (
    <View style={styles.cardAddClothes}>
      <View style={styles.fav}></View>
      <View style={styles.fav}></View>
      <View style={styles.fav}></View>
      <View style={styles.favNext}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardAddClothes: {
    width: "100%",
    height: "22%",
    borderRadius: 10,
    backgroundColor: "#CCE3DE",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Lora-Bold",
    color: "black",
    textAlign: "left",
    fontSize: 20,
  },

  textContent: {
    fontFamily: "Lora-Regular",
    fontSize: 15,
    color: "black",
    textAlign: "center",
    alignItems: "center",
    flexBasis: "45%",
  },
  buttonPlus: {
    width: "90%",
    alignItems: "center",
    bottom: "5%",
  },

  image: {
    bottom: "30%",
    right: "10%",
  },

  textContainer: {
    flexDirection: "column",
  },
});

export {
  AddFirstClothe,
  AddFirstFav,
  ViewClothe,
  NoOutfits,
  FirstOutfit,
  MyOutfits,
  NoFav,
  MyFirstFav,
  TwoFav,
  MoreThanTwoFav,
};
