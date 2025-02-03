import React from "react";
import { useState } from "react";
import "./fooditem.css";

//The basic component that displays the image, title and price of the food items.
//There will be a scrollable type list. Database in app waala area. Each of those food items will be mapped to FoodItem where it will be displayed.

export default function FoodItem({id, image, title, price, category}) {
  const [qty, setQty] = useState(0);
  // let foodQtyIs0 = true;
  function handleAddToCart() {
    setQty(qty + 1);
    console.log("qty set to 1");
    // foodQtyIs0 = false;
  }
  // function AddToCart() {
  //   setQty(1);
  //   console.log("qty set to 1");
  //   foodQtyIs0 = false;
  //   if (foodQtyIs0 === true) {
  //     return (
  //       <div className="qty-div">
  //         <button className="add-to-cart" onClick={handleAddToCart}>
  //           ADD TO CART
  //         </button>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="qty-div">
  //         <button className="minus" onClick={handleClickMinus}>
  //           -
  //         </button>
  //         <button className="food-qty">{qty}</button>
  //         <button className="plus" onClick={handleClickAdd}>
  //           +
  //         </button>
  //       </div>
  //     );
  //   }
  // }
  function handleClickAdd() {
    setQty(qty + 1);
    // if (qty > 0) foodQtyIs0 = false;
    // if (qty === 0) foodQtyIs0 = true;
  }
  function handleClickMinus() {
    if (qty < 1) throw new Error("You cannot have negative items");
    setQty(qty - 1);
    // if (qty === 0) foodQtyIs0 = true;
  }
  return (
    <>
      <li key={id}>
        <div className="foodtile">
          <button className="food-info">
            <ul className="info-inside-food-tile">
              <li>
                <img src={image} alt= {title} className="foodimage" />
              </li>
              <li>{title}</li>
              {/* <li className="food-category">{category}</li> */}
              <li>₹{price}</li>
            </ul>
          </button>
          {/*quantity button */}
          {/* <AddToCart /> */}

          <div className="qty-div">
            <ul className="qty-div-list">
            {(qty != 0) && (<li>
            <button className="minus" onClick={handleClickMinus}>
              -
            </button>
            <button className="food-qty">{qty}</button>
            <button className="plus" onClick={handleClickAdd}>
              +
            </button>
            </li> )}
            <li>
            {(qty == 0) && (<button onClick={handleAddToCart} className="add-to-cart">ADD TO CART</button>)}
            </li>
            </ul>
          </div>

        </div>
      </li>
    </>
  );
}


{
  /* <li key={id}>
        <button className='foodtile'>
            <ul className='info-inside-food-tile'>
              <li><img src={image} alt="food" className='foodimage' /></li>
              <li>{title}</li>
            </ul>
            {price}
        </button>
    </li> */
}
