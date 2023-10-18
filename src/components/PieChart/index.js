import React from "react";
import "./style.css";

function PieChart() {
  return (
    <div className="pie-chart-container">
      <p className="heading-pie">Customers</p>
      <p className="sub-heading-pie">Customers that buy products</p>
      <div className="center-container">
        <div className="pie-chart">
          <div className="chart-background"></div>
          <div className="chart-highlight"></div>
          <div className="center-text">
            <p className="bold-txt">65%</p>
            <p className="l1">Total New</p>
            <p className="l2">Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieChart;
