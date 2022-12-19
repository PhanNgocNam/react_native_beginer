import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryListItem from "./components/CategoryListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CategoryListItem productName="Lenovo x250" />
      <CategoryListItem productName="Realme 5" />
      <CategoryListItem productName="Sirius 120cc" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
