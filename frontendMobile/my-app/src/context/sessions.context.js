/* eslint-disable react/prop-types */
import { createContext } from "react";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SessionsContext = createContext({});

export const SessionsProvider = ({ children }) => {
  const navigation = useNavigation();
  const sessionsLogin = async (data) => {
    try {
      const response = await api.post("sessions/login", data);
      await AsyncStorage.setItem("authToken", response.data.token);
      navigation.navigate("dashboard");
    } catch (error) {
      console.log(error, "algo deu errado na conection");
    }
  };

  const sessionsRegister = async (data) => {
    const { checkpassword, ...requestData } = data;
    try {
      const response = await api.post("sessions", requestData);
      console.log(response.data)
      navigation.navigate("Login");
    } catch (error) {}
  };
  const sessionsLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Login");
  };
  return (
    <SessionsContext.Provider
      value={{ sessionsLogin, sessionsRegister, sessionsLogout }}
    >
      {children}
    </SessionsContext.Provider>
  );
};
