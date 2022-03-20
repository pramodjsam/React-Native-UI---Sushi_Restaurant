import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TextCmp from "./TextCmp";

const w = Dimensions.get("window").width;

const Banner = ({ title, image, imageContainer }) => {
  return (
    <View style={styles.container}>
      <TextCmp style={styles.desc}>free delivery 1:24</TextCmp>
      <TextCmp style={styles.heading}>{title}</TextCmp>
      <Image
        resizeMode="contain"
        style={[styles.image, imageContainer]}
        source={image}
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  desc: {
    fontSize: 13,
  },
  heading: {
    fontSize: 25,
    marginTop: 10,
  },
  image: {
    width: w / 1.2,
  },
});
