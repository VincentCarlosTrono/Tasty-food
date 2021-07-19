import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="main-footer grid-container">
      <div className="footer-info container">
        <div className="socmed-account">
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
          <div className="Service">
            <h1>Services</h1>
            <div className="Service-list">
              <div className="services-needs">
                Delivery <br />
                Pricing
                <br /> Fast food
                <br /> Reserve your
              </div>
            </div>
          </div>
          <div className="Service">
            <h1>Information</h1>
            <div className="Service-list">
              <div className="services-needs">
                Event <br />
                Contact us
                <br /> Privacy Policy
                <br /> Terms of services
              </div>
            </div>
          </div>
          <div className="Service">
            <h1>Address</h1>
            <div className="Service-list">
              <div className="services-needs">
                Lima - Peru <br />
                Jr Union #999
                <br /> 999 - 888 - 777
                <br /> tastyfood@email.com
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2020 Bedimcode. All right reserved </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
