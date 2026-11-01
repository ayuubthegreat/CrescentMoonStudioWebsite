import { useEffect, useState } from 'react'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Footer from './components/Footer'
import PageNotFound from './pages/pageNotFound'
import TermsOfService from './pages/termsOfService'
import { ScheduledProductsPage, ProductsPage } from './pages/products'
import { AboutPage } from './pages/about'
import { ContactUsPage } from './pages/contact-us'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllProjects } from './slices/projectsSlice'
import { GetUserByID } from './slices/userSlice'
import { CreateProjectPage } from './pages/createProject'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();
  const {projects} = useSelector((state) => state.projects);
  useEffect(() => {
   dispatch(GetAllProjects());
   console.log("Projects found: " + projects);
   console.log(localStorage.getItem('user'))
   if (localStorage.getItem('user')) {
       dispatch(GetUserByID());
   }
  }, [dispatch])
  return (
    <>
    
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/terms' element={<TermsOfService/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/products-schedule' element={<ScheduledProductsPage/>}/>
      <Route path='/finished-products' element={<ProductsPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactUsPage/>}/>
      <Route path='/create-project' element={<CreateProjectPage/>}/>
      <Route path='/login/*' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
