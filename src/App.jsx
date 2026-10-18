import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
