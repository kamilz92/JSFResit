import React, { useContext } from 'react';
import {ApiContext} from '../context/ApiContext';
import Card from '../components/Card';

const Home = () => {
const context = useContext(ApiContext);
    return ( 
        <main className="grid">
            {context.map((item) => <Card key={item.id} img={item.imageUrl} id={item.id} />)}
        </main>
     );
}
 
export default Home;