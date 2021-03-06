import React from "react";
import SliderIntro from "react-native-slider-intro";

const slides = [
  {
    index: 1,
    title: "First step",
    text: "The owner of the phone begins.",
    image: require("../assets/views/7_rules/imgs/rules_images/rules_1.png"),
    backgroundColor: "#595959"
  },
  {
    index: 2,
    title: "Second step",
    text: "Read the question on the screen out loud.",
    image: require("../assets/views/7_rules/imgs/rules_images/rules_2_english.png"),
    backgroundColor: "#595959"
  },
  {
    index: 3,
    title: "Third step",
    text: "Pass the phone to the personn suiting the question.",
    image: require("../assets/views/7_rules/imgs/rules_images/rules_3.png"),
    backgroundColor: "#595959"
  },
  {
    index: 4,
    title: "Fourth step",
    text:
      "The chosen person takes, gets a penalty and forwards to the next question",
    image: require("../assets/views/7_rules/imgs/rules_images/rules_4.png"),
    backgroundColor: "#595959"
  }
];

export default BasicExample = ({ navigation }) => {
  return (
    <SliderIntro
      navContainerMaxSizePercent={0.12}
      data={slides}
      onDone={() => navigation.navigate("Home")}
      onSkip={() => navigation.navigate("Home")}
    />
  );
};
