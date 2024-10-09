import React from 'react'
import { GrFormPrevious } from "react-icons/gr";
import './ArrowButton.css'

export const RightArrowButton = () => {
  return (
    <button className="bg-arrow-btn">
    <div className="circle">
      <GrFormPrevious size={38} color="#433D60" />
    </div>
  </button>
  )
}
