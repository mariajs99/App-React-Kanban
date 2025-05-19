import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./TaskDetailPage.css"

function TaskDetailPage(props) {
  const params = useParams();

  const foundTask = props.taskList.find((eachTask) => {
    return eachTask.id === params.taskId;
  });

  console.log(foundTask);

  return (
    <div className="task-details">
      <h1>Task details</h1>

      <div className="task-info">
        <h4><span>Title: </span>{foundTask.title}</h4>
        <h4><span>Description: </span>{foundTask.description}</h4>
        <h4><span>Assignee: </span>{foundTask.assignee}</h4>
        <h4><span>Status: </span>{foundTask.status}</h4>
        <h4><span>Priority: </span>{foundTask.priority}</h4>
      </div>

      <Link to="/MainBoard">
        <button className="go-back-btn">Go back</button>
      </Link>
    </div>
  );
}

export default TaskDetailPage;
