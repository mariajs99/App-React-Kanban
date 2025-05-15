import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <h1>Maria</h1>
      <h1>Alvaro</h1>

      <Link to="/HomePage">
        <button>Volver</button>
      </Link>
    </div>
  );
}
export default AboutUs