import React from "react";
import {Link} from 'react-router-dom'
import './productCard.css'


const ProductCard = ({producto}) =>{
    return (
        <div className="productCard">
            <div className="card">
            <h2>{producto.nombre}</h2>
            <img src={producto.img} alt="imgplant" />
            <h3>Precio: ${producto.precio}</h3>
            <p>Descripción: {producto.descripcion}</p>
            <Link to={'/detail/' + producto.id}>Ver producto</Link>
            </div>
        </div>
    )
}

export default ProductCard
