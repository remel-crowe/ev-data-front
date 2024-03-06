import React from "react";
import "./LargeCard.scss";

function LargeCard({ make, model, range, seats, speed, price, img }) {
  return (
    <div className="LargeCard">
      <p>{make}</p>
      <p className="large_title">{model}</p>
      <img className="large_image" src={`/Car-Models${img}.jpeg`}></img>
      <ul className="large_specs">
        <li>Range:{range}Mi</li>
        <li>Speed:{speed}Mph</li>
        <li>Price: ~£{price}</li>
      </ul>
    </div>
  );
}

export default LargeCard;
