import React, { useContext } from 'react';
import {ApiContext} from '../context/ApiContext';
import Card from '../components/Card';
import Search from '../components/Search';

const Home = () => {
const context = useContext(ApiContext);
const handleSearch = (e) => {
    console.log(e.target.value)
}
    return ( 
        <main className="grid">
            <Search fn={(e) => handleSearch(e)} />
            {context.map((item) => <Card key={item.id} img={item.imageUrl} id={item.id} />)}
        </main>
     );
}
 
export default Home;