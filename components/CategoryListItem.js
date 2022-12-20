import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import coding_ic from "../assets/coding.png";
function CategoryListItem({ actor }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{actor.name}</Text>
      <Image style={styles.categoryImage} source={actor.actorAvatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    // width: "90%",
    marginVertical: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  categoryImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginVertical: 4,
  },
  title: {
    color: "rgba(0,0,0,.8)",
    fontSize: 22,
    fontWeight: "700",
  },
});

export default CategoryListItem;
