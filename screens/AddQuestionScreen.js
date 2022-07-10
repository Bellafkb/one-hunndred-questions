import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { nextButtonColor } from "../cssColors";
import { Ionicons } from "@expo/vector-icons";

const slides = [
  {
    imageSource: require("./step_1.png"),
    content: "The owner of the phone begins.",
    backgroundColor: ""
  },
  {
    imageSource: require("./step_2.png"),
    content: "Read the question on the screen out loud.",
    backgroundColor: ""
  },
  {
    imageSource: require("./step_3.png"),
    content: "Pass the phone to the personn suiting the question.",
    backgroundColor: ""
  },
  {
    imageSource: require("./step_4.png"),
    content:
      "The chosen person takes, gets a penalty and forwards to the next question",
    backgroundColor: ""
  }
];

export default function TutorialScreen() {
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => setIndex(index + 1)}
        >
          <Text style={styles.innerButton}>
            <Ionicons name="ios-add-outline" size={30} color="#fff" /> ADD
            QUESTION{" "}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bot}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          no questions created yet
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  bot: {
    height: "80%",
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  top: {
    height: "20%",
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  bottomComponent: {
    alignItems: "center",
    justifyContent: "center",
    height: "20%"
  },
  nextButton: {
    backgroundColor: nextButtonColor,
    padding: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center"
  },
  innerButton: {
    color: "#fff",
    fontSize: 30
  },
  contentText: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});
