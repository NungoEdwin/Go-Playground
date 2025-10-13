// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Route,Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     {/* <div className="text-center mt-20 text-2xl text-blue-500">
      Hello Tailwind!
    </div> */}
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />

    </Routes>
      
    </>
  )
}

export default App
