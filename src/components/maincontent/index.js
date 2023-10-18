import React from "react";
import "./style.css";
import Performance from "../Performance";
import Visualize from "../Visualize";
import ProductSell from "../ProductSell";
import { useData } from "../../DataContext";

function MainContent() {
  const { sharedData } = useData();
  return (
    <div
      className={`main-content ${sharedData === true ? "button-pressed" : ""}`}
    >
      <div className="t-container">
        <p className="bold-text">Hello Sharukh 👋,</p>
        <div className="search-bar">
          <i className="fa fa-search"></i>
          <input className="input" type="text" placeholder="&#128269; Search" />
        </div>
      </div>
      <Performance />
      <Visualize />
      <ProductSell />
    </div>
  );
}

export default MainContent;
