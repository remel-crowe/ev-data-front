import React from "react";
import "./LargeCard.scss";

function LargeCard({ make, model, range, seats, speed, pos }) {
  return (
    <div className="LargeCard">
      <p className="large_title">{model}</p>
      <img
        className="large_image"
        src="/public/tesla-model-x-sedan-DxG8ZoD-600.jpg"
      ></img>

      <ul className="large_specs">
        <li>range:{range}Mi</li>
        <li>speed:{speed}Mph</li>
        <li>seats:{seats}</li>
      </ul>
    </div>
  );
}

export default LargeCard;
