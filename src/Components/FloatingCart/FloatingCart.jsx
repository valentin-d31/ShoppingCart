import cartIcon from './shopping-cart.svg';
import './FloatingCart.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

//2.AJOUT DES ELEMENTS AU PANIER (ICON PANIER)
export default function FloatingCart() {
    //je montre les elements selectionné depuis le panier
    //dans le state cart[]
    //au clic du mug depuis (ProductShowcase)
    const shoppingCart = useSelector(state => state)

    let totalItems = 0;
    for(const item of shoppingCart.cart){
        totalItems += item.quantity;
    }

    return (
        <Link to="/shoppingCart">
            <div className="floating-cart">
                <p>Votre Panier</p>
                <div className="img-notif-container">
                    <img src={cartIcon} alt="icône cadi" />
                    <span className="notif">{totalItems}</span>
                </div>
            </div>
        </Link>
    );
}
