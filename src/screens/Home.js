import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackgroundOval from "../components/BackgroundOval";
import Banner from "../components/Banner";
import Button from "../components/Button";
import Header from "../components/Header";
import TextCmp from "../components/TextCmp";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BackgroundOval />
      <Header mainPage />
      <Banner
        title="Salmon Bowl"
        image={require("../assets/images/food1.png")}
      />
      <View style={styles.wrapper}>
        <TextCmp style={styles.textDola}>$12</TextCmp>
        <TextCmp style={styles.desc}>
          A fresh take on a raw fish favorite; the salmon bowl.Wild-caught
          salmon piled high on a bed of sticky rice,fresh avocado, pickled
          cucumber, scallions, and nori.
        </TextCmp>
        <View style={styles.footer}>
          <View style={styles.dot} />
          <TextCmp style={styles.textCal}>325 CAL</TextCmp>
          <View style={styles.dot} />
        </View>
      </View>

      <View style={styles.listButton}>
        <Button
          onPress={() => navigation.navigate("Details")}
          title="Add Toppings"
        />
        <View style={{ width: 20 }} />
        <Button
          onPress={() => navigation.navigate("Orders")}
          title="Order"
          outline
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  wrapper: {
    alignItems: "center",
    flex: 1,
  },
  textDola: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "AvenirLTStd-Book",
  },
  desc: {
    lineHeight: 18,
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: "#FDD700",
    borderRadius: 5,
  },
  textCal: {
    marginHorizontal: 20,
  },
  listButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 40,
  },
});
