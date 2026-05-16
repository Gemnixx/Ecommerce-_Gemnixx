import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import About from './pages/About'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
      <ToastContainer position="top-right" />
      
    </div>
  )
}

export default App
