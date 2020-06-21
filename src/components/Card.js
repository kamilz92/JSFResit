import React from "react";
import Button from "../components/Button";

const Card = ({ id, img }) => {
  return (
    <div className="card">
      <div className="card__imgWrapper">
        <img src={img} alt="" />
      </div>
      <Button to={`/${id}`}>
        Go to card
      </Button>
    </div>
  );
};

export default Card;
