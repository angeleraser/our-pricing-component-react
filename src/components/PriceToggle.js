import React from "react";
import "../css/PriceToggle.css";
import { useState } from "react";

const PriceToggle = ({ fn }) => {
  let [className, setClassName] = useState(false);
  const toggleClass = () => {
    fn()
    setClassName(!className);
  };
  return (
    <div className="toggle-wrapper">
      Annually
      <button
        onClick={toggleClass}
        className={className ? `switched` : ""}></button>
      Monthly
    </div>
  );
};

export default PriceToggle;
