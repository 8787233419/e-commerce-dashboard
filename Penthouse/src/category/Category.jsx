import './category.css'
import  Item from '../item-page/itempage.jsx'
import { Link } from 'react-router-dom'

export default function Category(id, image, title) {
  function handleClick() {
    // setSelectedCategory(title);
    console.log("category set " + title)
    //use event listener
  }
  return (
    <>
      <li key={id}>
        <button className='category-tile' onClick={() => handleClick()}>
        <Link to="/itempage">
            <ul className='info-inside-category-tile'>
              <li><img src={image} alt="Category: {$title$}" className='category-image' /></li>
              <li className='title-category'>{title}</li>
            </ul>
        </Link>
        </button>
    </li>
    </>
  )
}
