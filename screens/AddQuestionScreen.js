import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { nextButtonColor } from "../cssColors";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/AuthContext";

export default function TutorialScreen({ navigation }) {
  const [state, setstate] = useState();
  const [isLoading, setIsLoading] = useState();

  const fetchQuestions = async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios.get(
        "https://i312ipsw5a.execute-api.eu-central-1.amazonaws.com/api/questions/by_username",
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            client_id: "a09ds8a0d8a08a09s8d",
          },
        }
      );
      console.log(data);
      setstate(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuestions();
    return () => {};
  }, []);

  const { userInfo } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {isLoading && !state && (
        <View style={styles.bot}>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            no questions created yet
          </Text>
        </View>
      )}
      <ScrollView style={{ width: "100%", padding: 14 }}>
        {state &&
          state.map((item) => (
            <View style={styles.message}>
              <Text style={{ color: "#0e566c" }}>
                {new Date(item.created_at).toISOString()}
              </Text>
              <Text style={{ color: "#0e566c", fontSize: 18 }}>
                {item.english}
              </Text>
            </View>
          ))}
      </ScrollView>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            navigation.navigate(userInfo ? "QuestionsForm" : "LoginScreen")
          }
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
