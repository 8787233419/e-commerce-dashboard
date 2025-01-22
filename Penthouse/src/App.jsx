import Navbar from './NavBar'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './login.jsx'
import Signin from './signup.jsx'import './Navbar.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    
      <div className="App">
      <Navbar />
      <div className="content">
        <Home />
         <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
      </Routes>
    </Router>
      </div> 
      </div>
  );
}

export default App