import "./VehicleModal.scss";

function VehicleModal({ vehicle, setShow }) {
  const {
    Brand,
    Model,
    _id,
    path,
    PriceGBP,
    RapidCharge,
    PlugType,
    BodyStyle,
    Seats,
    PowerTrain,
    Range_Mi,
    AccelSec,
    TopSpeed_MpH,
  } = vehicle;
  return (
    <div className="vehicle_modal">
      <h1 className="vehicle_brand">{Brand}</h1>
      <img className="car_image" src={`/Car-Models${path}.png`} />
      <div className="car_banner">
        <div className="banner_top">
          <h2 className="vehicle_model">{Model}</h2>
          <h2 className="vehicle_price">~£ {PriceGBP}</h2>
        </div>
        <div className="banner_bottom">
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh
            nisi, molestie sed nisi et, facilisis finibus turpis. Nulla euismod
            blandit tortor non ultrices. Proin sit amet metus et ante convallis
            sollicitudin sodales sit amet ex. Cras a mattis orci. Suspendisse
            eget urna odio. Maecenas laoreet nisi sapien, at maximus.
          </p>
        </div>
      </div>

      <ul className="vehicle_stats">
        <li>Seats:{Seats}</li>
        <li> Rapid Charge:{RapidCharge}</li>
        <li>Plug Type: {PlugType}</li>
        <li>Body Style: {BodyStyle}</li>
        <li>Drive: {PowerTrain}</li>
        <li>0-60: {AccelSec}s</li>
        <li>Range: {Range_Mi}Mi</li>
        <li>Top Speed: {TopSpeed_MpH}Mph</li>
      </ul>

      <button
        onClick={() => {
          setShow(false);
        }}
      >
        Close
      </button>
    </div>
  );
}

export default VehicleModal;
