import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 25,
  },
  hello: {
    fontSize: 18,
    color: "grey",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
