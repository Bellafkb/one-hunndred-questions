import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";


export default function StartScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "#444" }}>
        Choose a list of questions
      </Text>
      <View style={{ ...styles.card, marginTop: 50 }}>
        <View
          style={{
            alignItems: "center",
            height: "75%",
            borderTopEndRadius: 10,
            borderTopStartRadius: 10,
            backgroundColor: "#F2AD40",
          }}
        >
          <View
            style={{
              marginTop: 15,
              padding: 15,
              backgroundColor: "#eee",
              width: "80%",
              borderRadius: 20,
              alignContent: "center",
            }}
          >
            <Text
              style={{ alignSelf: "center", fontSize: 18, fontWeight: "bold" }}
            >
              Pepp
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "green",
              borderRadius: 50,
              marginRight: 10,
              marginTop: 10,
            }}
            onPress={() => {}}
          >
            <Text style={{ color: "#fff", padding: 10 }}>Purchase</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ ...styles.card }}>
        <View
          style={{
            alignItems: "center",
            height: "70%",
            backgroundColor: "#F2AD40",
            borderTopEndRadius: 10,
            borderTopStartRadius: 10,
          }}
        >
          <View
            style={{
              marginTop: 15,
              padding: 15,
              backgroundColor: "#eee",
              width: "80%",
              borderRadius: 20,
              alignContent: "center",
            }}
          >
            <Text
              style={{ alignSelf: "center", fontSize: 18, fontWeight: "bold" }}
            >
              Party questions
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "green",
              borderRadius: 50,
              marginRight: 10,
              marginTop: 10,
            }}
            onPress={() => {}}
          >
            <Text style={{ color: "#fff", padding: 10 }}>Purchase</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderTopWidth: 0.3,
          borderTopColor: "#444",
          marginVertical: 10,
        }}
      ></View>
      <TouchableOpacity
        style={{
          ...styles.card,
          height: "20%",
          backgroundColor: "#eee",
          justifyContent: "center",
          alignContent: "center",
        }}
        onPress={() =>
          navigation.navigate("MatchScreen", { mode: route.params.mode })
        }
      >
        <View>
          <Text
            style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}
          >
            Standard questions
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  card: {
    marginVertical: 10,
    flexDirection: "column",
    width: "100%",
    height: "30%",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
