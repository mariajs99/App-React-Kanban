import "./TaskCard.css";

function TaskCard(props) {
  
  return (
    <div className="boxToDo">
      <h3>Titulo: {props.eachTask.title}</h3>
      <button onClick={() => props.BtnDeleteTask()}>❌</button>
      <button>✅</button>
    </div>
  );
}
export default TaskCard;
