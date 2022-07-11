import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Button,
} from "react-native";


const img = require("../assets/views/1_intro_screen/imgs/intro.png");

export default function TutorialScreen({navigation}) {
  return (
   
    <ImageBackground
      source={img}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Button title="Touch to start" onPress={()=> navigation.navigate("Home")}/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  socialItem: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  contentText: {
    color: "#444",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 30,
  },
});
