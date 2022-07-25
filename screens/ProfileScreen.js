import { Button, Image, Linking, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";

const QuestionsForm = ({ navigation }) => {
  const { userInfo, resetState } = useContext(AuthContext);

  return (
    <View style={styles.screenContainer}>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <Image
            source={{
              uri: `https://ui-avatars.com/api/?rounded=true&name=${userInfo.name}&background=#F2AD40&color=#fff&size=200`,
            }}
            resizeMode="contain"
            style={{ width: 100, height: 100, alignSelf: "center" }}
          />
          <Text
            style={{
              alignSelf: "center",
              fontSize: 24,
              marginTop: 14,
              color: "grey",
            }}
          >
            {userInfo.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            padding: 15,
            borderColor: "grey",
            marginTop: 50,
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <FontAwesome name="user" size={24} color="grey" />
          </View>
          <View style={{ marginLeft: 15, justifyContent: "center" }}>
            <Text style={{ fontSize: 20, color: "grey" }}>{userInfo.name}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            borderTopWidth: 0.5,
            padding: 15,
            borderColor: "grey",
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <MaterialIcons name="email" size={23} color="grey" />
          </View>
          <View
            style={{
              marginLeft: 15,
              justifyContent: "center",
              color: "grey",
              borderTopColor: "grey",
            }}
          >
            <Text style={{ fontSize: 20, color: "grey" }}>
              {userInfo.email}
            </Text>
          </View>
        </View>
      </View>

      <Button
        style={{ marginBottom: 40 }}
        title="Logout"
        onPress={() => {
          AsyncStorage.removeItem("access_token");
          AsyncStorage.removeItem("id_token");
          AsyncStorage.removeItem("userInfo");
          resetState();
          Linking.openURL(
            // "https://one-hundred-questions.auth.eu-central-1.amazoncognito.com/logout?client_id=374fmh31lmpl8ae7gvfnto4mjp&response_type=token&scope=email+openid+profile&redirect_uri=exp://28-8xe.b-bellafkir.react-native-drinking-game.exp.direct:80"
            "https://one-hundred-questions.auth.eu-central-1.amazoncognito.com/logout?client_id=374fmh31lmpl8ae7gvfnto4mjp&response_type=token&scope=email+openid+profile&redirect_uri=exp://exp.host/@b.bellafkir/100-questions&logout_uri=exp://exp.host/@b.bellafkir/100-questions"
          );
          navigation.navigate("Home");
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
