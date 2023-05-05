import React from 'react'
import "./Beverages.css"
import MenuListItems from '../../../components/MenuListItems/MenuListItems'
import juice from '../../../assets/juice.jpg'

const menuDataRight = [
    {
      title: "Mango",
      description: "Delicious mango juice",
      price: "300",
    },
    {
      title: "Pine",
      description: "lovely jamaican pine juice",
      price: "300",
    },
    {
      title: "Guava",
      description: "lovely jamaican guava juice",
      price: "350",
    },
    {
      title: "Fruit",
      description: "lovely jamaican fruit juice",
      price: "300",
    },
    {
      title: "Banana",
      description: "lovely jamaican banana juice",
      price: "350",
    },
    {
      title: "Grape",
      description: "lovely jamaican grape juice",
      price: "300",
    },
  ];


const Beverages = () => {
  return (
    <div className='container beverages'>
        <h1 className='heading-secondary'><span>Juices</span></h1>
        <div className="grid-container">
            <div>
                <img src={juice} alt="juices" />
            </div>
            <div>
                {menuDataRight.map((data, i) => (
                    <MenuListItems title={data.title} description={data.description} price={data.price} />
                ))}
            </div>
        </div>
    </div>
    
  )
}

export default Beverages