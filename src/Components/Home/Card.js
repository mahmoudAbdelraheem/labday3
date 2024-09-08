import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
export default function Card({ image, name, price }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.favContiner}>
        <AntDesign
          name="hearto"
          size={20}
          color="black"
          style={styles.favIcon}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate("Details", { image, name, price });
        }}
      >
        <Image style={styles.image} source={image} />
      </TouchableOpacity>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}> {price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "#eaa9bf",
    padding: 10,
    borderRadius: 15,
  },

  favContiner: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 1,
    width: 35,
    height: 35,
    backgroundColor: "#f3f3f3",
    borderRadius: 17.5,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 180,
    height: 200,
    resizeMode: "contain",
  },
  info: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    color: "red",
  },
});
