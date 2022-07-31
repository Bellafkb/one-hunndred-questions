import { Button, Linking, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const QuestionsForm = ({ navigation }) => {
  const { userInfo, resetState } = useContext(AuthContext);

  return (
    <View style={styles.screenContainer}>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ flexDirection: "column", margin: 20 }}>
          <Text style={styles.value}>10</Text>
          <Text style={styles.label}>Played</Text>
        </View>

        <View style={{ flexDirection: "column", margin: 20 }}>
          <Text style={styles.value}>10</Text>
          <Text style={styles.label}>Questions</Text>
        </View>
      </View>
    </View>
  );
};

export default QuestionsForm;

const styles = StyleSheet.create({
  label: { textAlign: "center", fontSize: 25, fontWeight: "bold" },
  value: { textAlign: "center", fontSize: 25 },
  screenContainer: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
    padding: 14,
  },
  textAreaContainer: {
    borderColor: "#ddd",
    borderWidth: 1,
    padding: 5,
    marginTop: 5,
    borderRadius: 10,
  },
  textArea: {
    height: 200,
    justifyContent: "flex-start",
  },
});
