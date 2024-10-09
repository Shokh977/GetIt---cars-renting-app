import React, { useState } from "react";
import { MdStarRate } from "react-icons/md";

export const Rating = ({size}) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label>
              <input
                className="hidden"
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <MdStarRate
                size={size}
                className="cursor-pointer"
                color={
                  currentRating <= (hover || rating) ? "#0BA4E0 " : "#fff"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};
