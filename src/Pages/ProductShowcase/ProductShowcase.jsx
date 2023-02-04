import inventory from "../../data/inventory";
import './ProductShowcase.css'
import {useParams} from "react-router-dom";

export default function ProductShowcase() {

    const {id} = useParams()
    //findIndex=>trouve l'index d'un objet dans un tbl d'object
    //.Comparaison id du table et l'id sur lequel je clic
    const productClicked = inventory.findIndex(obj => obj.title
        .replace(/\s+/g, "").
        trim() === id)

    return(
        <div>

        </div>
    )
}