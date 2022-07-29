import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";

import Carousel from "react-native-snap-carousel";
import { nextButtonColor } from "../cssColors";
export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default function MatchScreen({ navigation }) {
  const data = [
    {
      title: "Random",
      body: "100 random questions out of the question pool.",
      imgUrl: require("../assets/views/8_start/imgs/gamemodes/random.png"),
    },
    {
      title: "Classic",
      body: "The classic game mode. 100 greatly chosen questions in a strict order. The best option for people who haven't played yet.",
      imgUrl: require("../assets/views/8_start/imgs/gamemodes/classic.png"),
    },
    {
      title: "Sexual",
      body: "A mode for all the horny people out there that want to know more about other people's sex life. This list contains ONLY sex-related questions.",
      imgUrl: require("../assets/views/8_start/imgs/gamemodes/sexual.png"),
    },
    {
      title: "Friendly",
      body: "This mode removes all sex-related questions and forms a random list out of the remaining questions.",
      imgUrl: require("../assets/views/8_start/imgs/gamemodes/family.png"),
    },
  ];
  const isCarousel = React.useRef(null);
  const [mode, setMode] = useState(0);
  const CarouselCardItem = ({ item, index }) => {
    const imgUrl = item.imgUrl;

    return (
      <View style={styles.card} key={index}>
        <ImageBackground
          source={imgUrl}
          resizeMode="cover"
          style={styles.image}
          imageStyle={{ borderRadius: 5 }}
        >
          <Text style={styles.header}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.ScreenHeader}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.newModeButton}>
          <Text style={styles.newModeButtonInner}>New Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="question" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}

        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(index) => setMode(index)}
      />
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("PreMatchStart", { mode })}
      >
        <Text style={styles.innerButton}>START</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  newModeButton: {
    backgroundColor: "#C42E2B",
    padding: 10,
    borderRadius: 5,
    width: "40%",
    alignItems: "center",
  },
  newModeButtonInner: {
    color: "#fff",
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  ScreenHeader: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 5,
    width: "100%",
    height: "95%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  header: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
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
  body: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
