// import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom'
import Home from './component/Home/Home'
import About from './component/About/About'
import Vans from './component/Vans/Vans'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App


