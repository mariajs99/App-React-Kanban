import ColumnTask from "../ColumnTask/ColumnTask";
import SideBar from "../SideBar/SideBar";
import "./MainBoard.css"


function MainBoard(props) {

    return (
        <div className="main-board">
            <SideBar />
            <ColumnTask taskList={props.taskList} setTaskList={props.setTaskList}/>
        </div>
    )
}

export default MainBoard