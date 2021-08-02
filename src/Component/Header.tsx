import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header grid-container">
      <div className="header-line container">
        <h1> Tasty</h1>
        <div className="header-list">
          <ul>
            <li>
              <a href="#Home">HOME</a>
            </li>
            <li>
              <a href="#About">ABOUT</a>
            </li>
            <li>
              <a href="#Services">SERVICES</a>
            </li>
            <li>
              <a href="#Menu">MENU</a>
            </li>
            <li>
              <a href="#Contact">CONTACT US</a>
            </li>
            <div className="header-icon">
              {/* @ts-ignore */}
              <box-icon type="solid" name="moon"></box-icon>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
