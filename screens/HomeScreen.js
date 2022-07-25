import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { nextButtonColor, shadow } from "../cssColors";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/AuthContext";
import { LocalizationContext } from "../context/LocalizationContext";

export default function MatchScreen({ navigation }) {
  const create_icon = require("../assets/views/2_main_menu/imgs/buttons/create.png");
  const language_icon = require("../assets/views/2_main_menu/imgs/buttons/language.png");

  const rules_icon = require("../assets/views/2_main_menu/imgs/buttons/rules.png");
  const start_icon = require("../assets/views/2_main_menu/imgs/buttons/start.png");

  const setLanguage = async () => {
    await AsyncStorage.setItem("@100_q_language", "english");
    console.log(await AsyncStorage.getItem("@100_q_language"));
  };

  useEffect(() => {
    getLanguage()
      .then((data) => data)
      .then((value) => {
        if (!value) setLanguage(value);
      })
      .catch((err) => console.log(err));
  }, []);

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

  const { userInfo } = useContext(AuthContext);
  const { i18n } = useContext(LocalizationContext);


  return (
    <View style={styles.container}>
      <View style={styles.headerComponent}>
        {userInfo ? (
          <TouchableOpacity
            style={{
              borderRadius: 40,
              height: 40,
              width: 40,
              backgroundColor: "#fff",
              marginTop: 20,
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("ProfileScreen")}
          >
            <Image
              source={{
                uri: `https://ui-avatars.com/api/?rounded=true&name=${userInfo.name}&background=#F2AD40&color=#fff`,
              }}
              resizeMode="contain"
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <FontAwesome5
              name="user-circle"
              size={40}
              color="#444"
              style={{ marginTop: 20 }}
            />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={{
            borderRadius: 40,
            height: 40,
            width: 40,
            backgroundColor: "#fff",
            marginTop: 20,

            borderWidth: 0.5,
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
              <View style={{ ...styles.circle, backgroundColor: "#55B6BD" }}>
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
                {i18n.t("play")}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() =>
              userInfo
                ? navigation.navigate("AddQuestionScreen")
                : navigation.navigate("LoginScreen")
            }
          >
            <View style={{ flexDirection: "column" }}>
              <View style={{ ...styles.circle, backgroundColor: "#324444" }}>
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
                {i18n.t("add")}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() => navigation.navigate("TutorialScreen")}
          >
            <View style={{ flexDirection: "column" }}>
              <View style={{ ...styles.circle, backgroundColor: "#DC5927" }}>
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
             {i18n.t("rules")}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() => navigation.navigate("LanguageScreen")}
          >
            <View style={{ flexDirection: "column" }}>
              <View style={{ ...styles.circle, backgroundColor: "#FDB050" }}>
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
                {i18n.t("language")}
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
    borderWidth: 0.5,
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
