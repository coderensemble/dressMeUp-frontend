import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function PreviewListingTop() {
  return (
    <TouchableOpacity>
      <View style={styles.cardClothes}></View>
    </TouchableOpacity>
  );
}

function PreviewTop() {
  return <View style={styles.cardClothes}>
    <Image style={styles.imagePreview} source={require('../../assets/images/1661139363d0af2b9ebc4be1a701c62b3af5e237ef.webp')} />
  </View>;
}

function PreviewAccessories() {
  return (
    <TouchableOpacity>
      <View style={styles.cardAccessories}></View>
    </TouchableOpacity>
  );
}

export { PreviewTop, PreviewAccessories, PreviewListingTop };

function SmallPreviewTop() {
  return (
    <View style={styles.smallPreviewContainer}>
      <View style={styles.smallPreviewTopContainer}>
      <TouchableOpacity>
        <Text style={styles.containerTitle}>Mes hauts</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.filterButton}>Tous mes hauts</Text>
      </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.smallCardContainer}>
          <View style={styles.smallCardClothes}>
            <TouchableOpacity>
              
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardClothes}>
            <TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardClothes}>
            <TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardClothes}>
            <TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardClothes}>
            <TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function SmallPreviewBottom() {
  return (
    <View style={styles.smallPreviewContainer}>
      <View style={styles.smallPreviewTopContainer}>
      <TouchableOpacity>
        <Text style={styles.containerTitle}>Mes bas</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.filterButton}>Tous mes bas</Text>
      </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.smallCardContainer}>
          <View style={styles.smallCardClothes}>
            <TouchableOpacity>
              
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardClothes}>
            <TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardClothes}>
            <TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardClothes}>
            <TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardClothes}>
            <TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
function SmallPreviewShoes() {
  return (
    <View style={styles.smallPreviewContainer}>
      <View style={styles.smallPreviewTopContainer}>
      <TouchableOpacity>
        <Text style={styles.containerTitle}>Mes chaussures</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.filterButton}>Toutes mes chaussures</Text>
      </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.smallCardContainer}>
          <View style={styles.smallCardAccessories}>
            <TouchableOpacity>
              
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardAccessories}>
            <TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardAccessories}>
            <TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardAccessories}>
            <TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardAccessories}>
            <TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
function SmallPreviewAccessories() {
  return (
    <View style={styles.smallPreviewContainer}>
      <View style={styles.smallPreviewTopContainer}>
      <TouchableOpacity>
        <Text style={styles.containerTitle}>Mes accessoires</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.filterButton}>Tous mes accessoires</Text>
      </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.smallCardContainer}>
          <View style={styles.smallCardAccessories}>
            <TouchableOpacity>
              
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardAccessories}>
            <TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardAccessories}>
            <TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardAccessories}>
            <TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.smallCardAccessories}>
            <TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export { PreviewTop, PreviewBottom, PreviewShoes, PreviewAccessories, SmallPreviewTop, SmallPreviewBottom, SmallPreviewShoes, SmallPreviewAccessories }

const styles = StyleSheet.create({
  previewContainer: {
    width: "90%",
    flexWrap: 'wrap',
    flexDirection: "row",
    rowGap: 10,
    columnGap: 10,
    paddingTop: 10,
  },
  smallPreviewContainer: {
    width: "90%",
    rowGap: 10,
    columnGap: 10,
    paddingTop: 10,
  },
  smallCardContainer: {
    flexDirection: "row",
    rowGap: 10,
    columnGap: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  cardClothes: {
    width: windowWidth * 0.435,
    height: windowHeight * 0.237,
    borderRadius: 10,
    backgroundColor: "#222",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.8,
    // shadowRadius: 5,
    // elevation: 5,
  },
  imagePreview: {
    width : '100%',
    
  },
  cardAccessories: {
    width: windowWidth * 0.435,
    height: windowHeight * 0.118,
    borderRadius: 10,
    backgroundColor: "#222",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.8,
    // shadowRadius: 5,
    // elevation: 5,
  },
});
