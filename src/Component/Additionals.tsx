import React from "react";
import "./Additional.css";
import plate1 from "../Media/plate1.png";
import plate2 from "../Media/plate2.png";
import plate3 from "../Media/plate3.png";

const Dishes = [
  {
    image: plate1,
    name: "Barbeque salad",
    type: "Delicious dish",
    price: "$22.00",
  },
  {
    image: plate2,
    name: "Barbeque salad",
    type: "Delicious dish",
    price: "$22.00",
  },
  {
    image: plate3,
    name: "Barbeque salad",
    type: "Delicious dish",
    price: "$22.00",
  },
];

export const Additionals = () => {
  return (
    <div className="grid-container" id="Menu">
      <div className="container">
        <div className="add">
          <h3>offering</h3>
          <h1>Our amazing services</h1>
        </div>
        <div className="dish-card">
          <div className="services">
            {Dishes.map((dish) => (
              <div className="cards">
                <div className="service-offer">
                  <img src={dish.image} alt="dish" />
                </div>
                <div className="main-dishes">
                  <div className="title">{dish.name}</div>
                  {dish.type}
                  <br />
                  {dish.price}
                </div>
                <div className="button-cart">
                  <box-icon
                    name="cart-alt"
                    color="white"
                    size="1.8rem"
                  ></box-icon>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Additionals;
