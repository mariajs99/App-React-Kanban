import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import NotFound from './pages/NotFound/NotFound'
import AboutUs from './pages/AboutUs/AboutUs'
import AddTasks from './pages/AddTasks/AddTasks'
import "./App.css"
import MainBoard from './pages/MainBoard/MainBoard'
import { useState } from 'react'
import allUserData from "./data/userData.json";
import TaskDetailPage from './pages/TaskDetailsPage/TaskDetailPage'

function App() {

    const [taskList, setTaskList] = useState(allUserData);


  return (
    <>

      <Navbar />

      {/*<MainBoard/>*/}

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/MainBoard' element={<MainBoard taskList={taskList} setTaskList={setTaskList} />} />
          <Route path="/AddTasks" element={<AddTasks taskList={taskList} setTaskList={setTaskList}/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/TaskDetail/:taskId' element={<TaskDetailPage taskList={taskList} setTaskList={setTaskList}/>} />


          <Route path='*' element={<NotFound/>}/>
        </Routes>

      <Footer />
    </>
  )
}

export default App
