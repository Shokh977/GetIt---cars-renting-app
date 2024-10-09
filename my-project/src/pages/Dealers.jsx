import React, { useEffect } from "react";
import arrow from "../assets/dealerArrow.svg";
import { MdStarRate } from "react-icons/md";
import "./dealer.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDealer } from "../store/dealerSlice";
import Slider from "../UI/Slider";
import { Card } from "../UI/Card";

export const Dealers = () => {
  const dispatch = useDispatch();
  const dealer = useSelector((state) => state.dealer.dealerData);
  console.log(dealer, "dealer data");

  useEffect(() => {
    dispatch(fetchDealer());
  }, [dispatch]);

  return (
    <div className="dealer">
      <div className="dealer-container">
        <div className="dealer-star">
          <h1 className="">Dealers</h1>
          <div className="stars">
            {[...Array(5)].map((star) => {
              return <MdStarRate color="#0BA4E0" size={50} />;
            })}
          </div>
        </div>
        <img src={arrow} alt="" />

        <p className="detailsP">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel est odit
          rerum cupiditate porro, magni expedita illo esse doloribus placeat,
          praesentium, facere dolorum saepe atque repellendus nulla itaque
          pariatur! Vel!
        </p>
      </div>
      <div className="card-grid-container">
        {dealer && dealer.length > 0 ? (
          dealer.map((item) => (
            <div key={item.id}>
              <Card
                dealerName={item.name}
                location={`${item.address.street}`}
                companyName={item.company.name}
                contact={item.phone}
                id={item.id}
              />
            </div>
          ))
        ) : (
          <div>
            <h2>No Dealer data found</h2>
          </div>
        )}
      </div>
    </div>
  );
};
