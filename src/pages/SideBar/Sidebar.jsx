import { Link } from "react-router-dom";
import "./Sidebar.css";

function SideBar() {
  return (
    <Link>
      <div className="SideBar-menu">
        <button>Home</button>
        <button>Add To Do</button>
        <Link to="/AboutUs">
          <button>About us</button>
        </Link>
      </div>
    </Link>
  );
}

export default SideBar;
