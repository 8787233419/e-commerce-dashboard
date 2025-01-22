import Navbar from './NavBar'
import Home from './Home'
import './App.css'
import './Navbar.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    
      <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div> 
      </div>
  );
}

export default App
