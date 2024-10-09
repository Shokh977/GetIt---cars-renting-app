import React from "react";
import { Button } from "./Button";
import "./card.css";
import dealer from "../assets/dealer.jpg";
import { Rating } from "./Rating";
import { IoLocation } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";


export const Card = ({ dealerName, location, companyName, contact, id }) => {
  return (
    <>
      <div className="card-container">
        <img src={dealer} alt="" />
        <div className="card-title">
          <h1>{dealerName}</h1>
          <p>{companyName}</p>
        </div>
        <p className="detail">
          <IoLocation size={18} />
          {location}
        </p>
        <p className="detail">
          <IoMdCall size={18} />
          {contact}
        </p>
        <Rating size={30} />
        <Link to={`/dealers/${id}`}>  <Button className="card-btn">More...</Button></Link>
      
      </div>
    </>
  );
};
