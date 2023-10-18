import React from "react";
import "./style.css";

function SidebarLink(props) {
  return (
    <div>
      <a href="#" className="selected sidebar-link-container">
        <span className="material-symbols-outlined">key</span> Dashboard
      </a>

      <a href="#" className="sidebar-link-container">
        <span className="material-symbols-outlined">inventory_2</span> Products
      </a>

      <a href="#" className="sidebar-link-container">
        <span className="material-symbols-outlined">account_circle</span>{" "}
        Customers
      </a>

      <a href="#" className="sidebar-link-container">
        <span className="material-symbols-outlined">account_balance</span>{" "}
        Income
      </a>

      <a href="#" className="sidebar-link-container">
        <span className="material-symbols-outlined">humidity_percentage</span>
        Promote
      </a>

      <a href="#" className="sidebar-link-container">
        <span className="material-symbols-outlined">help</span> Help
      </a>
    </div>
  );
}

export default SidebarLink;
