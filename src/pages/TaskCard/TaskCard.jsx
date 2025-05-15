import { useState } from "react";
import allUserData from "../../data/userData.json";
import "./TaskCard.css";

function TaskCard(props) {
  const [taskList, setTaskList] = useState(allUserData);
  
  function btnDeleteTask(index) {
    const cloneData = [...taskList];
    cloneData.splice(index, 1);
    setTaskList(cloneData);
  }

  return (
    <main>
      
      {taskList.map((eachDataTask, index) => {
        return (
          <div key={eachDataTask.status} className="boxToDo">
            
            <h3>Titulo: {eachDataTask.title}</h3>
              <button onClick={() => btnDeleteTask(index)}>❌</button>
              <button>✅</button>
          </div>
        );
      })}
    </main>
  );
}
export default TaskCard;