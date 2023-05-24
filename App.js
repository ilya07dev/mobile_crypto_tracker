import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
// import { HomeScreen } from "./src/screens/HomeScreen";
import { CoinDetailScreen } from "./src/screens/CoinDetailScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <CoinDetailScreen /> */}
      <HomeScreen />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
