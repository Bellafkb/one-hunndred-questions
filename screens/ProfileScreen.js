import { Button, Image, Linking, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { shadow } from "../cssColors";
import { config, ENV } from "../config";
import { env } from "@env";

const ProfileScreen = ({ navigation }) => {
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
          <View
            style={{
              borderRadius: 110,
              borderWidth: 5,
              width: 110,
              height: 110,
              ...shadow,
              alignSelf: "center",
            }}
          >
            <Image
              source={{
                uri: `https://ui-avatars.com/api/?rounded=true&name=${userInfo.name}&size=130`,
              }}
              resizeMode="contain"
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
              }}
            />
          </View>

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
          console.log(`https://one-hundred-questions.auth.eu-central-1.amazoncognito.com/logout?client_id=${
            config().client_id
          }&response_type=token&scope=email+openid+profile&redirect_uri=${
            config().login_callback
          }&logout_uri=${config().logout_callback}`)
          Linking.openURL(
            `https://one-hundred-questions.auth.eu-central-1.amazoncognito.com/logout?client_id=${
              config().client_id
            }&response_type=token&scope=email+openid+profile&redirect_uri=${
              config().login_callback
            }&logout_uri=${config().logout_callback}`
          );
          navigation.navigate("Home");
        }}
      ></Button>
    </View>
  );
};

export default ProfileScreen;

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
  label: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
  },
  value: { textAlign: "center", fontSize: 20, color: "grey" },
});
