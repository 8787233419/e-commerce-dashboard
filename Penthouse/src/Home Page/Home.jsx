import "../App.css";
import FoodItem from "../Food Item/FoodItem.jsx";
import "./homepage.css";
import Category from '../Category/Category.jsx'
import '../Category/category.css'
import Navbar from "../Navbar/NavBar.jsx";
import Footer from "../footer/Footer.jsx";
import { Link } from 'react-router-dom';
import Slideshow from "../SlideShow/SlideShow.jsx";
import MarqueeComponent from "../Home Page/Marquee.jsx";
import Item from "../item-page/itempage.jsx";

const Home = () => {
  //hard-coded food items
  const foodList = [
    { id: 1, img: "/Shawarma.webp", title: "SHAWARMA", price: 33, category: "Shawarmas" },
    {
      id: 2,
      img: "https://img.search.brave.com/Xv3D73-rAP4mx5BJcIOXixOaMN6t5izN8TX-PbTFRjI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzYzLzE0Lzgy/LzM2MF9GXzYzMTQ4/MjEwXzZDVzkyYWRC/bXRDVDhzOTZXMElZ/UEpwa1pzUGg4SVE1/LmpwZw",
      title: "SANDWICH",
      price: 25,
      category: "Sandwiches"
    },
    { id: 3, img: "", title: "Veg Biryani", price: 55, category: "Biryanis" },
  ];
  const foodDisplay = foodList.map((item) =>
    FoodItem(item.id, item.img, item.title, item.price, item.category)
  );
  

  //hard-coded categories
  const categoryList = [
    { cid: 1, cimg: '/indian-food.png', ctitle: 'INDIAN' },
    { cid: 2, cimg: '/burger.png', ctitle: 'FAST FOOD'}
  ];
  const categoryDisplay = categoryList.map((categ) => Category(categ.cid, categ.cimg, categ.ctitle));

  return (
    <>
      <Slideshow />
      <div className="homepage">

        <div className="heading"><h2>Categories</h2></div>
        <div className='categories'>
        <ul className="food-list">{categoryDisplay}</ul>
        {/* <ArrowButton right={true}/> */}
      </div>
        <MarqueeComponent />
        <div className="heading-popular-items"><Link to='/itempage'><a><h2>Popular Items</h2></a></Link></div>
        <div className="popular-items">
        <ul className="food-list">{foodDisplay}</ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
