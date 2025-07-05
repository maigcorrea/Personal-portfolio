import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Layout from './layout/Layout'
import './styles/fonts.css';

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
