import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },
  detailsContainer: {
    backgroundColor: "#fff",
    padding: 10,
    paddingTop: 20,
    height: "50%",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "space-between",
    width: "100%",
  },
  info: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },

  colors: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginEnd: 10,
  },

  description: {
    fontSize: 16,
    textAlign: "center",
    color: "grey",
    margin: 10,
  },

  priceContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#f59c0c",
    padding: 20,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
