import { createContext, useEffect, useState } from "react";
import api from "../service";
import { useNavigate } from "react-router-dom";

export const CategoriesContext = createContext({});

export const CategoriesProvider = ({ children }) => {
  const userToken = localStorage.getItem("authToken");
  const [categories, setCategories] = useState([]);
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [activeCard, setActiveCard] = useState({});
  const navigate = useNavigate();
  const openModal = () => {
    setIsModalOpen(true);
  };
  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategoryId(categoryId);
    getCategoriesCards(categoryId);
  };

  const getUserCategories = async () => {
    console.log(userToken)
    try {
      const response = await api.get("categories", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log(response)
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
        console.log(response)
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

  const editCategories = async (data) => {
    try {
      const response = await api.put(`categories/${activeCategoryId}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });
      getUserCategories();
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
    const { id_category, ...rest } = data;
    try {
      const response = await api.post(`methodology/${id_category}`, rest, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log(response)
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const editCard = async (id , data) => {
    console.log(id)
    console.log(data)
    try {
      const response = await api.put(`methodology/card/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });
      getCategoriesCards(id)
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }
  
  const getCardById = async (id) => {
    try {
      const response = await api.get(`methodology/card/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });
      setActiveCard(response.data);
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
        handleCategoryClick,
        activeCategoryId,
        isEditModalOpen,
        setEditModalOpen,
        openEditModal,
        closeEditModal,
        editCategories,
        getCardById,
        activeCard,
        editCard
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
