import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import CardDetails from '../components/CardDetails';
import Error from "../components/Error";

const CardDetailsPage = () => {
  const context = useContext(ApiContext);
  const { id } = useParams();
  const details = context.filter((item) => item.id === id);
  console.log(details);
  return (
    <>
      {details.length === 1 ? (
        details.map((item) => {
          return <CardDetails key={item.id} img={item.imageUrlHiRes} name={item.name} data={item} />})
      ) : (
        <Error id={id} />
      )}
    </>
  );
};

export default CardDetailsPage;
