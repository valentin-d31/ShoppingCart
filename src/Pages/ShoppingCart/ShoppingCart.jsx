import {useDispatch, useSelector} from "react-redux";

//3. AJOUT AU PANIER
export default function ShoppingCart() {

    const storeState = useSelector(state => state)
    const dispatch = useDispatch()

    const handleChange = (event, id) => {

        const indexItem = storeState.cart.findIndex(obj => obj.id === id)

        const objUpdated = {
            //je copie l'ancien objet et je change la qté
            ...storeState.cart[indexItem],
            //je modifie la valeur (nbr)
            quantity: Number(event.target.value)
        }

        dispatch({
            type: "UPDATEITEM",
            payload: objUpdated
        })

    }

    //4. prix total

    let totalPrice = 0;
    //si il n'y a pas d'obj ds le tableau je ne fais rien
    if(storeState.cart.length !== 0) {
        //sinon pour chaque obj unique dans le tbl
        for(const item of storeState.cart){
            const itemPrice = item.price * item.quantity;
            totalPrice += itemPrice;
        }
    }

    return (
        <div className="global-container">
            <p className="heading-cart">Votre panier :</p>
            <ul className="cart-list">
                {storeState.cart.map((item) => (
                    <li key={item.id}>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                `/images/${item.img}.png`
                            }
                            alt=""
                        />
                        <div className="bloc-cart-infos">
                            <h4>{item.title}</h4>
                            <p>Price: {item.price}€</p>
                        </div>
                        <div className="bloc-input">
                            <label htmlFor="quantityInput">Quantité</label>
                            <input
                                //modifier la quantité d'un mug ajouté
                                //{item.id} le bon id
                                onChange={e => handleChange(e, item.id)}
                                id="quantityInput"
                                type="number"
                                value={item.quantity} />
                        </div>
                    </li>
                ))}
            </ul>
            <p className="total-price">Total : {`${totalPrice.toFixed(2)}€`}</p>
            <button className="btn-cart">Procéder au paiement</button>
        </div>
    );
}