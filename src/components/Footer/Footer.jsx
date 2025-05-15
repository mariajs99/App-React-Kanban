import logoGit from "../../assets/github-logo.png"
import "./Footer.css"

function Footer () {

    return (
        <div className="footer">
            <a href="https://github.com/mariajs99/App-React-Kanban" target="_blank"><img src={logoGit} alt="" /></a>        
        </div>
    )
}

export default Footer;