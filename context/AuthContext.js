import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [loadingSplash, setLoadingSplash] = useState();

  const logout = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://0wc3wec9se.execute-api.eu-central-1.amazonaws.com/rel_v1/logout",

        {
          client_id: "6v4aetu12jjogflr2f9eqr4i1c",
          access_token: userInfo.access_token,
        }
      );

      await AsyncStorage.removeItem("userInfo");
      setUserInfo(null);
      setIsLoading(false);

      //   navigation.navigate("Home");
    } catch (error) {
      //   pushDropdownAlert(
      //     "error",
      //     "Error",
      //     `${error.response.data.message}`.split(":")[1]
      //   );
      console.log(error);
      await AsyncStorage.removeItem("userInfo");
      setUserInfo(null);
      setIsLoading(false);
    }
  };

  const postLogin = async (username, password) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://0wc3wec9se.execute-api.eu-central-1.amazonaws.com/rel_v1/login",

        { client_id: "6v4aetu12jjogflr2f9eqr4i1c", password, username }
      );
      const { access_token, refresh_token } = data.data;
      console.log(data.data);
      setUserInfo(data.data);

      await AsyncStorage.setItem("userInfo", JSON.stringify(data.data));

      setIsLoading(false);
    } catch (error) {
      //   pushDropdownAlert(
      //     "error",
      //     "Error",
      //     `${error.response.data.message}`.split(":")[1]
      //   );
      console.log(error);
      setIsLoading(false);
    }
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      console.log("-->", userInfo);
      setUserInfo(userInfo);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const resetState = async () => {
    setUserInfo(null);
  };

  useEffect(() => {
    isLoggedIn();
    return () => {};
  }, []);

  return (
    <AuthContext.Provider
      value={{
        setIsLoading,
        isLoading,
        postLogin,
        userInfo,
        logout,
        resetState,
        isLoggedIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
