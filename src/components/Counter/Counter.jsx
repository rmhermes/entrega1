import React, {useState} from 'react';
import { useCustomContext } from '../../ContextManager/ContextProvider';

import './counter.css'

const Counter = ({initialValue, stock, id}) =>{
    const {addProductCart} = useCustomContext()
    const [quantity, setQuantity] = useState(initialValue)
    const onClickAddProduct = ()=>{
        addProductCart(id,quantity)
        Swal.fire(
            'Se ha sumado un item al carrito'
        )
    }
    return(
        <>
                    <div className='contCount'>
            <div className='counter'>
                <button onClick={() => setQuantity(quantity>1 ? quantity -1 : quantity) }>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity === stock ? quantity : quantity + 1) }>+</button>
                </div>
            <button onClick={onClickAddProduct}>Agregar al carrito</button>
            </div>
        </>
    )
}
export default Counter