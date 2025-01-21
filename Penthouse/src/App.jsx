import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './login.jsx'
import Signin from './signup.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
      </Routes>
    </Router>
      </div> 
    </>
  )
}

export default App