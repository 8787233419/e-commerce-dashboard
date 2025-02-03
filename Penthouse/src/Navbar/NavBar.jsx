// import './Navbar.css';

// const Navbar = () => {
//   const handleScroll = () => {
//     window.scrollBy({
//       top: 500, // Adjust this value to the desired scroll length
//       behavior: 'smooth'
//     });
//   };


//   return (
//     <div className="navbar">
//       <h1>PENTHOUSE</h1>
//       <div className="links">
//         <a href="/">Home</a>
//         <a href="#categories" onClick={handleScroll}>Categories</a>
//         <a href="/account">Account</a>
//         <a href="/cart">Cart</a>
//       </div>
//     </div>
//    );
// }
//export default Navbar;


// import './Navbar.css';

// const Navbar = () => {
//   const handleScroll = () => {
//     window.scrollBy({
//       top: 500, // Adjust this value to the desired scroll length
//       behavior: 'smooth'
//     });
//   };


//   return (
//     <div className="navbar">
//       <h1>PENTHOUSE</h1>
//       <div className="links">
//         <a href="/">Home</a>
//         <a href="#categories" onClick={handleScroll}>Categories</a>
//         <a href="/account">Account</a>
//         <a href="/cart">Cart</a>
//       </div>
//     </div>
//    );
// }


import './Navbar.css';
import { Link } from "react-router-dom"

const Navbar = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: 900, // Adjust this value to the desired scroll length
      behavior: 'smooth'
    });
  };


  return (
    <nav>
    <div className="navbar">
      <h1>PENTHOUSE</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="#categories" onClick={handleScroll}>Categories</a>
        <a href="/account">Account</a>
        <a href="/cart">Cart</a>
        {/* <Link to="/" >Home</Link>
        <a href="#categories" onClick={handleScroll}>Categories</a>
        <Link to="/account" >Account</Link>
        <Link to="/cart" >Cart</Link> */}
      </div>
    </div>
    </nav>
   );
}
export default Navbar;

{/* <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/contact" style={styles.link}>Contact</Link>
    </nav> */}