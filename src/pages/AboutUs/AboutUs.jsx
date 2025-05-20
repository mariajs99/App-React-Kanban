import { Link } from "react-router-dom";
import "./AboutUs.css";
import userImg from "../../assets/capi.png";
import userImgDos from "../../assets/gati.png";

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
          <img src={userImgDos} width={"150px"} />
          <img src={userImg} width={"150px"} />
        </div>
        <div className="members">
          <h3>María</h3>
          <a className="rickleada" href="https://youtu.be/dQw4w9WgXcQ"><h3>Álvaro</h3> </a>
        </div>
      </div>

      <Link to="/MainBoard">
        <button className="go-back-btn">Go back</button>
      </Link>
    </div>
  );
}
export default AboutUs;
