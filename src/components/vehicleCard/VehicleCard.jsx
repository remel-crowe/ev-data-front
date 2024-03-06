import "./VehicleCard.scss";
import { GiPathDistance, GiSpeedometer } from "react-icons/gi";
import { TbCurrencyPound } from "react-icons/tb";

function VehicleCard({ make, model, range, seats, speed, price, img }) {
  return (
    <div className="VehicleCard">
      <p>{make}</p>
      <p className="large_title">{model}</p>
      <img className="large_image" src={`/Car-Models${img}.jpeg`}></img>
      <div className="large_specs">
        <div className="range_container">
          <GiPathDistance />
          <p>{range} Mi</p>
        </div>
        <div className="speed_container">
          <GiSpeedometer />
          <p>{speed} Mph</p>
        </div>
        <div className="price_container">
          <TbCurrencyPound />
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
}

export default VehicleCard;
