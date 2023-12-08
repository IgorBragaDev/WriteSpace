import AsyncStorage from "@react-native-async-storage/async-storage";
import { Children, createContext, useEffect, useState } from "react";
import api from "../services/api";

export const CategoriesContext = createContext({});

export const CateoriesProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [categories, setCategories] = useState([]);
  const [cards, setCards] = useState([]);
  const [addCategoriesModal, setAddCategoriesModal] = useState(null);

  useEffect(() => {
    const fetchUserToken = async () => {
      try {
        const authToken = await AsyncStorage.getItem("authToken");
        setUserToken(authToken);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserToken();
  }, []);

  const getUserCategories = async () => {
    try {
      const response = await api.get("categories", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });
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
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (userToken) {
      getUserCategories();
    }
  }, [userToken]);

  const getCategoriesCards = async (id) => {
    try {
      const response = await api.get(`methodology/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });

      setCards(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const addCategories = async (data) => {
    try {
      const response = await api.post("categories", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });
      getUserCategories();
      setAddCategoriesModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        getUserCategories,
        getCategoriesCards,
        cards,
        addCategoriesModal,
        setAddCategoriesModal,
        addCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
