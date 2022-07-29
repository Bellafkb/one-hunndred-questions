import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

import { Button, Message } from "../components/UtilityComponents";
import { nextButtonColor } from "../cssColors";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const QuestionsForm = ({ navigation }) => {
  const [question, setQuestion] = useState();
  const submitQuestion = async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      await axios.post(
        "https://i312ipsw5a.execute-api.eu-central-1.amazonaws.com/api/questions/create",
        { english: question },
        { headers: { Authorization: `Bearer ${access_token}` , client_id: "a09ds8a0d8a08a09s8d"} }
      );

      navigation.navigate("AddQuestionScreen");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Message content={"Help us expand our question base"} />
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          placeholder="Type something"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
          onChangeText={(e) => setQuestion(e)}
        />
      </View>
      <View style={{ marginTop: 25 }}>
        <Button
          content={"Create"}
          backgroundColor={nextButtonColor}
          onPress={() => submitQuestion()}
        />
      </View>
    </View>
  );
};

export default QuestionsForm;

const styles = StyleSheet.create({
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
