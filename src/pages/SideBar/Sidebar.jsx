import { Link } from "react-router-dom";
import "./Sidebar.css";

function SideBar() {

  return (
      <div className="SideBar-menu">
        <Link to="/">
        <button className="btnHome">Home</button>
        </Link>
        <Link to="/AddTasks">
        <button className="btnAddTask">Add new task</button>
        </Link>

        <Link to="/AboutUs">
          <button className="btnAboutUs">About us</button>
        </Link>

      </div>

  );
}

export default SideBar;
