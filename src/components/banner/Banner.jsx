import { useEffect, useState } from "react";
import axios from "axios";
import "./Banner.scss";
import VehicleModal from "../vehicleModal/VehicleModal";
import VehicleCard from "../vehicleCard/VehicleCard";

function Banner({ search }) {
  const [show, setShow] = useState(false);
  const [currentCar, setCurrentCar] = useState({});
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([...cars]);
  const [sort, setSort] = useState("default");

  useEffect(() => {
    axios
      .get("http://localhost:3000/cars")
      .then((response) => setCars(response.data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    sortCars(sort);
  }, [sort]);

  function handleChange(event) {
    const value = event.target.value;
    setSort(value);
  }

  useEffect(() => {
    filterCars(search);
  }, [search, cars]);

  function filterCars(search) {
    let filtered = cars.filter((car) => {
      const brand = car.Brand.toLowerCase();
      const model = car.Model.toLowerCase();
      let searchTerm = search.toLowerCase();
      return brand.includes(searchTerm) || model.includes(searchTerm);
    });

    setFilteredCars(filtered);
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
          <option value="Model">Sort By </option>
          <option value="TopSpeed_MpH">Top Speed</option>
          <option value="Range_Mi">Range</option>
          <option value="PriceGBP">Price</option>
        </select>
      </div>
      <div className="car_container">
        {filteredCars.map((car) => {
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
