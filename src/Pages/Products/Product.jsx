import heart from './heart.svg'
import './Product.css'
import inventory from "../../data/inventory";
import {Link} from "react-router-dom";

export default function Product() {
    return(
        <div className="container-products">
            {inventory.map((item) => (
                <Link to={{
                    pathname: `/produits/${item.title.replace(/\s+/g, "").
                    trim()}`,
                }}
                key={item.id}
                >
                <div className="bloc-card">
                    <div className="product-card">
                        <div className="visual-aspect">
                            <img
                            className="img-product"
                            src={process.env.PUBLIC_URL + `/images/${item.img}.png`
                            }
                            alt="produit"/>
                        </div>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    )
}