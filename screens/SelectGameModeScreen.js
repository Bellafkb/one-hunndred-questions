import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { nextButtonColor } from "../cssColors";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import Carousel from "react-native-snap-carousel";


export default function MatchScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <Carousel
              // ref={(c) => { _carousel = c; }}
              data={entries}
              renderItem={[{title: "asd", }]}
              sliderWidth={100}
              itemWidth={100}
            />
      {/* <View style={styles.headerComponent}></View>
      <ScrollView horizontal style={{ height: "70%" }}>
        {modes.map(mode => (
          <View
            style={{
              ...styles.topComponent,
              backgroundColor: mode.backgroundColor,
              margin: 10
            }}
          >
            <FontAwesome5 name={mode.icon} size={100} color="#fff" />
            <Text style={{ fontSize: 40, color: "#fff" }}>{mode.header}</Text>
            <Text style={{ fontSize: 16, color: "#fff", textAlign: "center" }}>
              {mode.content}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomComponent}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("MatchScreen")}
        >
          <Text style={styles.innerButton}>START</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  headerComponent: {
    alignItems: "center",
    justifyContent: "space-between",
    height: "10%",
    flexDirection: "row",
  },
  topComponent: {
    alignItems: "center",
    justifyContent: "space-between",
    height: "70%",
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#3F6226",
    width: 370,
  },
  upperText: {
    fontWeight: "800",
    fontSize: 30,
    textAlign: "center",
    color: "#444",
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
    width: 360,
    alignItems: "center",
  },
  innerButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

const modes = [
  {
    icon: "random",
    header: "Random",
    content: `100 random questions out of the question pool (including 400
      questions + your questions)`,
    backgroundColor: "#3F6226",
  },
  {
    icon: "random",
    header: "Random",
    content: `100 random questions out of the question pool (including 400
      questions + your questions)`,
    backgroundColor: "#3F6226",
  },
  {
    icon: "random",
    header: "Random",
    content: `100 random questions out of the question pool (including 400
      questions + your questions)`,
    backgroundColor: "#3F6226",
  },
];
