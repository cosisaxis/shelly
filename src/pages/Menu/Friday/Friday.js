import React from "react";
import "./Friday.css";
import MenuListItems from "../../../components/MenuListItems/MenuListItems";

const menuDataLeft = [
  {
    title: "fried fish",
    description: "lovely jamaican fried fish",
    price: "1500",
  },
  {
    title: "steam fish",
    description: "lovely jamaican steam fish",
    price: "2500",
  },
  {
    title: "fish kebabs",
    description: "lovely jamaican fish kebabs",
    price: "1500",
  },
];

const menuDataRight = [
  {
    title: "ackee and saltfish",
    description: "lovely jamaican ackee and saltfish",
    price: "1000",
  },
  {
    title: "roast fish",
    description: "lovely jamaican roast fish",
    price: "1400",
  },
  {
    title: "fish soup",
    description: "lovely jamaican fish soup",
    price: "500",
  },
];

const Friday = () => {
  return (
    <div className="container friday">
      <h1 className="heading-secondary">
        <span>friday</span>
      </h1>
      <div className="grid-container">
        <div>
          {menuDataLeft.map((data, i) => (
            <MenuListItems
              title={data.title}
              description={data.description}
              price={data.price}
            />
          ))}
        </div>
        <div>
          {menuDataRight.map((data, i) => (
            <MenuListItems
              title={data.title}
              description={data.description}
              price={data.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friday;
