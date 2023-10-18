import React from "react";
import "./style.css";
import BarChart from "../BarChart";
import PieChart from "../PieChart";

function Visualize() {
  return (
    <div className="visualizer-container">
      <BarChart />
      <PieChart />
    </div>
  );
}

export default Visualize;
