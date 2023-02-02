import cartIcon from './shopping-cart.svg';
import './FloatingCart.css'
import {Link} from "react-router-dom";

export default function FloatingCart() {
    //1.element cart increment à droite
    return(
            <Link to="shoppingCart">
                <div className="floating-cart">
                    <p>Votre Panier</p>
                    <div className="img-notif-container">
                        <img src={cartIcon} alt="icone cadi"/>
                        <span className="notif">0</span>
                    </div>
                </div>
            </Link>
    )
}
