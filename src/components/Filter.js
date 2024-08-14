import React from "react";
import "./filter.css";
function Filters() {
  return (
    <div className="fil">
      <ul className="menu bg-base-200 rounded-box w-56">
        <li className="menu-title">Filter</li>
        <li>
          <span>
            {" "}
            <input type="radio" name="radio-1" className="radio" />
            Ascending
          </span>
        </li>
        <li>
          <span>
            {" "}
            <input type="radio" name="radio-1" className="radio" />
            Descending
          </span>
        </li>
        <li>
          <span>
            <input type="checkbox" defaultChecked className="checkbox" />
            Include Out of Stock
          </span>
        </li>
        <li>
          <span>
            <input type="checkbox" defaultChecked className="checkbox" />
            Fast Delivery
          </span>
        </li>
        <li>
          <span>
            Rating
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                defaultChecked
              />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
          </span>
        </li>
        <li>
          <button className="btn">Clear filters</button>
        </li>
      </ul>
    </div>
  );
}

export default Filters;
