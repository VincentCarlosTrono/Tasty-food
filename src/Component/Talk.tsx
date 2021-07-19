import React from "react";
import "./Talk.css";

export const Talk = () => {
  return (
    <div id="Contact" className="contact-us grid-container">
      <div className="contact-info container">
        <div>
          <h3>Let's talk</h3>
          <h1>Contact Us</h1>
          <p>
            If you want to reserve a table in our restaurant, contact us and
            <br /> we will attend you quickly, with our 24/7 chat service.
          </p>
        </div>
        <div className="contact-btn">
          <button>Contact us now</button>
        </div>
      </div>
    </div>
  );
};
export default Talk;
