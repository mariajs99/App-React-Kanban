import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/Home-page'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  

  return (
    <>

      <Navbar />

      {/* <div className='principalContent'> */}
        <Sidebar />
        <HomePage/>        
      {/* </div> */}

      <Footer />
    </>
  )
}

export default App
