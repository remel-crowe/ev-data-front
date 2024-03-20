import "./VehicleCard.scss";
import { GiPathDistance, GiSpeedometer } from "react-icons/gi";
import { TbCurrencyPound } from "react-icons/tb";

function VehicleCard({
  make,
  model,
  range,
  seats,
  speed,
  price,
  img,
  onclick,
}) {
  return (
    <div className="VehicleCard" onClick={onclick}>
      <p>{make}</p>
      <p className="large_title">
        {model.charAt(0).toUpperCase() + model.slice(1)}
      </p>
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
