import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import Card from '../components/Card';

const Grass = () => {
  const context = useContext(ApiContext);
  const type = context.filter(item => item.types);
  const grass = type.filter(item => item.types.includes("Grass"));
  return (
    <main>
      {grass.map((item)=> <Card img={item.imageUrl} id={item.id}/>)}
    </main>
  );
};

export default Grass;
