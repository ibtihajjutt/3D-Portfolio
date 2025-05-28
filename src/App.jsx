import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import ProjectsDetail from './pages/ProjectsDetail.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectsDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App