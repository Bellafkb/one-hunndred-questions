import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Spinner from "react-native-loading-spinner-overlay";

import { nextButtonColor } from "../cssColors";
import { Ionicons } from "@expo/vector-icons";

import { AuthContext } from "../context/AuthContext";
import { QuestionContext } from "../context/QuestionContext";

export default function QuestionsList({ navigation }) {
  const { fetchQuestionsByUsername, isLoading, questions } =
    useContext(QuestionContext);

  useEffect(() => {
    fetchQuestionsByUsername();
    return () => {};
  }, []);

  const { userInfo } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {isLoading && <Spinner visible={true} animation="none" />}

      {questions && (
        <ScrollView style={{ width: "100%", padding: 14, marginBottom: 20 }}>
          {questions.map((item, key) => (
            <View style={styles.message} key={key}>
              <Text style={{ color: "#0e566c" }}>
                {new Date(item.created_at).toISOString()}
              </Text>
              <Text style={{ color: "#0e566c", fontSize: 18 }}>
                {item.english}
              </Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  message: {
    width: "100%",
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
    height: "80%",
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
