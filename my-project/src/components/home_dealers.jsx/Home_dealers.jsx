import React, { useEffect } from "react";
import { MdStarRate } from "react-icons/md";
import "./home_delears.css";
import arrow from "../../assets/dealerArrow.svg";
import Slider from "../../UI/Slider";
import { Card } from "../../UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchDealer } from "../../store/dealerSlice";

export const Home_dealers = () => {
  const dispatch = useDispatch();
  const dealer = useSelector((state) => state.dealer.dealerData);
  console.log(dealer, "dealer data");

  useEffect(() => {
    dispatch(fetchDealer());
  }, [dispatch]);

  return (
    <div className="dealers container">
      <div className="dealer-header">
        <div className="dealer-star">
          <h1 className="">Dealers</h1>
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <MdStarRate key={index} color="#0BA4E0" size={50} />
            ))}
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
      <div className="w-screen flex justify-center">
        <Slider>

           {
            dealer && dealer.length > 0 ? 
          
       (   dealer.map((item) => (
            <div
              key={item.id}
              className="flex-[0_0_80%] sm:flex-[0_0_55%] md:flex-[0_0_45%] lg:flex-[0_0_35%] xl:flex-[0_0_27%] flex justify-center"
            >
              <Card
                dealerName={item.name}
                location= {`${item.address.street}`}
                companyName={item.company.name}
                contact={item.phone}
              />
            </div>
          ))) : <div><h2>No Dealer data found</h2></div>
          
          } 
        </Slider>
      </div>
    </div>
  );
};
