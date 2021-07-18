import React from "react";
import "./Offering.css";
import dish from "../Media/dish.svg";
import pizza from "../Media/pizza.svg";
import truck from "../Media/truck.svg";
import plate1 from "../Media/plate1.png";
import plate2 from "../Media/plate2.png";
import plate3 from "../Media/plate3.png";

const Services = [
  {
    image: dish,
    h1: "Excellent Food",
    p: "We offer our clients excellent quality services for many years with the best and delicious food in the city",
  },
  {
    image: pizza,
    h1: "Fast food",
    p: "We offer our clients excellent quality services for many years with the best and delicious food in the city",
  },
  {
    image: truck,
    h1: "Delivery",
    p: "We offer our clients excellent quality services for many years with the best and delicious food in the city",
  },
];

export const Offering = () => {
  return (
    <div className="grid-container" id="Services">
      <div className="main-offer container">
        <div>
          <h3>offering</h3>
          <h1>Our amazing services</h1>
        </div>
        <div className="services">
          {Services.map((Service) => (
            <div>
              <div className="service-offer">
                <img src={Service.image} />
              </div>
              <div className="h1">{Service.h1}</div> <br />
              {Service.p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Offering;
