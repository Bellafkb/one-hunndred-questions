import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
  Entypo,
  AntDesign,
  FontAwesome,
  MaterialIcons,
  FontAwesome5
} from "@expo/vector-icons";

export default function TutorialScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.socialItem}>
        <Entypo name="instagram" size={24} color="black" />
        <Text style={styles.contentText}>Instagram</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialItem}>
        <AntDesign name="twitter" size={24} color="black" />
        <Text style={styles.contentText}>Twitter</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.socialItem}>
        <FontAwesome name="podcast" size={24} color="black" />
        <Text style={styles.contentText}>Podcast</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.socialItem}>
        <FontAwesome5 name="readme" size={24} color="black" />
        <Text style={styles.contentText}>Acknolegements</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialItem}>
        <MaterialIcons name="privacy-tip" size={24} color="black" />
        <Text style={styles.contentText}>Privacy Policy</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  socialItem: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#fff"
  },
  contentText: {
    color: "#444",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 30
  }
});
