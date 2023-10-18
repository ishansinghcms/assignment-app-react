import React from "react";
import "./style.css";

function BarChart() {
  return (
    <div className="bar-chart-container">
      <div className="text-button-container">
        <div className="text-container">
          <p className="heading">Overview</p>
          <p className="sub-heading">Monthly Earning</p>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            Quaterly
            <span className="dropdown-icon">&#9662;</span>
          </button>
        </div>
      </div>
      <div className="bar-chart">
        <div className="bar january">
          <div className="label">Jan</div>
        </div>
        <div className="bar february">
          <div className="label">Feb</div>
        </div>
        <div className="bar march">
          <div className="label">Mar</div>
        </div>
        <div className="bar april">
          <div className="label">Apr</div>
        </div>
        <div className="bar may">
          <div className="label">May</div>
        </div>
        <div className="bar june">
          <div className="label">Jun</div>
        </div>
        <div className="bar july">
          <div className="label">Jul</div>
        </div>
        <div className="bar august highlighted">
          <div className="aug-bold label">Aug</div>
        </div>
        <div className="bar september">
          <div className="label">Sep</div>
        </div>
        <div className="bar october">
          <div className="label">Oct</div>
        </div>
        <div className="bar november">
          <div className="label">Nov</div>
        </div>
        <div className="bar december">
          <div className="label">Dec</div>
        </div>
      </div>
    </div>
  );
}

export default BarChart;
