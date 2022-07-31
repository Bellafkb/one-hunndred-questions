import React, { useContext, useEffect, useMemo, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { nextButtonColor, shadow } from "../cssColors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LocalizationContext } from "../context/LocalizationContext";

export default function TutorialScreen() {
  const { i18n, setLocale, locale } = useContext(LocalizationContext);
  const england = require("../assets/views/6_language/imgs/english_filled/EnglandC_100.png");
  const england_empty = require("../assets/views/6_language/imgs/english_empty/EnglandBW_100.png");

  const germany = require("../assets/views/6_language/imgs/german_filled/DeutschlandC_100.png");
  const germany_empty = require("../assets/views/6_language/imgs/german_empty/DeutschlandBW_100.png");

  // Set the key-value pairs for the different languages you want to support.

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={{ fontSize: 20 }}>{"German"}</Text>
          <TouchableOpacity
            onPress={() => {
              setLocale("de");
            }}
            style={{
              ...styles.languageOption,
              ...shadow,
            }}
          >
            <Image
              source={locale === "de" ? germany : germany_empty}
              resizeMode="contain"
              style={{ height: 60 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={{ fontSize: 20 }}>English</Text>
          <TouchableOpacity
            onPress={() => {
              setLocale("en");
            }}
            style={{
              ...styles.languageOption,
              ...shadow,
            }}
          >
            <Image
              source={locale === "en" ? england : england_empty}
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
  languageOption: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: "#fff",
  },
});
