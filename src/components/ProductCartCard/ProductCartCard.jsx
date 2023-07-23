import React from "react";
import './productCartCard.css'

const ProductCartCard = ({producto}) => {
    return(
        <div className="cartCard">
            <h2>{producto.nombre}</h2>
            <img className='imgCardCart' src={producto.img} alt={producto.nombre} />
            <h3>Precio: ${producto.precio}</h3>
            <p>Cantidad: {producto.quantity}</p>
            
        </div>
    )
}
export default ProductCartCard