import React from "react";
import "./Offering.css";
import dish from "../Media/dish.svg";
import pizza from "../Media/pizza.svg";
import truck from "../Media/truck.svg";

const Services = [
  {
    image: dish,
    title: "Excellent Food",
    text: "We offer our clients excellent quality services for many years with the best and delicious food in the city",
  },
  {
    image: pizza,
    title: "Fast food",
    text: "We offer our clients excellent quality services for many years with the best and delicious food in the city",
  },
  {
    image: truck,
    title: "Delivery",
    text: "We offer our clients excellent quality services for many years with the best and delicious food in the city",
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
                <img src={Service.image} alt="offer logo" />
              </div>
              <div className="h1">{Service.title}</div> <br />
              {Service.text}
            </div>
          ))}
        </div>
        <box-icon type="solid" name="virus"></box-icon>
      </div>
    </div>
  );
};
export default Offering;
