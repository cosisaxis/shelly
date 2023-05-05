import React from 'react'
import MenuListItems from '../../../components/MenuListItems/MenuListItems'
import "./TodaysMenu.css"
import image1 from "../../../assets/img1.jpg";
import image2 from "../../../assets/img1.jpg";

const menuData = [
    {
      title: "Steam fish",
      description: "with honeyed Pedro Ximenez sauce and potato cake",
      price: "2500",
      img: image1,
    },
    {
      title: "Roast Rack of Lamb",
      description: "with herb crust and fruity mesclun salad and straw potato",
      price: "2000",
      img: image2,
    },
  ];
  
  const TodaysMenu = () => {
    return (
      <div className="section">
        <div className="container menu-of-the-day">
          <h1 className="heading-secondary">
            <span>menu </span>of the day
          </h1>
          {menuData.map((data, i) => (
            <MenuListItems
              title={data.title}
              description={data.description}
              price={data.price}
              itemImage={data.img}
            />
          ))}
        </div>
      </div>
    );
  };

export default TodaysMenu