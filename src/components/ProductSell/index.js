import React from "react";
import "./style.css";
import Table from "../Table";

function ProductSell() {
  return (
    <div className="product-container">
      <div className="top-product-container">
        <p className="bold-product">Product Sell</p>
        <div className="sub-top-product-container">
          <div className="search-bar-product">
            <i className="fa fa-search"></i>
            <input
              className="input-product"
              type="text"
              placeholder="&#128269; Search"
            />
          </div>
          <div className="dropdown-product">
            <button className="dropbtn">
              Last 30 days
              <span className="dropdown-icon">&#9662;</span>
            </button>
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
}

export default ProductSell;
