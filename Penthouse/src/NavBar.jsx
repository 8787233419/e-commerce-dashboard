import './Navbar.css';

const Navbar = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: 500, // Adjust this value to the desired scroll length
      behavior: 'smooth'
    });
  };


  return (
    <div className="navbar">
      <h1>PENTHOUSE</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="#categories" onClick={handleScroll}>Categories</a>
        <a href="/account">Account</a>
        <a href="/cart">Cart</a>
      </div>
    </div>
   );
}

export default Navbar;