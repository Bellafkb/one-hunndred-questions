import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import SelectGameModeScreen from "./screens/SelectGameModeScreen";
import MatchScreen from "./screens/MatchScreen";
import HomeScreen from "./screens/HomeScreen";
import TutorialScreen from "./screens/TutorialScreen";
import LanguageScreen from "./screens/LanguageScreen";
import AddQuestionScreen from "./screens/QuestionListScreen";
import SocialMediaScreen from "./screens/SocialMediaScreen";
import StartScreen from "./screens/StartScreen";
import PreMatchStart from "./screens/PreMatchStart";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import QuestionsForm from "./screens/QuestionsForm";
import ProfileScreen from "./screens/ProfileScreen";
import Acknowlegements from "./screens/Acknowlegements";
import ErrorBoundry from "react-native-error-boundary";

import { AuthContext, AuthProvider } from "./context/AuthContext";
import { LocalizationProvider } from "./context/LocalizationContext";
import { QuestionProvider } from "./context/QuestionContext";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useContext } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ErrorBoundry>
      <LocalizationProvider>
        <AuthProvider>
          <QuestionProvider>
            <Navigation />
          </QuestionProvider>
        </AuthProvider>
      </LocalizationProvider>
    </ErrorBoundry>
  );
}

const Navigation = () => {
  const { userInfo } = useContext(AuthContext);
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
          options={({ navigation }) => ({
            title: "My questions",
            headerTitleStyle: { marginLeft: 60 },
            headerRight: () => (
              <TouchableOpacity
                // style={styles.addButton}

                onPress={() =>
                  navigation.navigate(
                    userInfo ? "QuestionsForm" : "LoginScreen"
                  )
                }
              >
                <Ionicons name="ios-add-outline" size={35} color="#444" />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity
                // style={styles.addButton}

                onPress={() => navigation.navigate("Home")}
              >
                <AntDesign name="arrowleft" size={25} color="black" />
              </TouchableOpacity>
            ),
          })}
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
        <Stack.Screen
          name="QuestionsForm"
          component={QuestionsForm}
          options={{ title: "Create a question" }}
        />

        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="Acknowlegements"
          component={Acknowlegements}
          options={{ title: "Acknowlegements" }}
        />
        <Stack.Screen
          name="PreMatchStart"
          component={PreMatchStart}
          options={{ title: "PreMatchStart" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
