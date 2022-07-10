import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { nextButtonColor, shadow } from "../cssColors";
import { Entypo } from "@expo/vector-icons";

export default function MatchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerComponent}>
        <TouchableOpacity
          style={{ borderRadius: 1, backgroundColor: "#fff" }}
        ></TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 20,
            backgroundColor: "#fff",
            marginTop: 20,
            marginRight: 20,
            borderWidth: 1,
            padding: 5,
            alignItems: "center"
          }}
          onPress={() => navigation.navigate("SocialMediaScreen")}
        >
          <Entypo name="share" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ ...styles.container, padding: 40 }}>
        <View style={styles.topComponent}>
          <View style={styles.topItem}>
            <Image
              source={require("../assets/whiskey.png")}
              style={{ width: "90%", height: "100%" }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.topItem}>
            <Text
              style={{ fontWeight: "bold", fontSize: 25, textAlign: "center" }}
            >
              Bottle of wine.
            </Text>
          </View>
          <View style={styles.topItem}>
            <Text
              style={{ fontWeight: "bold", fontSize: 25, textAlign: "center" }}
            >
              Whiskey for one.
            </Text>
          </View>
          <View style={styles.topItem}>
            <Image
              source={require("../assets/wine.png")}
              style={{ width: "90%", height: "100%" }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.bottomComponent}>
          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() => navigation.navigate("SelectGameModeScreen")}
          >
            <Image
              source={require("../assets/play.png")}
              style={{ width: "90%", height: "80%" }}
              resizeMode="contain"
            />
            <Text
              style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
            >
              Play
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() => navigation.navigate("AddQuestionScreen")}
          >
            <Image
              source={require("../assets/add.png")}
              style={{ width: "90%", height: "80%" }}
              resizeMode="contain"
            />
            <Text
              style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
            >
              Add
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() => navigation.navigate("TutorialScreen")}
          >
            <Image
              source={require("../assets/rules.png")}
              style={{ width: "90%", height: "80%" }}
              resizeMode="contain"
            />
            <Text
              style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
            >
              Rules
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() => navigation.navigate("LanguageScreen")}
          >
            <Image
              source={require("../assets/language.png")}
              style={{ width: "90%", height: "80%" }}
              resizeMode="contain"
            />
            <Text
              style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
            >
              Language
            </Text>
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
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 10
  },
  headerComponent: {
    alignItems: "center",
    justifyContent: "space-between",
    height: "10%",
    flexDirection: "row"
  },
  topComponent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    height: "35%",
    width: "100%"
  },
  topItem: {
    alignItems: "center",
    justifyContent: "center",
    width: "43%",
    height: "35%",
    alignItems: "center",
    padding: 10,
    margin: 10
  },
  bottomItem: {
    alignItems: "center",
    justifyContent: "center",
    width: "43%",
    height: "37%",
    alignItems: "center",
    padding: 20,
    margin: 10,
    borderRadius: 6,
    ...shadow
  },
  upperText: {
    fontWeight: "800",
    fontSize: 25,
    textAlign: "center",
    color: "#444"
  },
  bottomComponent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    height: "30%",
    width: "100%"
  },
  nextButton: {
    backgroundColor: nextButtonColor,
    padding: 20,
    borderRadius: 10,
    width: 360,
    alignItems: "center"
  },
  innerButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});

const questions = [
  "Who gets the most dates on Tinder?",
  "Why so many homeless?"
];