/* eslint-disable react/prop-types */
import { createContext } from "react";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SessionsContext = createContext({});

export const SessionsProvider = ({ children }) => {
  const navigate = useNavigation();
  const sessionsLogin = async (data) => {
    try {
      const response = await api.post("sessions/login", data);
      await AsyncStorage.setItem("authToken", response.data.token);

      navigate("/dashboard");
    } catch (error) {
      console.log(error, "algo deu errado na conection");
    }
  };

  const sessionsRegister = async (data) => {
    const { checkpassword, ...requestData } = data;
    try {
      const response = await api.post("sessions", requestData);
      console.log(response);
      navigate("/login");
    } catch (error) {}
  };
  const sessionsLogout = async () => {
    window.localStorage.clear();
    navigate("/");
  };
  return (
    <SessionsContext.Provider
      value={{ sessionsLogin, sessionsRegister, sessionsLogout }}
    >
      {children}
    </SessionsContext.Provider>
  );
};
