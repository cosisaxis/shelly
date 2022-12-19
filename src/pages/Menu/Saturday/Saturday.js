import React from 'react'
import "./Saturday.css"
import MenuListItems from '../../../components/MenuListItems/MenuListItems'

const menuDataLeft = [
    {
      title: "jerk pork",
      description: "lovely jamaican jerk pork",
      price: "21",
    },
    {
      title: "jerk pork",
      description: "lovely jamaican jerk pork",
      price: "21",
    },
    {
      title: "jerk pork",
      description: "lovely jamaican jerk pork",
      price: "21",
    },
  ];
  
  const menuDataRight = [
    {
      title: "fried chicken",
      description: "lovely jamaican jerk pork",
      price: "21",
    },
    {
      title: "fried chicken",
      description: "lovely jamaican jerk pork",
      price: "21",
    },
    {
      title: "fried chicken",
      description: "lovely jamaican jerk pork",
      price: "21",
    },
  ];

const Saturday = () => {
  return (
    <div>
        <div className="container saturday">
      <h1 className="heading-secondary">
        <span>Saturday</span>
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
    </div>
  )
}

export default Saturday