import React from "react";
import "../css/PricingCard.css";

const PricingCard = ({ data: { plan, price, details }, pos, payment }) => {
  const formatedPrice = (price) => `${price.toFixed(2)}`;
  return (
    <article className={`pricing-card ${pos === 1 ? "purple" : ""}`}>
      <h1>{plan}</h1>
      <h2>{formatedPrice(!payment ? price * 10 : price)}</h2>
      <ul>
        {details.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <button>LEARN MORE</button>
    </article>
  );
};

export default PricingCard;
