import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",

    marginVertical: 20,
  },
  logo: {
    width: "100%",
    height: 200,
    marginVertical: "auto",
    resizeMode: "contain",
  },

  card: {
    width: "100%",
    height: "50%",
    marginTop: "auto",
    paddingTop: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,

    backgroundColor: "#dfdfdf",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },

  supTitle: {
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "bold",
    color: "#aaa",
    textAlign: "center",

    marginVertical: 20,
    paddingHorizontal: 20,
  },

  indecator: {
    width: "100%",
    height: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  active: {
    width: 25,
    height: 10,
    borderRadius: 5,
    backgroundColor: "red",
    marginEnd: 8,
  },

  inactive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#aaa",
    marginEnd: 8,
  },

  button: {
    marginTop: "auto",
    backgroundColor: "red",
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 40,
  },
});
