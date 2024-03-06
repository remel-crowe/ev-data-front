import { useEffect, useState } from "react";
import axios from "axios";
import "./Banner.scss";
import LargeCard from "../largeCard/LargeCard";

function Banner() {
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
            <LargeCard
              key={car._id}
              make={car.Brand}
              model={car.Model}
              range={car.Range_Mi}
              seats={car.Seats}
              price={car.PriceGBP}
              speed={car.TopSpeed_MpH}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Banner;
