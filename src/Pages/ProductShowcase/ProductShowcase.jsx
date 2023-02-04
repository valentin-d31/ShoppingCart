import inventory from "../../data/inventory";
import './ProductShowcase.css'
import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";

export default function ProductShowcase() {

    const [nbMugs, setNbMugs] = useState(1)
    //1.
    const {id} = useParams()
    //envoyer au store avec dispatch
    const dispatch = useDispatch()

    //1.findIndex=>trouve l'index d'un objet dans un tbl d'object
    //.Comparaison id du table d'obj et l'id sur lequel je clic
    const productClicked = inventory.findIndex(obj => obj.title
        .replace(/\s+/g, "").
        trim() === id)

    const updateMugs = e => {
        //on le transforme en Number est pas chaine de cara
        setNbMugs(Number(e.target.value))
    }

    const addingInfo = useRef();
    let timerInfo;
    let display = true;

    const addToCart= e => {
        e.preventDefault()
        const itemAdded = {
            ...inventory[productClicked],
            quantity: nbMugs
        }

        dispatch({
            type: "ADDITEM",
            payload: itemAdded
        })

        //ajout du message
        addingInfo.current.innerText = "Ajouter au panier"

        if(display) {
            display = false;
            //faire disparaitre le message
            timerInfo = setTimeout(() => {
                addingInfo.current.innerText = "";
                display = true;
            }, 500)
        }
    }

    useEffect(() => {
        return () => {
            //nettoie le timerInfo pour eviter les erreur
            //au rechargement de la page
            clearTimeout(timerInfo)
        }
    }, [])

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
                        className="adding-info"></span>
                </form>
            </div>
        </div>
    )
}