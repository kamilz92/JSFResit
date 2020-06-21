import React, { useContext } from 'react';
import {ApiContext} from '../context/ApiContext';

const Home = () => {
const context = useContext(ApiContext);
    return ( 
        <main>
            {context.map((item) => <p>{item.name}</p>)}
        </main>
     );
}
 
export default Home;