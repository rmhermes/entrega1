import React from "react";
import { useCustomContext } from "../../ContextManager/ContextProvider";
import {ProductCartCard } from "../../components";
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
                        <ProductCartCard key={product.id} producto={product}/>
                    ))}
                </div>
               
            </>

            : <div className="noItems">
                <h3 >No hay nada en el carrito aún</h3>
                </div>
            }
        </div>
    )
}

export default CartPage
