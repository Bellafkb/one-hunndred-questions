import React from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";

const img = require("../assets/views/1_intro_screen/imgs/intro.png");

export default function StartScreen({ navigation }) {
  return (
    <ImageBackground
      source={img}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={{ fontSize: 20, color: "#444", padding: 20 }}>
          Touch to start
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
