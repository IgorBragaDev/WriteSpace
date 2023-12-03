/* eslint-disable react/prop-types */
import { createContext } from "react";
import api from "../service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const SessionsContext = createContext({});

export const SessionsProvider = ({ children }) => {
  const navigate = useNavigate();
  const sessionsLogin = async (data) => {
    try {
      const response = await api.post("sessions/login", data);
      window.localStorage.setItem("authToken", response.data.token);
      toast.success("Logado com sucesso", { autoClose: 2000 });
      navigate("/dashboard");
    } catch (error) {
      console.log(error, "algo deu errado na conection");
    }
  };

  return (
    <SessionsContext.Provider value={{ sessionsLogin }}>
      {children}
    </SessionsContext.Provider>
  );
};
