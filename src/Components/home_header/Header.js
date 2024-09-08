import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.hello}>Hello,</Text>
        <Text style={styles.name}>Mahmoud Abdo</Text>
      </View>
      <View>
        <Image
          style={styles.avatar}
          source={require("../../assets/avatar.jpg")}
        />
      </View>
    </View>
  );
}
