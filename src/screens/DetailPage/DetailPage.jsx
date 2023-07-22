import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Counter } from '../../components'
import './detailPage.css'
const DetailPage =()=>{
    const {id} = useParams()
    const { getProductById, getProductCartById, addProductCart, isInCart} = useCustomContext()
    const [productDetail, setProductDetail] = useState(isInCart(id) ? getProductCartById(id) : getProductById(id))
    
    return(
        <div className='detailPage'>
            <div className='contDetail'>
            <img className='imgCard' src={productDetail.img} alt="" />
            <h2>{productDetail.nombre}</h2>
            <h3>Precio: ${productDetail.precio}</h3>
            <p>Descripción: {productDetail.descripcion}</p>
            <span className='spanHistoria'>Historia: {productDetail.historia}</span>

        { isInCart(id)
        ? 
            <Counter initialValue = {productDetail.quantity} stock= {productDetail.stock} id= {productDetail.id}/> 
            :
            <Counter initialValue={1} stock ={productDetail.stock} id={productDetail.id}/>
    }
        </div>
        </div>
    )
}
export default DetailPage
