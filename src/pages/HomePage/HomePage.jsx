import { Link } from "react-router-dom";

function HomePage(){
    return(
        <Link to="/HomePage">
            <button>
                Task Menu
            </button>
        </Link>
    )
}

export default HomePage;