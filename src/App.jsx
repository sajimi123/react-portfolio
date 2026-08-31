
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landingpage from './pages/Landingpage'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import PageNotFound from './pages/PageNotFound'
import Contact from './pages/Contact'
import Education from './pages/Education'

function App() {
 

  return (
    <>
      <Header/>
         <Routes>
          <Route path='' element={<Landingpage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skill' element={<Skills/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<PageNotFound/>}/>
         </Routes>
         <Footer/>
      
    </>
  )
}

export default App
