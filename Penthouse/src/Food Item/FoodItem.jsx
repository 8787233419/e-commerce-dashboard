import React from 'react'
import { useState } from 'react'
import './fooditem.css'

//The basic component that displays the image, title and price of the food items.
//There will be a scrollable type list. Database in app waala area. Each of those food items will be mapped to FoodItem where it will be displayed.

export default function FoodItem(id, image, title, price, category) {
  const [qty, setQty] = useState(0);
  function handleClickAdd() {
    setQty(qty + 1);
  }
  function handleClickMinus() {
    if (qty < 1) throw new Error("You cannot have negative items");
    setQty(qty - 1);
  }
  return (
    <>
    <li key={id}>
        <div className='foodtile'>
            <button className="food-info">
              <ul className='info-inside-food-tile'>
                <li><img src={image} alt="food" className='foodimage' /></li>
                <li>{title}</li>
                <li>₹{price}</li>
              </ul>
            </button>
          {/*quantity button */}
          <div className="qty-div">
            <button className='minus' onClick={handleClickMinus}>-</button>
            <button className='food-qty'>{qty}</button>
            <button className='plus' onClick={handleClickAdd}>+</button>
          </div> 
        </div>
    </li>
    </>
  )
}


{/* <li key={id}>
        <button className='foodtile'>
            <ul className='info-inside-food-tile'>
              <li><img src={image} alt="food" className='foodimage' /></li>
              <li>{title}</li>
            </ul>
            {price}
        </button>
    </li> */}