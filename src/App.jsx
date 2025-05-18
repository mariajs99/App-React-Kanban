import { useState } from 'react'
import './App.css'
import allUserData from './data/userData.json'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import NotFound from './pages/NotFound/NotFound'
import AboutUs from './pages/AboutUs/AboutUs'
import AddTasks from './pages/AddTasks/AddTasks'
import MainBoard from './pages/MainBoard'


function App() {
    const [tasksState, setTasksState] = useState([]);

    const handleAddTask = ((newTask) => {
        setTasksState((prevTasks) => [...prevTasks, newTask]);
    })

  return (
    <>

      <Navbar />

      {/*<MainBoard/>*/}

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/MainBoard' 
          element={<MainBoard tasksState={tasksState}/>}/>


          <Route path="/AddTasks" 
          element={<AddTasks onAddTask={handleAddTask}/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>

          <Route path='*' element={<NotFound/>}/>
        </Routes>

      <Footer />
    </>
  )
}

export default App
