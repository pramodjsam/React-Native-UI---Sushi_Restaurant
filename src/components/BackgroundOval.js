import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const w = Dimensions.get("window").width;

const BackgroundOval = ({ style }) => {
  return <View style={[styles.container, style]} />;
};

export default BackgroundOval;

const styles = StyleSheet.create({
  container: {
    width: w,
    backgroundColor: "#FFCC00",
    position: "absolute",
    top: -100,
    aspectRatio: 1,
    borderRadius: w,
    left: 100,
  },
});
