import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function TutorialScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.message}>
      <Entypo name="info-with-circle" size={24} color="#0e566c" style={{paddingTop:10}} />
      <Text style={{color:"#0e566c", marginLeft: 20, padding:10}}>
        By Signing in you will help us extend our question base. 
        Created questions if selected will get credit.
      </Text>
      </View>
      <TouchableOpacity style={styles.socialItem}>
        <AntDesign name="apple1" size={24} color="black" />
        <Text style={styles.contentText}>Continue with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialItem}>
        <AntDesign name="google" size={24} color="black" />
        <Text style={styles.contentText}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  message: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 20,
    borderWidth: 0.5,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: "#0e566c",
    backgroundColor: "#a9d5de",
  },
  socialItem: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 20,
    borderWidth: 0.5,
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
