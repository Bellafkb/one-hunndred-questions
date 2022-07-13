import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { nextButtonColor } from "../cssColors";

export default function TutorialScreen() {
  const england = require("../assets/views/6_language/imgs/english_filled/EnglandC_100.png");
  const germany = require("../assets/views/6_language/imgs/german_filled/DeutschlandC_100.png");

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text>Germany</Text>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderRadius: 400,
              margin: 10,
              width: 100,
              height: 100,
            }}
          >
            <Image
              source={germany}
              resizeMode="contain"
              style={{ height: 60 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text>English</Text>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderRadius: 400,
              margin: 10,
              width: 100,
              height: 100,
            }}
          >
            <Image
              source={england}
              resizeMode="contain"
              style={{ height: 60 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  bot: {
    height: "20%",
    margin: 10,
  },
  top: {
    height: "80%",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomComponent: {
    alignItems: "center",
    justifyContent: "center",
    height: "20%",
  },
  nextButton: {
    backgroundColor: nextButtonColor,
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
  contentText: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
