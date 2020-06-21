import React, { createContext, useState,useEffect } from "react";
import { API } from "../url/API";

export const ApiContext = createContext();

const ApiContextProvider = ({children}) => {
       
    useEffect(() => {
        fetchPoke();
    }, []);

    const [items, setItems] = useState([]);

    const fetchPoke = async () => {
        const data = await fetch(API);
        const items = await data.json();
        setItems(items.cards);
    }
    return (
        <ApiContext.Provider value={items}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiContextProvider;