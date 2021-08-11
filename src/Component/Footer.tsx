import React from "react";
import "./Footer.css";

const footerLink = [
  {
    title: "Services",
    sub1: <a href="#Services">Delivery</a>,
    sub2: <a href="#Menu">Pricing</a>,
    sub3: "Fast Food",
    sub4: "Reserve your spot",
  },
  {
    title: "Information",
    sub1: <a href="#Services">Contact us</a>,
    sub2: "Privacy policy",
    sub3: "Fast Food",
    sub4: "Terms of services",
  },
  {
    title: "Address",
    sub1: "Lima - Peru",
    sub2: "Jr Union #999",
    sub3: "999 - 888 - 777",
    sub4: "tastyfood@email.com",
  },
];

export const Footer = () => {
  return (
    <div className="main-footer grid-container">
      <div className="footer-info container">
        <div>
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
        <div className="footer-links">
          {footerLink.map(({ title, sub1, sub2, sub3, sub4 }) => (
            <div className="footer-h2">
              <h2>{title}</h2>
              <p>
                <a href="#Home">{sub1}</a>
              </p>
              <p>
                <a href="#Home">{sub2}</a>
              </p>
              <p>
                <a href="#Home">{sub3}</a>
              </p>
              <p>
                <a href="#Home">{sub4}</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
