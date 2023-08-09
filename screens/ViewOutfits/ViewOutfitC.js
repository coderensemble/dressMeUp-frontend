import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { TopContainerOutfit } from "../../Components/css/TopContainer";
import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, setIsFavorite } from "../../reducers/outfits";
import { useState } from "react";
import {
  StarGreen,
  LeftArrowCircle,
  RightArrowCircle,
  Star,
} from "../../Components/css/Pictos";
import { useEffect } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function ViewOutfitC({ navigation, route }) {
  const dispatch = useDispatch();
  const outfits = useSelector((state) => state.outfits.outfits);
  const { selectedItem } = route.params;
  
  const favoriteArray = useSelector((state) => state.outfits.favoriteArray);
  const isFavorite = favoriteArray.includes(selectedItem.id);

  // const [isFav, setIsFav] = useState(selectedItem.isFavorite);
  // const [favState, setFavState] = useState(false)


  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleFavorite = (outfit) => {
    fetch('http://172.20.10.2:3000/outfits', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( {outfitId: outfit.id} ),
    }).then((response) => response.json())
      .then((data) => {
        // console.log(data)
        if (data.isFavorite) {
          dispatch(addFavorite(outfit.id))
          console.log(favoriteArray)
        } else{
          console.log(favoriteArray)

          dispatch(addFavorite(outfit.id))

        }
      }); 
  };
  

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TopContainerOutfit handleGoBack={handleGoBack} />
      <View style={styles.imageContainer}>
        <Image source={{ uri: selectedItem.image }} style={styles.image} />
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => handleFavorite(selectedItem)}>
          {isFavorite ? <StarGreen /> : <Star />}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F6FFF8",
    alignItems: "center",
    justifyContent: "flex-start",
    rowGap: 20,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
  },
  imageContainer: {
    width: "90%",
    height: windowHeight * 0.7,
  },
  bottomContainer: {
    alignItems: "center",
    flexDirection: "row",
    columnGap: 50,
  },
  arrowContainer: {
    height: 24,
    width: 24,
  },
});

export default ViewOutfitC;