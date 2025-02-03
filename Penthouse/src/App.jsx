import Navbar from './Navbar/NavBar.jsx'
import Home from './Homepage/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Order from "./order.jsx";
import './App.css'
import Login from './login/loginSiginup.jsx'
import NewNavbar from './newnavbar.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
      <>
      <Navbar />
      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home />} />
      
      </Routes>
    </Router>
       <Home />
    </>
  );
}

export default App