/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import api from "../service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const SessionsContext = createContext({});

export const SessionsProvider = ({ children }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
  const sessionsLogout = async () => {
    window.localStorage.clear()
    navigate("/")
  }
  const toggleMenu = () => {
    console.log(openSideMenu)
    setOpenSideMenu(!openSideMenu);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <SessionsContext.Provider value={{ sessionsLogin, sessionsRegister ,sessionsLogout,openSideMenu, setOpenSideMenu,toggleMenu,windowWidth}}>
      {children}
    </SessionsContext.Provider>
  );
};
