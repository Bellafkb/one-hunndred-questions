import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState();

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
        userInfo,
        resetState,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
