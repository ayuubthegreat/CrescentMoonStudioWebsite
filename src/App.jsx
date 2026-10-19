import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Footer from './components/Footer'
import PageNotFound from './pages/pageNotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
