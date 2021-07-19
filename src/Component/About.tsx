import React from "react";
import "./About.css";
import about from "../Media/about.jpg";

export const About = () => {
  return (
    <div className="grid-container" id="About">
      <div className="main-about container">
        <div className="about-image">
          <img src={about} alt="about" />
        </div>
        <div className="about-us">
          <h3>About Us</h3>
          <h1>
            We cook the best <br /> tasty food
          </h1>
          <p>
            We cook the best food in the entire city, with <br />
            excellent customer service, the best meals and <br /> at the best
            price, visit us.
          </p>
          <button>Explore history</button>
        </div>
      </div>
    </div>
  );
};
export default About;
