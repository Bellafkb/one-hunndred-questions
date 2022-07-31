import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Message } from "../components/UtilityComponents";
import * as Linking from "expo-linking";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import { AuthContext } from "../context/AuthContext";
import { config, ENV } from "../config";
import { env } from "@env";

export default function TutorialScreen({ navigation }) {
  const { isLoggedIn } = useContext(AuthContext);

  const handleDeepLink = (event) => {
    let data = Linking.parse(event.url.replace("#", "?"));
    const { access_token, id_token } = data.queryParams;
    
    if (access_token && id_token) {
      AsyncStorage.setItem("access_token", access_token);
    AsyncStorage.setItem("id_token", id_token);
    console.log(jwt_decode(id_token));

    AsyncStorage.setItem("userInfo", JSON.stringify(jwt_decode(id_token)));
    isLoggedIn();
      navigation.navigate("AddQuestionScreen");
    }
  };

  useEffect(() => {
    Linking.addEventListener("url", handleDeepLink);
    return () => {
      Linking.removeEventListener("url");
    };
  }, []);

  return (
    <View style={styles.container}>
      <Message
        content={
          "By Signing in you will help us extend our question base. Created questions if selected will get credit."
        }
      />

      <TouchableOpacity
        style={{ ...styles.socialItem, backgroundColor: "#444" }}
        onPress={() => navigation.navigate("QuestionsForm")}
      >
        <AntDesign name="apple1" size={24} color="#fff" />
        <Text style={styles.contentText}>Continue with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.socialItem, backgroundColor: "#4E7BE1" }}
        onPress={() =>
          Linking.openURL(
            `https://one-hundred-questions.auth.eu-central-1.amazoncognito.com/oauth2/authorize?identity_provider=Google&redirect_uri=${
              config().login_callback
            }&response_type=TOKEN&client_id=${
              config().client_id
            }&scope=email openid profile`
          )
        }
      >
        <AntDesign name="google" size={24} color="#fff" />
        <Text style={styles.contentText}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  socialItem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 20,
    borderWidth: 0.5,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  contentText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 30,
  },
});
