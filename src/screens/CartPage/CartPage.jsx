import React from "react";
import { useCustomContext } from "../../ContextManager/ContextProvider";
import { ProductCard, ProductCartCard } from "../../components";
import './cartPage.css'
const CartPage =()=>{
    const {cart, getTotal} = useCustomContext()

    return (
        <div className="cartPage">
            {cart.length > 0 ? 
            <>
             <div className="contTotal">
                    Total: ${getTotal()}
                </div>
                <div className="cardInCart">
                    {cart.map(product =>(
                        <ProductCartCard hey={product.id} producto={product}/>
                    ))}
                </div>
               
            </>

            : <div className="card">
                <h3 className="noItems">No hay nada en el carrito aún</h3>
                </div>
            }
        </div>
    )
}

export default CartPage
