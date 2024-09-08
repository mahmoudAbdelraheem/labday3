import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailsHeader from "./DetailsHeader";
import styles from "./styles";
export default function Details({ route }) {
  const { image, name, price } = route?.params;
  return (
    <SafeAreaView>
      <DetailsHeader />
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <View>
            <View style={styles.info}>
              <View>
                <Text style={styles.name}>{name}</Text>
                <Text>⭐ 4.5 (321 reviews)</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={[styles.colors, { backgroundColor: "red" }]} />
                <View style={[styles.colors, { backgroundColor: "green" }]} />
                <View style={[styles.colors, { backgroundColor: "pink" }]} />
              </View>
            </View>
            <Text style={styles.description}>
              Straight-cut jacket in a bouclé weave with a round neckline,
              buttons down the front, long sleeves and decorative chest pockets.
              Lined.
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{price}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add To Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
