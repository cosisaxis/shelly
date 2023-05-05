import React from 'react'
import "./Saturday.css"
import MenuListItems from '../../../components/MenuListItems/MenuListItems'

const menuDataLeft = [
    {
      title: "jerk pork",
      description: "lovely jamaican jerk pork",
      price: "1000",
    },
    {
      title: "stew peas",
      description: "lovely jamaican stew peas",
      price: "1500",
    },
    {
      title: "run dung",
      description: "lovely jamaican run dung",
      price: "1000",
    },
  ];
  
  const menuDataRight = [
    {
      title: "cow foot",
      description: "lovely jamaican cow foot",
      price: "2100",
    },
    {
      title: "oxtail",
      description: "lovely jamaican oxtail",
      price: "2100",
    },
    {
      title: "barbeque chicken",
      description: "lovely jamaican bbw",
      price: "21",
    },
  ];

const Saturday = () => {
  return (
    <div className='section'>
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