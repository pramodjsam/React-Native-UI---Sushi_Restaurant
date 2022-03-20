import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TextCmp from "./TextCmp";

const Header = ({ onPress, mainPage }) => {
  return (
    <View style={styles.header}>
      {!mainPage ? (
        <TouchableOpacity onPress={onPress}>
          <Image source={require("../assets/images/left.png")} />
        </TouchableOpacity>
      ) : (
        <View style={{ marginLeft: 20 }} />
      )}
      <TextCmp style={styles.title}>Sushi Haus</TextCmp>
      <View style={styles.headerRight}>
        <View style={styles.headerRightOval}>
          <TextCmp style={styles.headerRightOvalText}>1</TextCmp>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 14,
  },
  headerRight: {
    height: 50,
    width: 50,
    backgroundColor: "#FFF",
    borderRadius: 50,
  },
  headerRightOval: {
    backgroundColor: "#363636",
    width: 20,
    height: 20,
    borderRadius: 20,
    position: "absolute",
    right: -2,
    top: -2,
    justifyContent: "center",
    alignItems: "center",
  },
  headerRightOvalText: {
    color: "#FFF",
    fontSize: 10,
  },
});
