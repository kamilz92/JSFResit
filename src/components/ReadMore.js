import React from "react";

const ReadMore = ({ data }) => {
  return (
    <ul className="details__list">
      {Object.keys(data).map(function (keyName, keyIndx) {
        let info = data[keyName];
        if (typeof info === "object") {
          let data = info.toString();
          console.log(data, info);
          return (
            <li className="details__item" key={keyIndx}>
              {keyName}:
              {data}
            </li>
          );
        } else {
          return (
            <li className="details__item" key={keyIndx}>
              {keyName}: {info}
            </li>
          );
        }
      })}
    </ul>
  );
};

export default ReadMore;
