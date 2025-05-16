import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ColumnTask from "./pages/ColumnTask/ColumnTask"
import NotFound from './pages/NotFound/NotFound'
import AboutUs from './pages/AboutUs/AboutUs'
import AddTasks from './pages/AddTasks/AddTasks'


function App() {
  

  return (
    <>

      <Navbar />

      {/* <div className='principalContent'> */}
        {/* <SideBar />
        <Body/>   */}  

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/HomePage' element={<ColumnTask/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path="/AddTasks" element={<AddTasks/>}/>
          
          <Route path='*' element={<NotFound/>}/>
        </Routes>

      {/* </div> */}

      <Footer />
    </>
  )
}

export default App
