import "../App.css";
import ArrowButton from "../arrowbutton/arrowbutton";
import FoodItem from "../fooditem/FoodItem";
import "./homepage.css";
import Category from '../category/Category.jsx'
import Navbar from "../Navbar/NavBar.jsx";
import Footer from "../footer/Footer.jsx";
import { Link } from 'react-router-dom';

const Home = () => {
  //hard-coded food items
  const foodList = [
    { id: 1, img: "/Shawarma.webp", title: "SHAWARMA", price: 33, category: "Shawarmas" },
    {
      id: 2,
      img: "https://imgdes.search.brave.com/Xv3D73-rAP4mx5BJcIOXixOaMN6t5izN8TX-PbTFRjI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzYzLzE0Lzgy/LzM2MF9GXzYzMTQ4/MjEwXzZDVzkyYWRC/bXRDVDhzOTZXMElZ/UEpwa1pzUGg4SVE1/LmpwZw",
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
      <Navbar />
      <div className="homepage">
        <div className="special-offers">
          <img src="seafood-offer.png" className="special-offers-img"></img>
        </div>

        <div className="heading"><a><h2>Categories</h2></a></div>
        <div className='categories'>
        <ul className="food-list">{categoryDisplay}</ul>
        {/* <ArrowButton right={true}/> */}
        </div>

        <marquee behavior="slide" direction="right" loop="infinite">
          * USE PROMO CODE "ILUVSHWRMA" FOR 40% OFF *
        </marquee>
        
        {/* this below is another form of marquee because loop of above was not working, will try to fix in later editions */}
      
      {/* <div className="marquee">
      <div class="track">
        <div class="content">&nbsp;* USE PROMO CODE "ILUVSHWRMA" FOR 40% OFF *</div>
      </div>
      <Link to="/account">
          {isSmallScreen && <FontAwesomeIcon icon={faUser} />}
          {!isSmallScreen && account}
        </Link>
      </div> */} 

  

        <div className="heading"><Link to='/itempage'><h2>Popular Items</h2></Link></div>
        <div className="popular-items">
        <ul className="food-list">{foodDisplay}</ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
