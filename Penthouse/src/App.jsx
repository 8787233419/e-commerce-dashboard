import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar/NavBar.jsx'
import Home from './Home Page/Home.jsx'
import './App.css'
import Category from './Category/Category.jsx';
// import Login from './Log-In/login.jsx'
// import Signin from './signup.jsx'
// import NewNavbar from './newnavbar.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
      <Router>
        <Navbar />
          <Routes>
            {/* <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signin />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Category />} />
          </Routes>
      </Router>
  );
}

export default App