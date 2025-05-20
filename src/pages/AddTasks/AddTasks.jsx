import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./AddTasks.css";

function AddTasks(props) {
  const formRef = useRef(null);
  const navigate = useNavigate();

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
      id: String(Date.now()),
    };

    props.setTaskList((actualValeOfTheState) => {
      let newValueOfState = [...actualValeOfTheState, taskToAdd];
      return newValueOfState;
    });

    setTitleInputValue("");
    setDescriptionInputValue("");
    setAssigneeInputValue("");
    setStatusInputValue("");
    setPriorityInputValue("");

    navigate("/MainBoard");
  };

  return (
    <div className="form-container">
      <h2>Create a new task</h2>
      <form onSubmit={handleAddTask} ref={formRef}>
        <div className="text-items"> 
        <fieldset >
          <legend>Task Details</legend>
          <label htmlFor="text">Title: </label>
          <input id="title" type="text" name="title" onChange={handleTitleChange} />

          <label htmlFor="text">Description: </label>
          <input
          id="description"
            type="text"
            name="description"
            onChange={handleDescriptionChange}
          />
          <label htmlFor="text">Assignee: </label>
          <input id="assignee" type="text" name="assignee" onChange={handleAssigneeChange} />
        </fieldset>
        </div>
        <div className="select-items">
        <fieldset >
          <legend>Task Status & Priority</legend>
          <select id="status" name="status"  onChange={handleStatusChange}>
            <option value="">Choose status</option>
            <option value="To Do">To do</option>
            <option value="In Progress">In progress</option>
            <option value="Done">Done</option>
          </select>

          <select name="priority" id="priority" onChange={handlePriorityChange}>
            <option value="">Choose priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </fieldset>
        </div>

        <div className="form-buttons">
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
