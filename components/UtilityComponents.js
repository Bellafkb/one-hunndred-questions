import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";

export const Button = ({ content, backgroundColor, onPress }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.nextButton, backgroundColor }}
      onPress={() => onPress()}
    >
      <Text style={styles.innerButton}>{content}</Text>
    </TouchableOpacity>
  );
};

export const Message = ({ content }) => {
  return (
    <View style={styles.message}>
      <Entypo
        name="info-with-circle"
        size={24}
        color="#0e566c"
        style={{ paddingTop: 10 }}
      />
      <Text style={{ color: "#0e566c", marginLeft: 10, padding: 10 }}>
        {content}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  nextButton: {
    padding: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  innerButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  message: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 20,
    borderWidth: 0.5,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: "#0e566c",
    backgroundColor: "#a9d5de",
  },
});
