import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar/NavBar.jsx';
import Home from './Home Page/Home.jsx';
import Order from "./order.jsx";
import './App.css';
import Login from "./Log-In/loginSiginup.jsx";
import Category from './Category/Category.jsx';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  const hideNavbarRoutes = ['/login'];  // hide navbar in login page

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
