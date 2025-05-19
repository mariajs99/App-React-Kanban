import "./ColumnTask.css";
import TaskCard from "../TaskCard/TaskCard";
import allUserData from "../../data/userData.json";
import { useState } from "react";
import AddTasks from "../AddTasks/AddTasks";

function ColumnTask() {
  const [taskList, setTaskList] = useState(allUserData);

  /*  function btnDeleteTask(index) {
    const cloneData = [...taskList];
    cloneData.splice(index, 1);
    setTaskList(cloneData);
    } */

  function BtnDeleteTask(id) {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  return (
    <div className="columnTask">

      <div className="tasks">
        <div className="toDo">
          <h1>To Do</h1>
          {taskList
            .filter((eachTask) => {
              return eachTask.status === "To Do";
            })
            .map((eachTask) => {
              return (
                <TaskCard
                  key={eachTask.id}
                  eachTask={eachTask}
                  BtnDeleteTask={() => BtnDeleteTask(eachTask.id)}
                />
              );
            })}
        </div>

        <div className="inProgress">
          <h1>In progress</h1>
          {taskList
            .filter((eachTask) => {
              return eachTask.status === "In Progress";
            })
            .map((eachTask) => {
              return (
                <TaskCard
                  key={eachTask.id}
                  eachTask={eachTask}
                  BtnDeleteTask={() => BtnDeleteTask(eachTask.id)}
                />
              );
            })}
        </div>
        <div className="done">
          <h1>Done</h1>
          {taskList
            .filter((eachTask) => {
              return eachTask.status === "Done";
            })
            .map((eachTask) => {
              return (
                <TaskCard
                  key={eachTask.id}
                  eachTask={eachTask}
                  BtnDeleteTask={() => BtnDeleteTask(eachTask.id)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ColumnTask;
