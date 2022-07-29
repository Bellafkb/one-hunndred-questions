import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Loader from "react-native-loading-spinner-overlay";

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
      <View style={{ width: "20%" }}>
        <Entypo name="info-with-circle" size={40} color="#0e566c" />
      </View>

      <View style={{ width: "80%" }}>
        <Text style={{ color: "#0e566c", paddingRight: 10, fontSize: 16 }}>
          {content}
        </Text>
      </View>
    </View>
  );
};

export const Spinner = ({ isLoading }) => {
  return isLoading && <Loader visible={true} animation="fade" />;
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
    paddingHorizontal: 21,
    paddingVertical: 14,
    borderWidth: 0.5,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: "#0e566c",
    backgroundColor: "#F8FFFF",
  },
});
