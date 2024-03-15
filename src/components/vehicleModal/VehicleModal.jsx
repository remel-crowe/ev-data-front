import "./VehicleModal.scss";

function VehicleModal({ vehicle, setShow }) {
  const { Brand, Model, _id, path } = vehicle;
  return (
    <div className="vehicle_modal">
      <div className="headers">
        <h1>{Brand}</h1>
        <h2>{Model}</h2>
      </div>
      <div className="picture">
        <img src={`/Car-Models${path}.png`} />
      </div>

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
