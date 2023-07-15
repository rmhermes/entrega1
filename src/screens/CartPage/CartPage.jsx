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
                <div>
                    {cart.map(product =>(
                        <ProductCartCard hey={product.id} producto={product}/>
                    ))}
                </div>
                <div className="contTotal">
                    Total: ${getTotal()}
                </div>
            </>
            : <h2 className="noItems">No hay nada en el carrito aún</h2>
            }
        </div>
    )
}

export default CartPage
