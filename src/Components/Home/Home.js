import { View, Text, FlatList } from "react-native";
import Header from "../home_header/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import productDat from "../../Data/Data";
import Card from "./Card";
import Offers from "./Offers";

export default function Home() {
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={productDat}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card {...item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={<Header />}
          ListFooterComponent={<Offers />}
        />
      </View>
    </SafeAreaView>
  );
}
