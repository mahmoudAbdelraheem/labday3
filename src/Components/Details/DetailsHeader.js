import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export default function DetailsHeader() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable style={styles.icon} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.icon}>
          <AntDesign name="hearto" size={24} color="black" />
        </View>
        <View style={styles.icon}>
          <AntDesign name="shoppingcart" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 25,
  },
  icon: {
    margin: 5,
    padding: 5,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    elevation: 10,
  },
});
