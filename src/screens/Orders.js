import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import BackgroundOval from "../components/BackgroundOval";
import Banner from "../components/Banner";
import Header from "../components/Header";
import TextCmp from "../components/TextCmp";

const Orders = ({ navigation }) => {
  const [selected, setSelected] = useState(0);

  const Item = ({ title, value, schedule }) => {
    return (
      <View style={styles.item}>
        <TextCmp style={styles.itemTitle}>{title}</TextCmp>
        {schedule ? (
          <View style={styles.itemSchedule}>
            <TouchableWithoutFeedback
              onPress={() => setSelected(0)}
              style={[styles.itemScheduleTextActiveIndicator]}
            >
              <TextCmp
                style={[
                  styles.itemScheduleTextActive,
                  selected == 0
                    ? { backgroundColor: "#FFF", color: "#3c3c3c" }
                    : { backgroundColor: "#3c3c3c", color: "#FFF" },
                ]}
              >
                Now
              </TextCmp>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => setSelected(1)}
              style={[styles.itemScheduleTextActiveIndicator]}
            >
              <TextCmp
                style={[
                  styles.itemScheduleTextActive,
                  selected == 1
                    ? { backgroundColor: "#FFF", color: "#3c3c3c" }
                    : { backgroundColor: "#3c3c3c", color: "#FFF" },
                ]}
              >
                Later
              </TextCmp>
            </TouchableWithoutFeedback>
          </View>
        ) : (
          <Text style={styles.itemValue}>{value}</Text>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <BackgroundOval style={styles.oval} />
      <Header onPress={() => navigation.goBack()} />
      <Banner
        title="Your Order"
        image={require("../assets/images/food2.png")}
        imageContainer={styles.img}
      />
      <View style={styles.containerItem}>
        <Text style={styles.itemHeader}>ITEMS</Text>
        <Item title="Salmon Bowl" value={"$12"} />
        <Item title="Freg Egg + 1" value="$2" />
        <Item title="Total" value="$14" />
        <View style={styles.line} />
        <Text style={styles.itemHeader}>DELIVERY</Text>
        <Item title="Schedule" schedule />
        <View style={styles.line} />
        <Item
          title="My Location"
          value="226 Ottley Road Suite 206 Atlanta, GA 30326"
        />
        <Item title="Name" value="Micheal Jones" />
        <Item title="Phone Number" value="(404) 455-6788" />
        <Item title="Card Number" value="4455 **** **** ****" />
        <Item title="Experation Date" value="10/20" />
      </View>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  oval: {
    left: undefined,
    alignSelf: "center",
    top: -200,
  },
  img: {
    width: 150,
    height: 150,
  },
  containerItem: {
    padding: 20,
  },
  itemHeader: {
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    alignItems: "center",
  },
  itemValue: {
    fontWeight: "bold",
    width: 200,
    // backgroundColor: "red",
    textAlign: "right",
  },
  line: {
    height: 3,
    backgroundColor: "#EBEBEB",
    marginVertical: 10,
  },
  itemSchedule: {
    backgroundColor: "#3c3c3c",
    flexDirection: "row",
    padding: 2,
    // paddingHorizontal: 2,
    borderRadius: 20,
  },
  itemScheduleTextActiveIndicator: {
    backgroundColor: "red",
    borderRadius: 20,
    overflow: "hidden",
  },
  itemScheduleTextActive: {
    color: "#3c3c3c",
    paddingVertical: 3,
    paddingHorizontal: 10,
    // backgroundColor: "red",
    borderRadius: 20,
  },
  itemScheduleText: {
    color: "#FFF",
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
});
