import inventory from "../../data/inventory";
import './ProductShowcase.css'
import {useParams} from "react-router-dom";
import {useState} from "react";

export default function ProductShowcase() {

    const [nbMugs, setNbMugs] = useState(1)
    const {id} = useParams()
    //findIndex=>trouve l'index d'un objet dans un tbl d'object
    //.Comparaison id du table d'obj et l'id sur lequel je clic
    const productClicked = inventory.findIndex(obj => obj.title
        .replace(/\s+/g, "").
        trim() === id)

    const updateMugs = e => {
        //on le transforme en Number est pas chaine de cara
        setNbMugs(Number(e.target.value))
    }

    return(
        <div className="showcase">
            <div className="container-img-showcase">
                <img
                    className="img-showcase"
                    //chaine de caractère=[]l'img de l'id sur lequel je clic
                    src={process.env.PUBLIC_URL +
                        `/images/${inventory[productClicked].img}.png`}
                    alt=""
                />
            </div>
            <div className="product-infos">
                <h2>{inventory[productClicked].title}</h2>
                <p>Prix: {inventory[productClicked].price}€</p>

                <form onSubmit={addToCart}>
                    <label htmlFor="quantity">Quantité</label>
                    <input
                        type="number"
                        id="quanitity"
                        //to way data biding
                        value={nbMugs}
                        onChange={updateMugs}
                    />
                    <button>Ajouter au panier</button>
                    <span
                        ref={addingInfo}
                        className="adding-info"></span>
                </form>
            </div>
        </div>
    )
}