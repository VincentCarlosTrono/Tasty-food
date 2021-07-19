import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="main-footer grid-container">
      <div className="footer-info container">
        <div className="footer-lines">
          <h1>Tasty Food</h1>
          <p>Restaurants</p>
        </div>
        <div className="list">
          <ul>
            <li>
              <box-icon name="facebook-square" type="logo"></box-icon>
            </li>
            <li>
              <box-icon name="instagram-alt" type="logo"></box-icon>
            </li>
            <li>
              <box-icon name="twitter" type="logo"></box-icon>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
