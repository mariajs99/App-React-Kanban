import { Link } from "react-router-dom";
import "./TaskCard.css";

function TaskCard(props) {
  
  function handleChangeStatus (event) {
    /* props.eachTask.filter((eachTaskStatus) => {
      if(eachTaskStatus.event === "To do") {
        return true;
      }else if(eachTaskStatus.event === "In Progress") {
        return true;
      }else if(eachTaskStatus.event === "Done") {
        return true;
      }else {
        return false;
      }
    }) */
    console.log(event.target.value)
    console.log(props.eachTask.id)
  }
  return (
    <div className="boxToDo">
      <h3>Titulo: {props.eachTask.title}</h3>
      <button onClick={() => props.BtnDeleteTask()}>❌</button>
      {/* <button>✅</button> */}
      <select name="status" value={props.eachTask.status} onChange={handleChangeStatus}>
            <option value="To Do">To do</option>
            <option value="In Progress">In progress</option>
            <option value="Done">Done</option>
      </select>
      <Link to={`/TaskDetail/${props.eachTask.id}`} >
        <button className="btn-taskDetail">See more</button>
      </Link>
    </div>
  );
}
export default TaskCard;
