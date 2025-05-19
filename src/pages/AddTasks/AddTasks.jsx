import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

function AddTasks(props) {

  const formRef = useRef(null);

  const [titleInputValue, setTitleInputValue] = useState("");
  const [descriptionInputValue, setDescriptionInputValue] = useState("");
  const [assigneeInputValue, setAssigneeInputValue] = useState("");
  const [statusInputValue, setStatusInputValue] = useState("");
  const [priorityInputValue, setPriorityInputValue] = useState("");
  /*const [createdDateInputValue, setCreatedDateInputValue] = useState("");
  const [dueDateInputValue, setDueDateInputValue] = useState(""); */

  const handleTitleChange = (event) => {
    setTitleInputValue(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescriptionInputValue(event.target.value);
  };

  const handleAssigneeChange = (event) => {
    setAssigneeInputValue(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatusInputValue(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriorityInputValue(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    formRef.current.reset();

    const taskToAdd = {
      title: titleInputValue,
      description: descriptionInputValue,
      assignee: assigneeInputValue,
      status: statusInputValue,
      priority: priorityInputValue,
      id: Date.now()
    };

    props.setTaskList((actualValeOfTheState) => {
      let newValueOfState = [...actualValeOfTheState, taskToAdd]
      return newValueOfState
    });

    setTitleInputValue("");
    setDescriptionInputValue("");
    setAssigneeInputValue("");
    setStatusInputValue("");
    setPriorityInputValue("")

  };

  return (
    <div>
      <h2>Crea una nueva tarea</h2>
      <form onSubmit={handleAddTask} ref={formRef}> 
        <div>
          <label htmlFor="text">Title: </label>
          <input type="text" name="title" onChange={handleTitleChange} />

          <label htmlFor="text">Description: </label>
          <input
            type="text"
            name="description"
            onChange={handleDescriptionChange}
          />

          <label htmlFor="text">Assignee: </label>
          <input type="text" name="assignee" onChange={handleAssigneeChange} />

          <select name="status" id="" onChange={handleStatusChange}>
            <option value="">Choose an option</option>
            <option value="To Do">To do</option>
            <option value="In Progress">In progress</option>
            <option value="Done">Done</option>
          </select>

          <select name="priority" id="" onChange={handlePriorityChange}>
            <option value="">Choose the priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <button type="submit">Add Task</button>

          <Link to="/MainBoard">
            <button>Go Back</button>
          </Link>
          
        </div>
      </form>
    </div>
  );
}

export default AddTasks;
