import ColumnTask from "../ColumnTask/ColumnTask";
import SideBar from "../SideBar/SideBar";
import "./MainBoard.css"


function MainBoard(props) {
/*    const [tasksState, setTasksState] = useState([]);

    const handleAddTask = ((newTask) => {
        setTasksState((prevTasks) => [...prevTasks, newTask]);
            })
         */


    return (
        <div className="main-board">
            <SideBar />
            <ColumnTask taskList={props.taskList} setTaskList={props.setTaskList}/>
        </div>
    )
}

export default MainBoard