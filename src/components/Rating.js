import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style, disabled }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          onClick={!disabled ? () => onClick(i) : undefined}
          style={style}
        >
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
