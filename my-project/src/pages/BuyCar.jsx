import React, { useEffect } from "react";
import "./buy-car.css";
import { FaSearch, FaAngleDoubleDown } from "react-icons/fa";
import Slider from "../UI/Slider";
import { CarCard } from "../UI/carCard";
import { useSelector, useDispatch } from "react-redux";
import Carusel from "../UI/Carusel";
import { fetchData } from "../store/FetchedDataSlice";

export const BuyCar = () => {
  const carsdetails = useSelector((state) => state.data);
  const dispatch = useDispatch();
  console.log(carsdetails, 'cars')

  useEffect(() => {
    dispatch(fetchData());
  }, []);


  return (
    <div className="buy-car-container">
      <div className="cars-filter">
        <div className="filter-input">
          <input type="text" placeholder=" filter " />
          <FaAngleDoubleDown size={30} />
        </div>
        <div className="car-search">
          <input type="search" placeholder="search your car" />
          <FaSearch />
        </div>
      </div>
      <div>
        <h3>Recently added</h3>
        <div className="cars-card-box">
          <Carusel slides={carsdetails} />
        </div>
      </div>
      <div>
        <h3>Most viewed</h3>
        <div className="cars-card-box">
          <Carusel slides={carsdetails} />
        </div>
      </div>
      <div>
        <h3>cheapest</h3>
        <div className="cars-card-box">
          <Carusel slides={carsdetails} />
        </div>
      </div>
    </div>
  );
};
