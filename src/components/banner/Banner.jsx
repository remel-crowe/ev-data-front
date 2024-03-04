import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Banner.scss";
import LargeCard from "../largeCard/LargeCard";

function Banner() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/cars")
      .then((response) => setCars(response.data));
  }, []);
  const [cars, setCars] = useState([]);

  return (
    <div className="banner">
      {cars.map((car) => {
        return (
          <LargeCard
            key={car.Id}
            make={car.Brand}
            model={car.Model}
            range={car.Range_Mi}
            seats={car.Seats}
            speed={car.TopSpeed_MpH}
          />
        );
      })}
    </div>
  );
}

export default Banner;
