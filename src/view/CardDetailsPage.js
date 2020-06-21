import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import Error from "../components/Error";

const CardDetails = () => {
  const context = useContext(ApiContext);
  const { id } = useParams();
  const details = context.filter((item) => item.id === id);
  console.log(details);
  return (
    <>
      {details.length === 1 ? (
        details.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })
      ) : (
        <Error id={id} />
      )}
    </>
  );
};

export default CardDetails;
