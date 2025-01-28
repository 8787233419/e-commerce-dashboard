import React from 'react'
import './itempage.css'
import { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState("")

    //hard-coded data the search bar searches through
    const [data, setData] = useState([
        { id: 1, title: "SHAWARMA" },
        {
            id: 2,
            title: "SANDWICH"
        },
    ]);

    function search(e){
        e.preventDefault()
        setQuery(e.target.value)
    }

    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );


  return (
    <>
    <div className='searchbar'>
      <input
            type="text"
            className="searchbar-input"
            placeholder="Search items..."
            onChange={search}
            value={query}
            />
            <button className="search-icon">🔍</button>
    </div>
    <ul>
        {filteredData.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
    </ul>
    </>
  )
}

export default SearchBar
