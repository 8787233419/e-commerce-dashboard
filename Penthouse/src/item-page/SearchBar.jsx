import React from 'react'
import './itempage.css'
import { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState("")

    //hard-coded data the search bar searches through
    const [data, setData] = useState([
        { id: 1, title: "chicken shawarma", category: "Shawarmas" },
        { id: 2, title: "veg sandwich", category: "Sandwiches" },
        { id: 3, title: "Veg Biryani", category: "Biryanis" },
        { id: 4, title: "Non-veg biryani", category: "Biryanis" },
        { id: 5, title: "Chicken sandwich", category: "Sandwiches" },
        { id: 6, title: "noodles", category: "Chinese" },
        { id: 7, title: "tacos", category: "Tacos" },
    ]);

    function search(e){
        e.preventDefault()
        setQuery(e.target.value)
    }

    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );


  return (filteredData)
}

export default SearchBar
