import { Link } from "react-router-dom"

function Header() {
    return(
        <nav>
            <Link to="/">Acceuil</Link>
            <Link to="/Survey/1">Questionnaire</Link>
            <Link to="/Freelance">Questionnaire Freelance</Link>

        </nav>
    )
}
export default Header