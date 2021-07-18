import React from "react";
import "./Application.css";
import mobile from "../Media/movil-app.png";
import app1 from "../Media/app1.png";
import app2 from "../Media/app2.png";

export const Application = () => {
  return (
    <div className="grid-container">
      <div className="Application container" id="App">
        <div className="phone">
          <img src={mobile} />
        </div>
        <div className="text">
          <h3>App</h3>
          <h1>App is available</h1>
          <p>
            Find our application and download it, you can make reservations,
            food orders, see your deliveries on the way and much more.
          </p>
          <div className="app-image">
            <img src={app1} />
            <img src={app2} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Application;
