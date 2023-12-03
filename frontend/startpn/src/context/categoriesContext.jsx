import { createContext, useEffect, useState } from "react";
import api from "../service";

export const CategoriesContext = createContext({});

export const CategoriesProvider = ({ children }) => {
  const userToken = localStorage.getItem("authToken");
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const getUserCategories = async () => {
    try {
      const response = await api.get("categories", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log(response);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getUserCategories = async () => {
      try {
        const response = await api.get("categories", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        });
        console.log(response);
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (userToken) {
      getUserCategories();
    }
  }, [userToken]);

  const addCategories = async (data) => {
    console.log(data);
    try {
      const response = await api.post("categories", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });
      getUserCategories();
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CategoriesContext.Provider
      value={{ categories, addCategories, openModal, closeModal, isModalOpen }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
