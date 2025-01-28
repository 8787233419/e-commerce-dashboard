import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../Navbar/NavBar'
import './itempage.css'
import SearchBar from './SearchBar'

export default function Item() {
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
          <SearchBar />
        </div>
        <div className="item-display"></div>
      </div>
      
    </div>
    <Footer />
    </>
  )
}
