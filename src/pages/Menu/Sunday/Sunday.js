import React from 'react'
import MenuListItems from '../../../components/MenuListItems/MenuListItems'
import "./Sunday.css"

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


const Sunday = () => {
  return (
    <div><div className='section'>
    <div className="container saturday">
  <h1 className="heading-secondary">
    <span>Sunday</span>
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
</div></div>
  )
}

export default Sunday