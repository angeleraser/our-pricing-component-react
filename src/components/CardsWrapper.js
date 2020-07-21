import React from "react";
import { PrincingCardData } from "../princings-data";
import PricingCard from "./PricingCard";
import "../css/CardsWrapper.css";

const CardsWrapper = ({ cardsData, payment }) => {
  let indx = 0;
  const CARDS = cardsData.map((data, i) => (
    <PricingCard data={data} key={i} pos={indx++} payment={payment} />
  ));
  return <section className="cards-wrapper">{CARDS}</section>;
};

export default CardsWrapper;
