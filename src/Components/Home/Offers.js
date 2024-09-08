import { View, Text, StyleSheet, Image } from "react-native";

export default function Offers() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Winter Collections</Text>
        <Text style={styles.supTitle}>Start Find Your best Style </Text>
      </View>
      <Image style={styles.image} source={require("../../assets/offers.png")} />
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
    backgroundColor: "#76a4f5",
    height: 260,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    width: 180,
    fontWeight: "bold",
    color: "white",
  },
  supTitle: {
    fontSize: 20,
    width: 180,
    color: "lightgrey",
  },
  image: {
    width: 180,
    height: 280,
    resizeMode: "contain",
  },
});
