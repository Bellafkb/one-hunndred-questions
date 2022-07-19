import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { nextButtonColor } from "../cssColors";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TutorialScreen() {
  const england = require("../assets/views/6_language/imgs/english_filled/EnglandC_100.png");
  const england_empty = require("../assets/views/6_language/imgs/english_empty/EnglandBW_100.png");

  const germany = require("../assets/views/6_language/imgs/german_filled/DeutschlandC_100.png");
  const germany_empty = require("../assets/views/6_language/imgs/german_empty/DeutschlandBW_100.png");

  const storeLanguage = async (language) => {
    await AsyncStorage.setItem("@100_q_language", language);
    setLanguage(language);
  };

  const [language, setLanguage] = useState();
  const getLanguage = async () => {
    // get Data from Storage
    try {
      const data = await AsyncStorage.getItem("@100_q_language");
      if (data !== null) {
        console.log(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useMemo(
    () =>
      getLanguage()
        .then((data) => data)
        .then((value) => {
          setLanguage(value);
          return value;
        })
        .catch((err) => console.log(err)),
    []
  );

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={{ fontSize: 20 }} >{"German"}</Text>
          <TouchableOpacity
            onPress={() => storeLanguage("german")}
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
              source={language === "german" ? germany : germany_empty}
              resizeMode="contain"
              style={{ height: 60 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={{ fontSize: 20 }}>English</Text>
          <TouchableOpacity
            onPress={() => storeLanguage("english")}
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
              source={language === "english" ? england : england_empty}
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
