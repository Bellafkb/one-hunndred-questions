import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { nextButtonColor } from "../cssColors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";
import { QuestionContext } from "../context/QuestionContext";
import { LocalizationContext } from "../context/LocalizationContext";
import { Spinner } from "../components/UtilityComponents";
export default function MatchScreen({ navigation, route }) {
  const [index, setIndex] = useState(0);
  const [showEverybodyDrinks, setShowEveryBodydrinks] = useState();
  const { locale } = useContext(LocalizationContext);
  const { fetchQuestions, questions, setQuestions, isLoading } =
    useContext(QuestionContext);

  useEffect(() => {
    const mode = route.params.mode;
    if (mode === 3) {
      fetchQuestions("FAMILY");
    } else if (mode === 2) {
      fetchQuestions("SAUCY");
    } else if (mode === 0) {
      fetchQuestions();
    } else if (mode === 1) {
      fetchQuestions();
    }
    return () => {
      setQuestions(null);
    };
  }, [route]);

  useEffect(() => {
    setShowEveryBodydrinks(!(index % 10 || index === 0));
  }, [index]);

  return (
    <View style={styles.container}>
      <Spinner isLoading={isLoading} />
      {questions && (
        <>
          <View style={styles.headerComponent}>
            <Ionicons name="ios-sunny" size={24} color="#444" />
            <View
              style={{
                width: 130,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Ionicons name="list" size={30} color="#444" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Ionicons name="close-circle" size={30} color="#444" />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 16 }}>
              {index + 1}/{questions.length}
            </Text>
          </View>
          <View style={styles.topComponent}>
            <Text style={styles.upperText}>
              {questions[index][locale === "en" ? "english" : "german"].trim()}
            </Text>
          </View>
          <View style={styles.bottomComponent}>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() =>
                questions.length - 1 === index
                  ? navigation.navigate("Home")
                  : setIndex(index + 1)
              }
            >
              <Text style={styles.innerButton}>NEXT QUESTION</Text>
            </TouchableOpacity>
          </View>
          <AllDrinkModal {...{ showEverybodyDrinks, setShowEveryBodydrinks }} />
        </>
      )}
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
    marginTop: 20,
    flexDirection: "row",
    padding: 20,
  },
  topComponent: {
    alignItems: "center",
    justifyContent: "center",
    height: "70%",
    width: "100%",
  },
  upperText: {
    fontWeight: "800",
    fontSize: 30,
    textAlign: "center",
    color: "#444",
    padding: 25,
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

const AllDrinkModal = ({ showEverybodyDrinks, setShowEveryBodydrinks }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={showEverybodyDrinks}
    >
      <View style={{ flex: 1 }}>
        <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />
        <View
          style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
        >
          <Text style={{ textAlign: "center" }}>
            <MaterialCommunityIcons
              name="party-popper"
              size={150}
              color="black"
            />
          </Text>

          <Text style={{ textAlign: "center", fontSize: 60, color: "red" }}>
            Everybody
          </Text>

          <Text style={{ textAlign: "center", fontSize: 35, color: "red" }}>
            {" "}
            gets a penalty
          </Text>
        </View>
        <View style={{ alignItems: "center", marginBottom: 60 }}>
          <Pressable
            onPress={() => {
              setShowEveryBodydrinks(false);
            }}
          >
            <AntDesign name="close" size={40} color="black" />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
