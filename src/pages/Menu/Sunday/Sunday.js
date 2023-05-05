import React from 'react'
import MenuListItems from '../../../components/MenuListItems/MenuListItems'
import "./Sunday.css"

const menuDataLeft = [
    {
      title: "stew chicken",
      description: "lovely jamaican stew chicken",
      price: "1000",
    },
    {
      title: "stew beef",
      description: "lovely jamaican stew beef",
      price: "1200",
    },
    {
      title: "pot roast",
      description: "lovely jamaican pot roast",
      price: "1500",
    },
  ];
  
  const menuDataRight = [
    {
      title: "steak",
      description: "lovely jamaican steak",
      price: "2500",
    },
    {
      title: "curry chicken",
      description: "lovely jamaican curry chicken",
      price: "1000",
    },
    {
      title: "turkey neck",
      description: "lovely jamaican turkey neck",
      price: "1000",
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