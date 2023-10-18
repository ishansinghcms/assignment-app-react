import React from "react";
import "./style.css";
import Product from "../Product";

function Table() {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className="w1">Product Name</th>
            <th className="w2">Stock</th>
            <th className="w2">Price</th>
            <th className="w2">Total Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Product
                pName="Abstract 3D"
                pDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                pImg="https://media.istockphoto.com/id/1449175509/photo/abstract-3d-render.webp?b=1&s=170667a&w=0&k=20&c=hvpNvs47RWGaJoeT0blPUL7l8O-Rv8aWbQ1kpc804P4="
              />
            </td>
            <td className="td-center f1">32 in stock</td>
            <td className="td-center f2">$ 45.99</td>
            <td className="td-center f1">20</td>
          </tr>
          <tr>
            <td>
              <Product
                pName="Sarphens Illustrations"
                pDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                pImg="https://blogs.windows.com/wp-content/uploads/prod/sites/2/2021/10/Windows-11-Bloom-Screensaver-Dark-scaled.jpg"
              />
            </td>
            <td className="td-center f1">32 in stock</td>
            <td className="td-center f2">$ 45.99</td>
            <td className="td-center f1">20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
