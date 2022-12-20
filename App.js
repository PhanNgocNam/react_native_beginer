import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import CategoryListItem from "./components/CategoryListItem";
import gia_cat_luong from "./assets/gia_cat_luong.jpg";
import tam_quoc_chi from "./assets/tam_quoc_chi.jpg";
import luc_ton from "./assets/luc_ton.jpg";
import tao_thao from "./assets/tao_thao.jpg";
import luu_bi from "./assets/luu_bi.jpg";
import ton_quyen from "./assets/ton_quyen.jpg";
import la_bo from "./assets/la_bo.jpg";
import tu_long from "./assets/tu_long.jpg";

const actor = [
  { id: 1, name: "Tam Quốc Diễn Nghĩa", actorAvatar: tam_quoc_chi },
  { id: 2, name: "Tào Tháo", actorAvatar: tao_thao },
  { id: 3, name: "Lưu Bị", actorAvatar: luu_bi },
  { id: 4, name: "Tôn Quyền", actorAvatar: ton_quyen },
  { id: 5, name: "Triệu Tử Long", actorAvatar: tu_long },
  { id: 6, name: "Lữ Bố", actorAvatar: la_bo },
  { id: 7, name: "Lục Tốn", actorAvatar: luc_ton },
];

export default function App() {
  return (
    <FlatList
      contentContainerStyle={styles.contentContainerStyle}
      data={actor}
      renderItem={({ item }) => <CategoryListItem actor={item} />}
      keyExtractor={(item) => `${item.id}`}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
});
