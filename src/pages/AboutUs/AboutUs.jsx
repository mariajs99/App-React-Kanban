import { Link } from "react-router-dom";
import "./AboutUs.css";
import userImg from "../../assets/images.png";

function AboutUs() {
  return (
    <div className="container">
      <h1>About the App</h1>
      <div className="app-description">
        <p>
          This Kanban application is a simple web app designed to visually
          organize tasks across three columns: To Do, In Progress, and Done.
          Users can add tasks through a form, view detailed information by
          clicking on each task, update their status to reflect progress, and
          delete tasks when no longer needed.
        </p>
      </div>

      <div className="team-members">
        <h1>About us</h1>
        <div className="members">
          <img src={userImg} width={"100px"} />
          <img src={userImg} width={"100px"} />
        </div>
        <div className="members">
          <h3>María</h3>
          <h3>Alvaro</h3>
        </div>
      </div>

      <Link to="/MainBoard">
        <button className="go-back-btn">Go back</button>
      </Link>
    </div>
  );
}
export default AboutUs;
