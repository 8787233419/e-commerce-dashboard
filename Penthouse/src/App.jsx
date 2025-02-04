import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar/NavBar.jsx'
import Home from './Home Page/Home.jsx'
import './App.css'
import Item from './item-page/itempage.jsx';
// import Login from './Log-In/login.jsx'
import Signup from './signup.jsx'
import Cart from './Cart/Cart.jsx'
// import NewNavbar from './newnavbar.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
      <Router>
        <Navbar />
          <Routes>
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/" element={<Home />} />
            <Route path="/itempage" element={<Item />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </Router>
  );
}

export default App