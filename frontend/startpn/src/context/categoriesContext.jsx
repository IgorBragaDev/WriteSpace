import { createContext, useEffect, useState } from "react";
import api from "../service";
import { useNavigate } from "react-router-dom";

export const CategoriesContext = createContext({});

export const CategoriesProvider = ({ children }) => {
  const userToken = localStorage.getItem("authToken");
  const [categories, setCategories] = useState([]);
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
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

  const createCard = async (data) => {
    console.log(data);
    const { id_category, ...rest } = data;
    try {
      const response = await api.post(`methodology/${id_category}`, rest, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CategoriesContext.Provider
      value={{
        categories,
        addCategories,
        openModal,
        closeModal,
        isModalOpen,
        getCategoriesCards,
        cards,
        createCard,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
