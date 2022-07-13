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
        >
          <Text style={styles.header}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={styles.container}>
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
        onPress={() => navigation.navigate("MatchScreen", { mode })}
      >
        <Text style={styles.body}>START</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    padding: 100,
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
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    width: "100%",

    height: "90%",
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
    borderRadius: 40,
    alignItems: "center",
  },
  header: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    padding: 10,
  },
  nextButton: {
    backgroundColor: nextButtonColor,
    padding: 20,
    borderRadius: 10,
    width: 350,
    alignItems: "center",
  },
});
