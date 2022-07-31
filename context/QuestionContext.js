import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";
import { config } from "../config";

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [questions, setQuestions] = useState();

  const fetchQuestions = async (category, tag) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${config().rest_api}/questions`, {
        params: {
          category,
          tag,
        },
      });

      console.log(data.data);
      setQuestions(data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
      setIsLoading(false);
    }
  };

  const fetchQuestionsByUsername = async () => {
    try {
      setIsLoading(true);
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios.get(
        `${config().rest_api}/questions/by_username`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            client_id: config().client_id,
          },
        }
      );
      console.log(data);
      setQuestions(data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <QuestionContext.Provider
      value={{
        fetchQuestions,
        questions,
        setQuestions,
        isLoading,
        fetchQuestionsByUsername,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
