import React from "react";
import {Link} from 'react-router-dom'
import './productCard.css'


const ProductCard = ({producto}) =>{
    return (
        <div className="productCard">
            <div className="card">
             <img className='imgCard' src={producto.img} alt={producto.nombre} />
             <h2>{producto.nombre}</h2>
            <h3>Precio: ${producto.precio}</h3>
            <div className="textCard">
            <p>Descripción: {producto.descripcion}</p>
            <Link to={'/detail/' + producto.id}>Ver producto</Link>
            </div></div>
        </div>
    )
}

export default ProductCard
