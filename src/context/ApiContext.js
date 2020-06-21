import React, { createContext, useState, useEffect } from "react";
import { API } from "../url/API";

export const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
  useEffect(() => {
    fetchPoke();
  }, []);

  const [items, setItems] = useState([]);

  const fetchPoke = async () => {
    const data = await fetch(API);
    const items = await data.json();
    setItems(items.cards);
  };
  const searchFn = (e) => {
    console.log(e.target.value)
  };
  return (
    <ApiContext.Provider value={{ items, searchFn }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
