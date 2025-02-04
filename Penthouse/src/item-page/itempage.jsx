import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/NavBar";
import "./itempage.css";
import FoodItem from "../Food Item/FoodItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

//hard-coded data the search bar searches through
const data = [
  {
    id: 1,
    img: "/Shawarma.webp",
    title: "SHAWARMA",
    price: 55,
    category: "Shawarmas",
  },
  {
    id: 2,
    img: "https://img.search.brave.com/Xv3D73-rAP4mx5BJcIOXixOaMN6t5izN8TX-PbTFRjI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzYzLzE0Lzgy/LzM2MF9GXzYzMTQ4/MjEwXzZDVzkyYWRC/bXRDVDhzOTZXMElZ/UEpwa1pzUGg4SVE1/LmpwZw",
    title: "SANDWICH",
    price: 25,
    category: "Sandwiches",
  },
  {
    id: 3,
    img: "/indian-food.png",
    title: "Veg Biryani",
    price: 55,
    category: "Biryanis",
  },
  { id: 4, img: "", title: "Non-veg biryani", price: 55, category: "Biryanis" },
  {
    id: 5,
    img: "",
    title: "Chicken sandwich",
    price: 55,
    category: "Sandwiches",
  },
  { id: 6, img: "", title: "noodles", price: 55, category: "Chinese" },
  { id: 7, img: "", title: "tacos", price: 55, category: "Mexican" },
];

const categories = [
  "Shawarmas",
  "Sandwiches",
  "Biryanis",
  "Chinese",
  "Mexican",
];

export default function Item() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  function search(e) {
    e.preventDefault();
    setQuery(e.target.value);
    console.log("searched");
  }

  const finalFilteredData = filteredData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const itemDisplay = finalFilteredData.map((item) => (
    <div className="item-holder" key={item.id}>
      <FoodItem
        id={item.id}
        image={item.img}
        title={item.title}
        price={item.price}
        category={item.category}
      />
    </div>
  ));

  const allCategory = () => {
    setSelectedCategory("All");
    console.log("All categories");
  };

  const handleCategoryClick = (categ) => {
    setSelectedCategory(categ);
    console.log(categ);
  };

  const NoItems = () => {
    if (finalFilteredData == [])
      return (
        <>
          <div className="no-items">No items found</div>
        </>
      );
    else
      return (
        <>
          <div></div>
        </>
      );
  };
  console.log(finalFilteredData);

  const categoryList = categories.map((categ) => (
    <li key={categ}>
      <a style = {{color: selectedCategory === categ ? '#a22c11' : '#e53f19'}} onClick={() => handleCategoryClick(categ)} >{categ}</a>
    </li>
  ));

  return (
    <>
      <Navbar />
      <div className="itempage">
        <div className="category-pane">
          <a className="all-categories" onClick={() => allCategory()}>
            <h3>Categories</h3>
          </a>
          <div className="divider" />
          <ul>{categoryList}</ul>
        </div>

        <div className="item-pane">
          <div className="search-bar">
            <button className="search-icon">
              <FontAwesomeIcon icon={faSearch} color="#EF3F26" />
            </button>
            <input
              type="text"
              className="searchbar-input"
              placeholder="Search items..."
              onChange={search}
              value={query}
            />
          </div>

          <div className="item-display">
            {itemDisplay}
            <NoItems />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
