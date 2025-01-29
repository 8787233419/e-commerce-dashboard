import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHome, faList, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const [home] = useState("Home");
  const [category] = useState("Categories");
  const [account] = useState("Account");
  const [cart] = useState("Cart");



  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 925);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = () => {
    window.scrollBy({
      top: 500, 
      behavior: 'smooth'
    });
  };

  return (
    <div className="navbar">
      <div className='logo'>
        <h1>PENTHOUSE</h1>
      </div>
      <div className="links">
        <Link to="/">
          {isSmallScreen && <FontAwesomeIcon icon={faHome} />}
          {!isSmallScreen && home}
        </Link>
        <Link to="/categories" onClick={handleScroll}>
          {isSmallScreen && <FontAwesomeIcon icon={faList} />}
          {!isSmallScreen && category}
        </Link>
        <Link to="/account">
          {isSmallScreen && <FontAwesomeIcon icon={faUser} />}
          {!isSmallScreen && account}
        </Link>
        <Link to="/cart">
          {isSmallScreen && <FontAwesomeIcon icon={faShoppingCart} />}
          {!isSmallScreen && cart}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;