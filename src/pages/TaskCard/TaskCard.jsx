import { Link } from "react-router-dom";
import "./TaskCard.css";

function TaskCard(props) {
  
  return (
    <div className="boxToDo">
      <h3>Titulo: {props.eachTask.title}</h3>
      <button onClick={() => props.BtnDeleteTask()}>❌</button>
      {/* <button>✅</button> */}
      <Link to={`/TaskDetail/${props.eachTask.id}`} >
        <button className="btn-taskDetail">See more</button>
      </Link>
    </div>
  );
}
export default TaskCard;
