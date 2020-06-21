import React, { useState } from "react";
import Button from "./Button";
import ReadMore from "./ReadMore";

const CardDetails = ({ img, name, data }) => {
  const [info, setInfo] = useState(false);
  const handleClick = () => {
    setInfo(!info);
    console.log(info);
  };
  console.log(data.id);

  return (
    <div className="details">
      <Button to="/">Go back</Button>
      <div className="details__imgWrapper">
        <img className="details__img" src={img} alt="" />
      </div>
      <div className="details__context">
        <h2 className="details__heading">{name}</h2>
        <button onClick={handleClick} className="details__btn">
          {info ? "Close more info" : "Show more info"}
        </button>
        {info ? <ReadMore data={data}/> : null}
      </div>
    </div>
  );
};

export default CardDetails;
