import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BackgroundOval from "../components/BackgroundOval";
import Banner from "../components/Banner";
import Header from "../components/Header";
import TextCmp from "../components/TextCmp";

const items = [
  {
    id: "1",
    name: "Fried Egg",
    price: "$2",
    image: require("../assets/images/friedegg.png"),
    num: 1,
  },
  {
    id: "2",
    name: "Nori",
    image: require("../assets/images/nori.png"),
    price: "$5",
  },
  {
    id: "3",
    name: "Hot Sauce",
    image: require("../assets/images/hotsauce.png"),
    price: "$1",
  },
];

const Details = ({ navigation }) => {
  const [num, setNum] = useState({ 0: 0, 1: 0, 2: 0 });
  const [selected, setSelected] = useState(undefined);

  const Item = ({ item, i }) => {
    return (
      <TouchableOpacity style={styles.wrapper} onPressIn={() => setSelected(i)}>
        {selected === i && (
          <>
            <View style={styles.itemHeader}>
              <TouchableWithoutFeedback
                onPressIn={() => {
                  if (num[i] > 0) {
                    setNum({
                      ...num,
                      [i]: num[i] - 1,
                    });
                  }
                }}
              >
                <Text style={styles.operator}>-</Text>
              </TouchableWithoutFeedback>
              <TextCmp>{num[i]}</TextCmp>
              <TouchableWithoutFeedback
                onPress={() => {
                  setNum({
                    ...num,
                    [i]: num[i] + 1,
                  });
                }}
              >
                <Text style={styles.operator}>+</Text>
              </TouchableWithoutFeedback>
            </View>
          </>
        )}

        <View style={styles.item}>
          <View style={styles.imgContainer}>
            <Image source={item.image} style={styles.image} />
          </View>

          <View style={styles.itemFooter}>
            <TextCmp style={styles.itemName}>{item.name}</TextCmp>
            <TextCmp style={styles.itemPrice}>{item.price}</TextCmp>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <BackgroundOval style={styles.oval} />
      <Header onPress={() => navigation.goBack()} />
      <Banner
        title="Add Toppings"
        image={require("../assets/images/food2.png")}
      />
      <ScrollView horizontal style={styles.scrollView}>
        {items.map((item, i) => (
          <Item key={item.id} item={item} i={i} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  oval: {
    left: undefined,
    top: -160,
    alignSelf: "center",
  },
  scrollView: {
    // paddingLeft: 80,
    overflow: "visible",
    flex: 1,
    // backgroundColor: "red",
    alignSelf: "center",
    paddingTop: 10,
  },
  wrapper: {
    padding: 0,
    marginHorizontal: 10,
    // backgroundColor: "red",
    // overflow: "visible",
    height: 150,
  },
  item: {
    borderWidth: 1,
    borderColor: "#DEDEDE",
    padding: 15,
    alignItems: "center",
  },
  imgContainer: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  itemFooter: {
    justifyContent: "center",
    alignItems: "center",
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontWeight: "bold",
    fontFamily: undefined,
  },
  itemHeader: {
    position: "absolute",
    backgroundColor: "#FFCC00",
    // backgroundColor: "red",
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    top: 0,
    zIndex: 999,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  num: {
    marginHorizontal: 20,
  },
  operator: {
    fontSize: 16,
  },
});
