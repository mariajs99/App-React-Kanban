import ColumnTask from "../ColumnTask/ColumnTask";
import SideBar from "../SideBar/SideBar";
import { useState } from 'react'
import "./MainBoard.css"


function MainBoard() {
/*    const [tasksState, setTasksState] = useState([]);

    const handleAddTask = ((newTask) => {
        setTasksState((prevTasks) => [...prevTasks, newTask]);
            })
         */


    return (
        <div className="main-board">
            <SideBar/>
            <ColumnTask />
        </div>
    )
}

export default MainBoard