import React from "react";
import hero_img from "../assets/hero-img.png";
import "./home.css";
import { Button } from "../UI/Button";
import { Link } from "react-router-dom";
import arrow from '../assets/arrow.svg'
import { Home_dealers } from "../components/home_dealers.jsx/Home_dealers";
import HomeCars from "../components/home_cars/home_cars";
import { Ads } from "../components/ads/Ads";
import { Events } from "../components/events/Events";
import Modal from "../UI/Modal";
// import v1 from "../assets/lines/Vector1.svg";
// import v2 from "../assets/lines/Vector2.svg";
// import v3 from "../assets/lines/Vector3.svg";

export const Home = () => {
  // const color1 = {
  //   background: "linear-gradient(156deg, #c0b7e8 0%, #8176af 100%)",
  //   "background-clip": "text",
  //   "-webkit-background-clip": "text",
  //   "-webkit-text-fill-color": "transparent",
  //   "font-size": "32px",
  //   "font-weight": 700,
  // };

  return (<>
   <div className="hero">
  
      <div className="hero-img-container">
        <img src={hero_img} alt="" />
      </div>
      <div className="hero-title">
        <h1>
          <span>Get</span> your desired one <br /> in your{" "}
          <span>Desired Way</span>{" "}
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
          excepturi blanditiis, consequatur magni quas dolore quod.
        </p>
        <Link to="buyacar">
          <div className="btn-container">
             <Button className="hero-btn">Cars world</Button>
          <img src={arrow} alt="" />
          </div>
        </Link>
      </div>
    </div>
    {/* <EmblaCarousel/> */}
    <Home_dealers/>
    <HomeCars/>
    <Ads/>
    <Events/>
    
  </>
  );
};
