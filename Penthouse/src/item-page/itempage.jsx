import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../Navbar/NavBar'
import './itempage.css'
import FoodItem from "../Food Item/FoodItem";

import { useState } from 'react'

export default function Item() {

  const [query, setQuery] = useState("")
  const [qty, setQty] = useState(0);
  
      //hard-coded data the search bar searches through
      const data = [
            { id: 1, img: "/Shawarma.webp", title: "SHAWARMA", price: 55, category: "Shawarmas" },
            {
              id: 2,
              img: "https://img.search.brave.com/Xv3D73-rAP4mx5BJcIOXixOaMN6t5izN8TX-PbTFRjI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzYzLzE0Lzgy/LzM2MF9GXzYzMTQ4/MjEwXzZDVzkyYWRC/bXRDVDhzOTZXMElZ/UEpwa1pzUGg4SVE1/LmpwZw",
              title: "SANDWICH",
              price: 25,
              category: "Sandwiches"
            },
            { id: 3, img: "/indian-food.png", title: "Veg Biryani", price: 55, category: "Biryanis" },
            { id: 4, img: "", title: "Non-veg biryani", price: 55, category: "Biryanis" },
            { id: 5, img: "", title: "Chicken sandwich", price: 55, category: "Sandwiches" },
            { id: 6, img: "", title: "noodles", price: 55, category: "Chinese" },
            { id: 7, img: "", title: "tacos", price: 55, category: "Tacos" },
      ];
  
      function search(e){
          e.preventDefault()
          setQuery(e.target.value)
          console.log("searched")
      }
  
      const filteredData = data.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase())
      );

      const itemDisplay = filteredData.map((item) => 
        // FoodItem(item.id, item.img, item.title, item.price, item.category))
        <div className="item-holder" key={item.id}>
        <FoodItem  
          id={item.id}
          image={item.img} 
          title={item.title} 
          price={item.price} 
          category={item.category} 
        />
        </div>)
  
  return (
    <>
    <Navbar />
    <div className='itempage'>

      <div className="category-pane">
        <h3>Categories</h3>
        <hr />
        <ul>
        <li><a>Shawarmas</a></li>
        <li><a>Sandwiches</a></li>
        <li><a>Biryanis</a></li>
        <li><a>Chinese</a></li>
        <li><a>Mexican</a></li>
        </ul>
      </div>
      
      <div className="item-pane">
        
        <div className="search-bar">
          <button className="search-icon">🔍</button>
          <input
                type="text"
                className="searchbar-input"
                placeholder="Search items..."
                onChange={search}
                value={query}
          />
        </div>
    
        <div className="item-display">
          {/* <ul>
            {filteredData.map(item => (<li key={item.id}>{item.title}</li>))}
          </ul> */}
          {itemDisplay}
        </div>
        </div>
      </div>
    <Footer />
    </>
  )
}

//  const foodDisplay = foodList.map((item) =>
//     FoodItem(item.id, item.img, item.title, item.price, item.category)
//   );