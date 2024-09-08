import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
export default function Onboarding({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <View style={styles.card}>
        <Text style={styles.title}>Uncover Your</Text>
        <Text style={styles.title}>True Fashion</Text>
        <Text style={styles.title}>Sence</Text>
        <Text style={styles.supTitle}>
          Achieve Your Fashion fitness goals with our innovative fitness app.
        </Text>

        <View style={styles.indecator}>
          <View style={styles.active} />
          <View style={styles.inactive} />
          <View style={styles.inactive} />
        </View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Main")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}
