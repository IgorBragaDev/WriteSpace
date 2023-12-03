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
      toast.error("Usuario ou senha incorretos", { autoClose: 2000 });
      console.log(error, "algo deu errado na conection");
    }
  };

  const sessionsRegister = async (data) => {
    const { checkpassword, ...requestData } = data;
    try {
      const response = await api.post("sessions", requestData);
      console.log(response);
      toast.success("Usuario criado com sucesso", { autoClose: 2000 });

      navigate("/login");
    } catch (error) {
      toast.error(`${error.response.data.error}`, { autoClose: 2000 });
    }
  };
  return (
    <SessionsContext.Provider value={{ sessionsLogin, sessionsRegister }}>
      {children}
    </SessionsContext.Provider>
  );
};
