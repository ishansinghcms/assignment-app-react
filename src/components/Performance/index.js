import React from "react";
import "./style.css";

function Performance() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-icon">
          <span className="aicon material-symbols-outlined">
            monetization_on
          </span>
        </div>
        <div className="card-text">
          <p className="p-heading">Earning</p>
          <p className="p-earning">$198K</p>
          <p className="p-perform">
            <span className="green">&uarr;37.8%</span> this month
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-icon">
          <span className="bicon material-symbols-outlined">list_alt</span>
        </div>
        <div className="card-text">
          <p className="p-heading">Orders</p>
          <p className="p-earning">$2.4K</p>
          <p className="p-perform">
            <span className="red">&darr;2%</span> this month
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-icon">
          <span className="cicon material-symbols-outlined">
            account_balance_wallet
          </span>
        </div>
        <div className="card-text">
          <p className="p-heading">Balance</p>
          <p className="p-earning">$2.4K</p>
          <p className="p-perform">
            <span className="red">&darr;2%</span> this month
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-icon">
          <span className="dicon material-symbols-outlined">shopping_bag</span>
        </div>
        <div className="card-text">
          <p className="p-heading">Total Sales</p>
          <p className="p-earning">$89K</p>
          <p className="p-perform">
            <span className="green">&uarr;11%</span> this week
          </p>
        </div>
      </div>
    </div>
  );
}

export default Performance;
