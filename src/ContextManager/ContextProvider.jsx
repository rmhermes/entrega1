import React, {createContext, useContext, useState} from 'react'

const Context= createContext()
const ContextProvider = ({children}) => {
    const products =[
        {
            nombre: 'producto 1',
            precio: 1000,
            id: 1,
            stock: 10,
            descripcion: 'aca va la descripción del producto'
        },
        {
            nombre: 'producto 2',
            precio: 2000,
            id: 2,
            stock: 10,
            descripcion: 'aca va la descripción del producto'
        },
        {
            nombre: 'producto 3',
            precio: 3000,
            id: 3,
            stock: 10,
            descripcion: 'aca va la descripción del producto'
        },
        {
            nombre: 'producto 4',
            precio: 4000,
            id: 4,
            stock: 10,
            descripcion: 'aca va la descripción del producto'
        },
        {
            nombre: 'producto 5',
            precio: 5000,
            id: 5,
            stock: 10,
            descripcion: 'aca va la descripción del producto'
        },
        {
            nombre: 'producto 6',
            precio: 6000,
            id: 6,
            stock: 10,
            descripcion: 'aca va la descripción del producto'
        },
        {
            nombre: 'producto 7',
            precio: 7000,
            id: 7,
            stock: 10,
            descripcion: 'aca va la descripción del producto'
        },
        {
            nombre: 'producto 8',
            precio: 8000,
            id: 8,
            stock: 10,
            descripcion: 'aca va la descripción del producto'
        },
        {
            nombre: 'producto 9',
            precio: 9000,
            id: 9,
            stock: 10,
            descripcion: 'aca va la descripción del producto'
        },
        {
            nombre: 'producto 10',
            precio: 10000,
            id: 10,
            stock: 10,
            descripcion: 'aca va la descripción del producto'
        },
        {
            nombre: 'producto 4',
            precio: 4000,
            id: 4,
            stock: 10,
            descripcion: 'aca va la descripción del producto'
        },
        {
            nombre: 'producto 5',
            precio: 5000,
            id: 5,
            stock: 10,
            descripcion: 'aca va la descripción del producto'
        },
        {
            nombre: 'producto 6',
            precio: 6000,
            id: 6,
            stock: 10,
            descripcion: 'aca va la descripción del producto'
        },
        {
            nombre: 'producto 7',
            precio: 7000,
            id: 7,
            stock: 10,
            descripcion: 'aca va la descripción del producto'
        },
        {
            nombre: 'producto 8',
            precio: 8000,
            id: 8,
            stock: 10,
            descripcion: 'aca va la descripción del producto'
        },
        {
            nombre: 'producto 9',
            precio: 9000,
            id: 9,
            stock: 10,
            descripcion: 'aca va la descripción del producto'
        },
        {
            nombre: 'producto 10',
            precio: 10000,
            id: 10,
            stock: 10,
            descripcion: 'aca va la descripción del producto'
        }
    ]

    const getProductById = (id) => {
        return products.find(producto => producto.id ===Number(id))
    }
    const getProductCartById = (id) => {
        return cart.find(producto => producto.id === Number(id))
    }

const [cart, setCart] = useState ([])

const isInCart = (id) => cart.some(producto => producto.id === Number(id))

const addProductCart = (id, quantity) => {
    if(isInCart(id)) {
        setCart(cart.map(product =>{
            if(product.id == id){
                product.quantity = quantity
            }
            return product
        }))
    }else{
        setCart([...cart, {...getProductById(id),quantity:quantity}])
    }
}
const getTotal = () => {
    let total = 0 
    cart.forEach(product => total += product.precio * product.quantity)
    return total
}
return (
    <Context.Provider value = {{products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}}>
        {children}
    </Context.Provider>
)
}

export const useCustomContext = () => useContext(Context)
export default ContextProvider