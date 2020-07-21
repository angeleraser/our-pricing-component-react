import React from "react";
import ReactDOM from "react-dom";
import CardsWrapper from "./components/CardsWrapper";
import Heading from "./components/Heading";
import "./css/index.css";
import { svgTop, svgBottom } from "./svg";
import { PrincingCardData } from "./princings-data";
import { useState } from "react";
const ROOT = document.getElementById("root");
const MainWrapper = () => {
  let [payment, setPayment] = useState(false);
  const togglePayment = () => {
    setPayment(!payment);
  };
  return (
    <main className="main-wrapper">
      {svgTop}
      <Heading toggleFn={togglePayment} />
      <CardsWrapper cardsData={PrincingCardData} payment={payment} />
      {svgBottom}
    </main>
  );
};
ReactDOM.render(<MainWrapper />, ROOT);
