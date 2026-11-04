import { useEffect, useState } from 'react'
import { NoAIPolicyPage } from './pages/policy-documents'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Footer from './components/Footer'
import PageNotFound from './pages/pageNotFound'
import TermsOfService from './pages/termsOfService'
import { ScheduledProjectsPage, FinishedProjectsPage } from './pages/products'
import { AboutPage } from './pages/about'
import { ContactUsPage } from './pages/contact-us'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllProjects } from './slices/projectsSlice'
import { GetUserByID } from './slices/userSlice'
import { CreateUpdateProjectPage } from './pages/createUpdateProject'
import AuthenticationFirewall from './components/AuthenticationFirewall'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();
  const {projects} = useSelector((state) => state.projects);
  const {isFromExternal} = useSelector((state) => state.user);
  useEffect(() => {
   dispatch(GetAllProjects());
   console.log("Projects found: " + projects);
   console.log(localStorage.getItem('c-account-user'))
   if (localStorage.getItem('c-account-user')) {
       dispatch(GetUserByID());
   }
  }, [dispatch])
  return (
    <>
    
    <BrowserRouter>
     <Navbar/>
     <div className='page-shell'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/terms' element={<TermsOfService/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/projects-scheduled' element={<ScheduledProjectsPage/>}/>
      <Route path='/finished-projects' element={<FinishedProjectsPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactUsPage/>}/>
      <Route path='/create-project' element={<AuthenticationFirewall needsAuthentication={true}><CreateUpdateProjectPage/></AuthenticationFirewall>}/>
      <Route path='/login/*' element={<LoginPage/>}/>
      <Route path='/register/*' element={<RegisterPage/>}/>
      <Route path='/no-ai' element={<NoAIPolicyPage/>}/>
      {projects.map((project) => (
        <Route key={project.id} path={`/edit-project/${project.id}`} element={<CreateUpdateProjectPage project={project}/>} />
      ))}

    </Routes>
     </div>
    {!isFromExternal && <Footer/>}
    </BrowserRouter>
    </>
  )
}

export default App
