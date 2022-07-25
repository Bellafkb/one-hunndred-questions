import { Button, Linking, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const QuestionsForm = ({ navigation }) => {
  const { userInfo, resetState } = useContext(AuthContext);

  return (
    <View style={styles.screenContainer}>
      <View style={{ flex: 1 }}>
        <Text>{JSON.stringify(userInfo)}</Text>
      </View>

      <Button
        style={{ marginBottom: 40 }}
        title="Logout"
        onPress={() => {
          AsyncStorage.removeItem("access_token")
          AsyncStorage.removeItem("id_token")
          AsyncStorage.removeItem("userInfo")
          resetState()
          Linking.openURL(
            "https://one-hundred-questions.auth.eu-central-1.amazoncognito.com/logout?client_id=374fmh31lmpl8ae7gvfnto4mjp&response_type=token&scope=email+openid+profile&redirect_uri=exp://28-8xe.b-bellafkir.react-native-drinking-game.exp.direct:80"
          );
          navigation.navigate("Home")
        }}
      ></Button>
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
