import React, { useState, useEffect } from 'react';
import { API } from "../url/API";

const Home = () => {

    useEffect(() => {
        fetchPoke();
    }, []);

    const [items, setItems] = useState([]);

    const fetchPoke = async () => {
        const data = await fetch(API);
        const items = await data.json();
        console.log(items.cards);
        setItems(items.cards);
    }
    return ( 
        <main>
            {items.map((item) => (<p key={item.nationalPokedexNumber}>{item.name}</p>))}
        </main>
     );
}
 
export default Home;