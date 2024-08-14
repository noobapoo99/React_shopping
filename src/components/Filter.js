import React, { useState } from "react";
import "./filter.css";
import Rating from "./Rating";
function Filters() {
  const [rate, setRate] = useState(1);

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
            <label> Rating</label>
            <Rating rating={rate} onClick={(i) => setRate(i)} />
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
