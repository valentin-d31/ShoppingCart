import {Link} from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    return(
        <div>
            <nav className="nav-top">
                <Link to="/">ACCUEIL</Link>
                <Link to="/produits">PRODUITS</Link>
                <Link to="/contact">CONTACT</Link>

            </nav>
        </div>
    )
}