import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import './ArrowButton.css'
export const LeftArrowButton = () => {
  return (
    <button className="bg-arrow-btn">
      <div className="circle">
        <MdOutlineNavigateNext size={38} color="#433D60" />
      </div>
    </button>
  );
};
