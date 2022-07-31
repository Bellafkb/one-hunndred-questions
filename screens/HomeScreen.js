import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { nextButtonColor, shadow } from "../cssColors";
import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import { LocalizationContext } from "../context/LocalizationContext";
import { ENV } from "../config";
import { env } from "@env";

const drawings = [
  {
    title: "Bottle of wine.",
    img: require("../assets/views/2_main_menu/imgs/drawings/drawing_1.png"),
  },
  {
    title: "Party digestif.",
    img: require("../assets/views/2_main_menu/imgs/drawings/drawing_2.png"),
  },
  {
    title: "Artists's diet.",
    img: require("../assets/views/2_main_menu/imgs/drawings/drawing_3.png"),
  },
  {
    title: "Blue curaçao.",
    img: require("../assets/views/2_main_menu/imgs/drawings/drawing_4.png"),
  },
  {
    title: "Exciting night.",
    img: require("../assets/views/2_main_menu/imgs/drawings/drawing_5.png"),
  },
  {
    title: "Wild mixture.",
    img: require("../assets/views/2_main_menu/imgs/drawings/drawing_6.png"),
  },
  {
    title: "Tired parent.",
    img: require("../assets/views/2_main_menu/imgs/drawings/drawing_7.png"),
  },
  {
    title: "Very first date.",
    img: require("../assets/views/2_main_menu/imgs/drawings/drawing_8.png"),
  },
  {
    title: "Special day.",
    img: require("../assets/views/2_main_menu/imgs/drawings/drawing_9.png"),
  },
  {
    title: "Vodka martini.",
    img: require("../assets/views/2_main_menu/imgs/drawings/drawing_10.png"),
  },
  {
    title: "Whiskey for one.",
    img: require("../assets/views/2_main_menu/imgs/drawings/drawing_11.png"),
  },
  {
    title: "Bottle pop.",
    img: require("../assets/views/2_main_menu/imgs/drawings/drawing_12.png"),
  },
  {
    title: "Drunk popsicle.",
    img: require("../assets/views/2_main_menu/imgs/drawings/drawing_13.png"),
  },
  {
    title: "Sunday Funday.",
    img: require("../assets/views/2_main_menu/imgs/drawings/drawing_14.png"),
  },
];

export default MatchScreen = ({ navigation }) => {
  const create_icon = require("../assets/views/2_main_menu/imgs/buttons/create.png");
  const language_icon = require("../assets/views/2_main_menu/imgs/buttons/language.png");

  const rules_icon = require("../assets/views/2_main_menu/imgs/buttons/rules.png");
  const start_icon = require("../assets/views/2_main_menu/imgs/buttons/start.png");

  const [topIndex, setTopIndex] = useState(0);
  const [botIndex, setBotIndex] = useState(6);

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
              ...shadow,
            }}
            onPress={() => navigation.navigate("ProfileScreen")}
          >
            <Image
              source={{
                uri: `https://ui-avatars.com/api/?rounded=true&name=${userInfo.name}&size=130`,
              }}
              resizeMode="contain"
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginScreen")}
            style={{
              borderRadius: 40,
              height: 40,
              width: 40,
              backgroundColor: "#fff",
              marginTop: 20,
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              ...shadow,
            }}
          >
            <MaterialCommunityIcons name="incognito" size={24} color="#444" />
          </TouchableOpacity>
        )}
        <Text>{`---> ${env?env: "prod"}`}</Text>

        <TouchableOpacity
          style={{
            borderRadius: 40,
            height: 40,
            width: 40,
            backgroundColor: "#fff",
            marginTop: 20,
            ...shadow,
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("SocialMediaScreen")}
        >
          <Entypo name="share" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ ...styles.container, padding: 10 }}>
        <View style={styles.topComponent}>
          <TouchableOpacity
            style={styles.topItem}
            onPress={() => {
              setTopIndex(topIndex !== 5 ? topIndex + 1 : 0);
            }}
          >
            <Image
              source={drawings[topIndex].img}
              style={{ width: "90%", height: "100%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={styles.topItem}>
            <Text
              style={{ fontWeight: "bold", fontSize: 25, textAlign: "center" }}
            >
              {drawings[topIndex].title}
            </Text>
          </View>
          <View style={styles.topItem}>
            <Text
              style={{ fontWeight: "bold", fontSize: 25, textAlign: "center" }}
            >
              {drawings[botIndex].title}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.topItem}
            onPress={() => {
              setBotIndex(botIndex !== 13 ? botIndex + 1 : 6);
            }}
          >
            <Image
              source={drawings[botIndex].img}
              style={{ width: "90%", height: "100%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.bottomComponent }}>
          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() => navigation.navigate("SelectGameModeScreen")}
          >
            <View style={{ ...styles.circle, backgroundColor: "#55B6BD" }}>
              <Image
                source={start_icon}
                style={{ width: 70, height: 70 }}
                resizeMode="contain"
              />
            </View>

            <Text
              style={{
                marginTop: 10,
                fontSize: 16,
                textAlign: "center",
              }}
            >
              {i18n.t("play")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() =>
              userInfo
                ? navigation.navigate("AddQuestionScreen")
                : navigation.navigate("LoginScreen")
            }
          >
            <View style={{ ...styles.circle, backgroundColor: "#324444" }}>
              <Image
                source={create_icon}
                style={{ width: 70, height: 70 }}
                resizeMode="contain"
              />
            </View>

            <Text
              style={{
                marginTop: 10,
                fontSize: 16,
                textAlign: "center",
              }}
            >
              {i18n.t("add")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() => navigation.navigate("TutorialScreen")}
          >
            <View style={{ ...styles.circle, backgroundColor: "#DC5927" }}>
              <Image
                source={rules_icon}
                style={{ width: 70, height: 70 }}
                resizeMode="contain"
              />
            </View>

            <Text
              style={{
                marginTop: 10,
                fontSize: 16,
                textAlign: "center",
              }}
            >
              {i18n.t("rules")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() => navigation.navigate("LanguageScreen")}
          >
            <View style={{ ...styles.circle, backgroundColor: "#FDB050" }}>
              <Image
                source={language_icon}
                style={{ width: 70, height: 70 }}
                resizeMode="contain"
              />
            </View>

            <Text
              style={{
                marginTop: 10,
                fontSize: 16,
                textAlign: "center",
              }}
            >
              {i18n.t("language")}
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
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    width: "43%",
    height: "40%",
    alignItems: "center",
    padding: 2,
    margin: 10,
    borderRadius: 5,
    ...shadow,
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
    justifyContent: "center",
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
    height: 65,
    width: 65,
    borderRadius: 65,
    justifyContent: "center",
    alignItems: "center",
  },
});
