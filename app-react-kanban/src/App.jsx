import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/Home-page'
import Sidebar from './components/Sidebar'

function App() {
  

  return (
    <>

      <Navbar />

      <HomePage/>

      <Sidebar />

      <Footer />
    </>
  )
}

export default App
