import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import NotFound from './pages/NotFound/NotFound'
import AboutUs from './pages/AboutUs/AboutUs'
import AddTasks from './pages/AddTasks/AddTasks'
import MainBoard from './pages/MainBoard/MainBoard'


function App() {


  return (
    <>

      <Navbar />

      {/*<MainBoard/>*/}

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/MainBoard' 
          element={<MainBoard />}/>


          <Route path="/AddTasks" 
          element={<AddTasks/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>

          <Route path='*' element={<NotFound/>}/>
        </Routes>

      <Footer />
    </>
  )
}

export default App
