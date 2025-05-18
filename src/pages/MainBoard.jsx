import ColumnTask from "./ColumnTask/ColumnTask";
import SideBar from "./SideBar/SideBar";

function MainBoard(props) {


    return (
        <div className="main-board">
            <SideBar />
            <ColumnTask tasksState={props.tasksState}/>
        </div>
    )
}

export default MainBoard