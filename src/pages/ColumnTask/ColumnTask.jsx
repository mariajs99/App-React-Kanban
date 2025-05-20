import "./ColumnTask.css";
import TaskCard from "../TaskCard/TaskCard";

function ColumnTask(props) {

  function handleDeleteTask(id) {
    props.setTaskList(props.taskList.filter((task) => task.id !== id));
  }

  function handleChangeStatus (event, id) {

    props.setTaskList((allTask)=>{
      const clone = structuredClone(allTask)

      let indexTask = clone.findIndex(task => task.id === id)
      clone[indexTask].status = event.target.value //esta es mejor *LA HEMOS HECHO NOSOTROS*

      /* let task = clone.find(task => task.id === id)
      task.status = event.target.value */

      return clone
    })

    console.log(event.target.value)
    console.log(id) 

  }

  return (

      <div className="tasks">
        <div className="toDo">
          <h1>To Do</h1>
          {props.taskList
            .filter((eachTask) => {
              return eachTask.status === "To Do";
            })
            .map((eachTask) => {
              return (
                <TaskCard
                  key={eachTask.id}
                  eachTask={eachTask}
                  handleDeleteTask={handleDeleteTask}
                  handleChangeStatus={handleChangeStatus}
                />
              );
            })}
        </div>

        <div className="inProgress">
          <h1>In progress</h1>
          {props.taskList
            .filter((eachTask) => {
              return eachTask.status === "In Progress";
            })
            .map((eachTask) => {
              return (
                <TaskCard
                  key={eachTask.id}
                  eachTask={eachTask}
                  handleDeleteTask={handleDeleteTask}
                  handleChangeStatus={handleChangeStatus}
                />
              );
            })}
        </div>
        <div className="done">
          <h1>Done</h1>
          {props.taskList
            .filter((eachTask) => {
              return eachTask.status === "Done";
            })
            .map((eachTask) => {
              return (
                <TaskCard
                  key={eachTask.id}
                  eachTask={eachTask}
                  handleDeleteTask={handleDeleteTask}
                  handleChangeStatus={handleChangeStatus}
                />
              );
            })}
        </div>
      </div>
  );
}

export default ColumnTask;
