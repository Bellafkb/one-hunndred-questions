import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { nextButtonColor } from "../cssColors";
import { Ionicons } from "@expo/vector-icons";

export default function MatchScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.headerComponent}>
        <Ionicons name="ios-sunny" size={24} color="black" />
        <View
          style={{
            width: 130,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
          <Ionicons name="list" size={24} color="black" />
          <Ionicons name="close-circle" size={24} color="black" />
        </View>
        <Text style={{ fontSize: 16 }}>
          {index + 1}/{questions.length}
        </Text>
      </View>
      <View style={styles.topComponent}>
        <Text style={styles.upperText}>{questions[index]}</Text>
      </View>
      <View style={styles.bottomComponent}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() =>
            questions.length - 1 === index
              ? navigation.navigate("Home")
              : setIndex(index + 1)
          }
        >
          <Text style={styles.innerButton}>NEXT QUESTION</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff"
  },
  headerComponent: {
    alignItems: "center",
    justifyContent: "space-between",
    height: "10%",
    flexDirection: "row",
    padding: 20
  },
  topComponent: {
    alignItems: "center",
    justifyContent: "center",
    height: "70%",
    width: "100%",
    
  },
  upperText: {
    fontWeight: "800",
    fontSize: 30,
    textAlign: "center",
    color: "#444"
  },
  bottomComponent: {
    alignItems: "center",
    justifyContent: "center",
    height: "20%"
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
