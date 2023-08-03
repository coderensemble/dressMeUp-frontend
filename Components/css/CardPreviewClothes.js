import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function PreviewTop() {
  return (
    <View style={styles.previewContainer}>
      <TouchableOpacity>
        <View style={styles.cardClothes}>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.cardClothes}>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function PreviewBottom() {
  return (
    <View style={styles.previewContainer}>
      <TouchableOpacity>
        <View style={styles.cardClothes}>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.cardClothes}>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function PreviewShoes() {
  return (
    <View style={styles.previewContainer}>
      <TouchableOpacity>
        <View style={styles.cardClothes}>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.cardClothes}>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function PreviewAccessories() {
  return (
    <View style={styles.previewContainer}>
      <TouchableOpacity>
        <View style={styles.cardAccessories}>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.cardAccessories}>
        </View>
      </TouchableOpacity>
    </View>
  );
}

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
    backgroundColor: '#222',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  smallCardClothes: {
    flexDirection: "row",
    width: windowWidth * 0.256,
    height: windowHeight * 0.142,
    borderRadius: 10,
    backgroundColor: '#222',
  },
  smallCardAccessories: {
    width: windowWidth * 0.256,
    height: windowHeight * 0.118,
    borderRadius: 10,
    backgroundColor: '#222',
  },
  cardAccessories: {
    width: windowWidth * 0.435,
    height: windowHeight * 0.118,
    borderRadius: 10,
    backgroundColor: '#222',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  smallPreviewTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  containerTitle: {
    fontFamily: "Lora-Bold",
    fontSize: 18,
  },
  filterButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "#6B9080",
    borderWidth: 1,
    borderRadius: 10,
    color: "#6B9080",
    fontFamily: "Lora-Bold",
    fontSize: 10
  },
});
