import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TextCmp from "./TextCmp";

const Button = ({ title, outline, style, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[outline ? styles.btn_outline : styles.btn, style]}
    >
      <TextCmp style={[outline ? styles.title_outline : styles.title]}>
        {title}
      </TextCmp>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    backgroundColor: "#3c3c3c",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width / 3,
  },
  title: {
    color: "#FFF",
  },
  btn_outline: {
    padding: 10,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#323232",
    borderRadius: 30,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width / 3,
  },
  title_outline: {
    color: "#3C3C3C",
  },
});
