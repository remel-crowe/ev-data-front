import { useEffect, useState } from "react";
import axios from "axios";
import "./Banner.scss";
import VehicleModal from "../vehicleModal/VehicleModal";
import VehicleCard from "../vehicleCard/VehicleCard";

function Banner() {
  const [show, setShow] = useState(false);
  const [currentCar, setCurrentCar] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/cars")
      .then((response) => setCars(response.data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const [cars, setCars] = useState([]);
  const [sort, setSort] = useState("default");

  useEffect(() => {
    sortCars(sort);
  }, [sort]);

  function handleChange(event) {
    const value = event.target.value;
    setSort(value);
  }

  function sortCars(condition) {
    let currentCars = [...cars];
    currentCars.sort((first, second) => second[condition] - first[condition]);
    setCars(currentCars);
  }

  function findCar(id) {
    return cars.find((car) => car._id === id);
  }

  return (
    <div className="banner">
      <div className="sort_container">
        <select onChange={handleChange} className="sort_select">
          <option value="Brand">Default</option>
          <option value="TopSpeed_MpH">Top Speed</option>
          <option value="Range_Mi">Range</option>
          <option value="PriceGBP">Price</option>
        </select>
      </div>
      <div className="car_container">
        {cars.map((car) => {
          return (
            <VehicleCard
              key={car._id}
              make={car.Brand}
              model={car.Model}
              range={car.Range_Mi}
              seats={car.Seats}
              price={car.PriceGBP}
              speed={car.TopSpeed_MpH}
              img={car.path}
              onclick={() => {
                let modalCar = findCar(car._id);
                if (modalCar) {
                  setCurrentCar(modalCar);
                  setShow(true);
                }
              }}
            />
          );
        })}
      </div>
      {show && <VehicleModal vehicle={currentCar} setShow={setShow} />}
    </div>
  );
}

export default Banner;
