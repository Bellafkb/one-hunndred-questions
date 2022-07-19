import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SelectGameModeScreen from "./screens/SelectGameModeScreen";
import MatchScreen from "./screens/MatchScreen";
import HomeScreen from "./screens/HomeScreen";
import TutorialScreen from "./screens/TutorialScreen";
import LanguageScreen from "./screens/LanguageScreen";
import AddQuestionScreen from "./screens/AddQuestionScreen";
import SocialMediaScreen from "./screens/SocialMediaScreen";
import StartScreen from "./screens/StartScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen.js";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="SelectGameModeScreen"
          component={SelectGameModeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MatchScreen"
          component={MatchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TutorialScreen"
          component={TutorialScreen}
          options={{ title: "Tutorial", headerShown: false }}
        />
        <Stack.Screen
          name="AddQuestionScreen"
          component={AddQuestionScreen}
          options={{ title: "Add Questions" }}
        />
        <Stack.Screen
          name="LanguageScreen"
          component={LanguageScreen}
          options={{ title: "Languages" }}
        />
        <Stack.Screen
          name="SocialMediaScreen"
          component={SocialMediaScreen}
          options={{ title: "Social Media" }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "Sign in" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
