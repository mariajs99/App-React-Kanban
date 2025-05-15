import SideBar from "../SideBar/SideBar"
import "./ColumnTask.css"
import TaskCard from "../TaskCard/TaskCard"
import { useParams } from "react-router-dom"


function ColumnTask(){

    return(
        <div className="columnTask">
            <SideBar/>
            <div className="tasks">
                <div className="toDo">
                    <h1>To Do</h1>
                </div>
                <div className="inProgress">
                    <h1>In progress</h1>
                    
                </div>
                <div className="done">
                    <h1>Done</h1>
                    
                </div>
            </div>
        </div>
    )
}

export default ColumnTask