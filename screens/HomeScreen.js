import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { nextButtonColor, shadow } from "../cssColors";
import { Entypo } from "@expo/vector-icons";

export default function MatchScreen({ navigation }) {
  const create_icon = require("../assets/views/2_main_menu/imgs/buttons/create.png");
  const language_icon = require("../assets/views/2_main_menu/imgs/buttons/language.png");

  const rules_icon = require("../assets/views/2_main_menu/imgs/buttons/rules.png");
  const start_icon = require("../assets/views/2_main_menu/imgs/buttons/start.png");

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
            padding: 10,
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
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
            <View style={{ flexDirection: "column" }}>
              <View style={styles.circle}>
                <Image
                  source={start_icon}
                  style={{ width: 70, height: 70 }}
                  resizeMode="contain"
                />
              </View>

              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Add
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() => navigation.navigate("AddQuestionScreen")}
          >
            <View style={{ flexDirection: "column" }}>
              <View style={styles.circle}>
                <Image
                  source={create_icon}
                  style={{ width: 70, height: 70 }}
                  resizeMode="contain"
                />
              </View>

              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Language
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() => navigation.navigate("TutorialScreen")}
          >
            <View style={{ flexDirection: "column" }}>
              <View style={styles.circle}>
                <Image
                  source={rules_icon}
                  style={{ width: 70, height: 70 }}
                  resizeMode="contain"
                />
              </View>

              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Language
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() => navigation.navigate("LanguageScreen")}
          >
            <View style={{ flexDirection: "column" }}>
              <View style={styles.circle}>
                <Image
                  source={language_icon}
                  style={{ width: 70, height: 70 }}
                  resizeMode="contain"
                />
              </View>

              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Language
              </Text>
            </View>
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
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    padding: 15,
  },
  headerComponent: {
    alignItems: "center",
    justifyContent: "space-between",
    height: "10%",
    flexDirection: "row",
  },
  topComponent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    height: "35%",
    width: "100%",
  },
  topItem: {
    alignItems: "center",
    justifyContent: "center",
    width: "43%",
    height: "35%",
    alignItems: "center",
    padding: 10,
    margin: 10,
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
    borderWidth:0.5
  },
  upperText: {
    fontWeight: "800",
    fontSize: 25,
    textAlign: "center",
    color: "#444",
  },
  bottomComponent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    height: "30%",
    width: "100%",
  },
  nextButton: {
    backgroundColor: nextButtonColor,
    padding: 20,
    borderRadius: 10,
    width: 360,
    alignItems: "center",
  },
  innerButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  circle: {
    backgroundColor: "#444",
    height: 80,
    width: 80,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});

const questions = [
  "Who gets the most dates on Tinder?",
  "Why so many homeless?",
];
