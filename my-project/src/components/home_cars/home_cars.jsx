import React, { useEffect } from "react";
import "./home_cars.css";
import Carusel from "../../UI/Carusel";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/FetchedDataSlice";

export default function HomeCars() {
  const carsdetails = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="container home_cars">
      <div className="home_cars_header">
        <h1 className="section section__title">Cars</h1>
        <p className="cars_filter">Most viewed</p>
      </div>
      <div className="cars-card-box">
        <Carusel slides={carsdetails} />
      </div>
    </div>
  );
}
