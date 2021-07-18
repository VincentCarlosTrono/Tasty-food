import React from "react";
import "./Body.css";
import home from "../Media/home.png";

export const Body = () => {
  return (
    <div className="grid-container" id="Home">
      <div className="main-body container">
        <div className="body-text">
          <h1>Tasty food</h1>
          <h2>
            Try the best food of <br /> the week.
          </h2>

          <button>View Menu</button>
        </div>
        <div className="body-img">
          <img src={home} />
        </div>
      </div>
    </div>
  );
};
export default Body;
