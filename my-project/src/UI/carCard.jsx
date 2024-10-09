import React from "react";
import "./carCard.css";
import dealer from "../assets/dealer.jpg";
import { FaRegHeart, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CarCard = ({ title, km, cc, name, price, image,id }) => {
  return (
    <div className="car-cards-container">
       <Link to={`/buyacar/${id}`}> <button 
>
    <img src={image} alt="" />
        <div>
          <div className="car-brand">
            <h1>{name}</h1>
            <h1>${price}</h1>
          </div>
          <div className="car-details">
            <p>{title}</p>
            <p>{km} mi</p>
            <p>{cc}</p>
          </div>
          <div className="card-function">
            <div className="card-user-data">
              <div className="flex items-center">
                <FaRegHeart size={20} />
                <p>12</p>
              </div>
              <div className="flex items-center">
                <FaEye size={20} />
                <p>4</p>
              </div>
            </div>
            <p>Sold</p>
          </div>
        </div>
      </button></Link>
    </div>
  );
};
