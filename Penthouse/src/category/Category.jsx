import './category.css'

export default function Category(id, image, title) {
  return (
    // <>
    //   <li key={id}>
    //     <button className='category-tile'>
    //         <ul className='info-inside-category-tile'>
    //           <li><img src={image} alt="Category: {$title$}" className='category-image' /></li>
    //           <li>{title}</li>
    //         </ul>
    //     </button>
    // </li> 
    // </>
    <div className="category-index" id="cat-ind">
      <div className="heading"><h3>Categories</h3></div>
      <div className="items">
      </div>
    </div>
  )
}
