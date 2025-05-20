import { Link } from "react-router-dom";
import "./NotFound.css"

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">
        <button className="notfound-button">Go back to homepage</button>
      </Link>
    </div>
  );
};

export default NotFound;
