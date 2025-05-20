import { Link } from "react-router-dom";
import "./TaskCard.css";

function TaskCard(props) {
  
  return (
    <div className="boxToDo">
      <h3>Titulo: {props.eachTask.title}</h3>
      <button onClick={() => props.handleDeleteTask(props.eachTask.id)}>❌</button>
      <select name="status" value={props.eachTask.status} onChange={(event) => props.handleChangeStatus(event, props.eachTask.id)}>
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
