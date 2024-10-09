import React from "react";
import "./events.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import AutoCarousel from "../../UI/AutoCarousel";

export const Events = () => {
  const OPTIONS = { loop: true };
  const SLIDES = [
    { img: '#', title: "new car", context: "lorem is just an sample of " },
    { img: "#", title: "new car", context: "lorem is just an sample of " },
    { img: "#", title: "new car", context: "lorem is just an sample of " },
    { img: "#", title: "new car", context: "lorem is just an sample of " },
    { img: "#", title: "new car", context: "lorem is just an sample of " },
    { img: "#", title: "new car", context: "lorem is just an sample of " },
  ];
  return (
    <div className="container section">
      <h1 className="section__title">Events</h1>
      <div className="event-container">
        <div className="event-content">
          <AutoCarousel slides={SLIDES} options={OPTIONS} />
          
        </div>
      </div>
    </div>
  );
};
