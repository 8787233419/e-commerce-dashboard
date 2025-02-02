import './category.css'

export default function Category(id, image, title) {
  return (
    <>
      <li key={id}>
        <button className='category-tile'>
            <ul className='info-inside-category-tile'>
              <li><img src={image} alt="Category: {$title$}" className='category-image' /></li>
              <li className='title-category'>{title}</li>
            </ul>
        </button>
    </li> 
    </>
  )
}
