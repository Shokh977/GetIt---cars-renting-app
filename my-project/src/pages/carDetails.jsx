import React, { useEffect } from "react";
import "./carDetails.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../store/FetchedDataSlice";
import img from '../assets/dealer.jpg'

export const CarDetails = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.data.data);
  const params = useParams();

  useEffect(() => {
    if (params.carId) {
      dispatch(fetchData(params.carId));
    }
  }, [dispatch, params.carId]);
  const selectedCar = cars.find(
    (item) => item.id === parseInt(params.carId, 10)
  );
  return (
    <>

      {selectedCar && (
        <div className="container car-details">
          <div><img src={selectedCar.image} alt="" /></div>
         <div className="car-table-container">
              <table className="car-table">
        <tbody>
          {Object.entries(selectedCar).map(([noun, detail]) => (
            <tr key={noun}>
              <td>{noun}</td>
              <td>{detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
         </div>
        </div>

      )}
      <div className="car-details-dealer container">
        <p>Posted by</p>
        <div className="img-name">
            <img src={img} alt="" />
        <h3>dealer's name</h3>
        </div>
      </div>
    </>
  );
};
