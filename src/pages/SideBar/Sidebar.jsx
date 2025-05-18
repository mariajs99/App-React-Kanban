import { Link } from "react-router-dom";
import "./Sidebar.css";
import AddTasks from "../AddTasks/AddTasks";

function SideBar() {
  return (
      <div className="SideBar-menu">
        <Link to="/">
        <button>Home</button>
        </Link>
        <Link to="/AddTasks">
        <button>Add To Do</button>
        </Link>

        <Link to="/AboutUs">
          <button>About us</button>
        </Link>

      </div>

  );
}

export default SideBar;
