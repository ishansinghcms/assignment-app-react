import React from "react";
import "./style.css";

function Product(props) {
  return (
    <div className="pd-container">
      <img src={props.pImg} width="55" height="35" className="img" />
      <div className="inner-product">
        <p className="txt pd-heading">{props.pName}</p>
        <p className="txt pd-content">{props.pDesc}</p>
      </div>
    </div>
  );
}

export default Product;
