import { Link } from "react-router-dom";
import "./HomePage.css"

function HomePage() {
  return (
    <div className="homepage-container">
      <h1>TaskFlow</h1>
        <p>Organize your tasks by their state and boost your productivity</p>
      <Link to="/MainBoard">
        <button>Go to Task Menu</button>
      </Link>
    </div>
  );
}

export default HomePage;
