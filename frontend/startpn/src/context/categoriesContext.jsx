import { createContext, useEffect, useState } from "react";
import api from "../service";

export const CategoriesContext = createContext({});

export const CategoriesProvider = ({ children }) => {
  const userToken = localStorage.getItem("authToken");
  const [categories, setCategories] = useState([]);

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
  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
