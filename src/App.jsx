import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Footer from './components/Footer'
import PageNotFound from './pages/pageNotFound'
import TermsOfService from './pages/termsOfService'
import {ServicesPage, ProjectsPage} from './pages/services'
import { AboutPage } from './pages/about'
import { ContactUsPage } from './pages/contact-us'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllProjects } from './slices/projectsSlice'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();
  const {projects} = useSelector((state) => state.projects);
  useEffect(() => {
   dispatch(GetAllProjects());
   console.log("Projects found: " + projects);
  }, [dispatch])
  return (
    <>
    
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/terms' element={<TermsOfService/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      {/* <Route path='/services' element={<ServicesPage/>}/>
      <Route path='/projects' element={<ProjectsPage/>}/> */}
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactUsPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
