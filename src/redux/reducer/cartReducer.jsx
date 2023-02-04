const INITIAl_STATE = {
    cart: []
}

export default function cartReducer(state = INITIAl_STATE, action) {
    switch (action.type) {
        case "ADDITEM" :
            //est ce que dans mon tbl cart[] j'ai deja l'element que j'envoie(id)
            const indexItemAdd = state.cart.findIndex
            (obj => obj.id === action.payload.id)

            //2.si j'ai deja un mug (id que j'ai envoyé)
            //utile dans le cas ou on veut tracer l'id, exemple ajout du meme mug
            // plusieurs fois, comme dans ce type de cas
            if(indexItemAdd !== -1) {

                const updatedQuantity = {
                    //3.créer une copie de l'objet à mettre à jourt{id}
                    ...state.cart[indexItemAdd],
                    //payload.quantity = à la valeur de mon input
                    //quantity <input> du <form>
                    quantity: state.cart[indexItemAdd].quantity +
                        action.payload.quantity

                }
                const newArr = [...state.cart]
                //je decoupe indexItemAdd, et je le remplace par
                //updatedQuantity (mon nouvelle objet)
                newArr.splice(indexItemAdd, 1, updatedQuantity);
                return {
                    cart: newArr,
                };

            } else {
                //1.
                const newArr = [...state.cart]
                //j'envoie les données du ProductShowcase
                newArr.push(action.payload)
                return {
                    cart: newArr
                }
            }

        case "UPDATEITEM" :
            return {

            }
    }

    return state;
}