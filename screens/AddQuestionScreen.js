import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { nextButtonColor } from "../cssColors";
import { Entypo, Ionicons } from "@expo/vector-icons";

export default function TutorialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.bot}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          no questions created yet
        </Text>
      </View>
      {/* <ScrollView>
        {[1, 23, 45, 6, 6, 6, 6, 6].map(() => (
          <View style={styles.message}>
            <Text style={{ color: "#0e566c" }}>
              Created 1 day ago
            </Text>
            <Text style={{ color: "#0e566c" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              fermentum dui. Ut orci quam, ornare sed lorem sed, hendrerit.
            </Text>
          </View>
        ))}
      </ScrollView> */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Ionicons name="ios-add-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    width: "98%",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 14,
    borderWidth: 0.5,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: "#0e566c",
    backgroundColor: "#fff",
  },
  bot: {
    height: "90%",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    height: "20%",
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
  addButton: {
    backgroundColor: nextButtonColor,
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    marginRight: 30,
    marginBottom: 30,
  },
  innerButton: {
    color: "#fff",
    fontSize: 30,
  },
  contentText: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
