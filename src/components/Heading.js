import React from "react";
import "../css/Heading.css";
import PriceToggle from "./PriceToggle";
const Heading = ({ toggleFn }) => {
  return (
    <section className="heading">
      <h1>Our Pricing</h1>
      <PriceToggle fn={toggleFn} />
    </section>
  );
};

export default Heading;
