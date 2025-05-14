import { useState } from "react";
import allUserData from "../../data/userData.json";
import "./Home-page.css";

function HomePage() {
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
          <div key={eachDataTask.id} className="boxToDo">
            
            <h3>Titulo: {eachDataTask.title}</h3>
            <p>Descripcion: {eachDataTask.description}</p>
            <p>Assigne: {eachDataTask.assignee}</p>
            <p>Priority: {eachDataTask.priority}</p>
              <button onClick={() => btnDeleteTask(index)}>❌</button>
              <button>✅</button>
          </div>
        );
      })}
    </main>
  );
}
export default HomePage;