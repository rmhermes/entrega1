import React, {createContext, useContext, useState} from 'react'

const Context= createContext()
const ContextProvider = ({children}) => {
    const products =
    [
        {
          img: 'https://www.google.com/search?q=Monstera+deliciosa&tbm=isch',
          nombre: 'Monstera deliciosa',
          precio: 1200,
          id: 1,
          stock: 20,
          descripcion: 'Planta de interior con hojas grandes y perforadas, de crecimiento vigoroso y fácil cuidado.'
        },
        {
          img: 'https://www.google.com/search?q=Ficus+lyrata&tbm=isch',
          nombre: 'Ficus lyrata',
          precio: 1800,
          id: 2,
          stock: 15,
          descripcion: 'Árbol de hojas grandes y brillantes, ideal para interiores y espacios con luz indirecta.'
        },
        {
          img: 'https://www.google.com/search?q=Cactus+de+San+Pedro&tbm=isch',
          nombre: 'Cactus de San Pedro',
          precio: 2500,
          id: 3,
          stock: 10,
          descripcion: 'Cactus columnar con espinas y propiedades alucinógenas, apreciado por coleccionistas.'
        },
        {
          img: 'https://www.google.com/search?q=Aloe+vera&tbm=isch',
          nombre: 'Aloe vera',
          precio: 500,
          id: 4,
          stock: 30,
          descripcion: 'Planta suculenta con propiedades curativas, utilizada en productos de cuidado personal y remedios naturales.'
        },
        {
          img: 'https://www.google.com/search?q=Cactus+Espina+de+Pez&tbm=isch',
          nombre: 'Cactus Espina de Pez',
          precio: 1200,
          id: 5,
          stock: 12,
          descripcion: 'Cactus columnar con espinas en forma de gancho, originario de América del Sur.'
        },
        {
          img: 'https://www.google.com/search?q=Calathea+Orbifolia&tbm=isch',
          nombre: 'Calathea Orbifolia',
          precio: 1800,
          id: 6,
          stock: 8,
          descripcion: 'Planta de interior con hojas grandes y redondas, conocida por sus patrones de follaje elegantes.'
        },
        {
          img: 'https://www.google.com/search?q=Helecho+Nido+de+Ave&tbm=isch',
          nombre: 'Helecho Nido de Ave',
          precio: 1500,
          id: 7,
          stock: 15,
          descripcion: 'Helecho con frondes en forma de nido, atractivo y de fácil cuidado, ideal para colgar o como planta de interior.'
        },
        {
          img: 'https://www.google.com/search?q=Zamioculcas+zamiifolia&tbm=isch',
          nombre: 'Zamioculcas zamiifolia',
          precio: 1000,
          id: 8,
          stock: 25,
          descripcion: 'Planta de interior resistente, con hojas brillantes y suculentas en forma de lanza.'
        },
        {
          img: 'https://www.google.com/search?q=Dracaena+marginata&tbm=isch',
          nombre: 'Dracaena marginata',
          precio: 800,
          id: 9,
          stock: 10,
          descripcion: 'Planta de interior con tallos delgados y hojas largas y estrechas en color verde oscuro o rojizo.'
        },
        {
          img: 'https://www.google.com/search?q=Suculenta+Haworthia&tbm=isch',
          nombre: 'Suculenta Haworthia',
          precio: 700,
          id: 10,
          stock: 20,
          descripcion: 'Suculenta con rosetas de hojas suculentas en forma de ventana, de fácil cuidado y perfecta para escritorios y mesas.'
        },
        {
          img: 'https://www.google.com/search?q=Begonia+Rex&tbm=isch',
          nombre: 'Begonia Rex',
          precio: 1200,
          id: 11,
          stock: 18,
          descripcion: 'Planta ornamental con hojas grandes y vistosas en diferentes tonalidades y patrones.'
        },
        {
          img: 'https://www.google.com/search?q=Tradescantia+zebrina&tbm=isch',
          nombre: 'Tradescantia zebrina',
          precio: 500,
          id: 12,
          stock: 22,
          descripcion: 'Planta colgante con hojas vistosas en tonos verde y púrpura, ideal para colgar o como planta de interior.'
        },
        {
          img: 'https://www.google.com/search?q=Suculenta+Sedum+Morganianum&tbm=isch',
          nombre: 'Suculenta Sedum Morganianum',
          precio: 1500,
          id: 13,
          stock: 7,
          descripcion: 'Suculenta colgante conocida como "cola de burro", con hojas carnosas y colgantes en tonos verde azulado.'
        },
        {
          img: 'https://www.google.com/search?q=Orqu%C3%ADdea+Cymbidium&tbm=isch',
          nombre: 'Orquídea Cymbidium',
          precio: 2500,
          id: 14,
          stock: 5,
          descripcion: 'Orquídea con flores grandes y vistosas en diversos colores, apreciada por su duración y elegancia.'
        },
        {
          img: 'https://www.google.com/search?q=Planta+de+dinero&tbm=isch',
          nombre: 'Planta de dinero',
          precio: 600,
          id: 15,
          stock: 30,
          descripcion: 'Planta de interior con hojas redondas y brillantes, asociada con la buena fortuna y la prosperidad.'
        },
        {
          img: 'https://www.google.com/search?q=Sansevieria+Trifasciata&tbm=isch',
          nombre: 'Sansevieria Trifasciata',
          precio: 900,
          id: 16,
          stock: 14,
          descripcion: 'Planta resistente de interior con hojas largas y puntiagudas en tonos verde oscuro, también conocida como "lengua de suegra".'
        },
        {
          img: 'https://www.google.com/search?q=Cactus+de+Pedro+Luis&tbm=isch',
          nombre: 'Cactus de Pedro Luis',
          precio: 1800,
          id: 17,
          stock: 9,
          descripcion: 'Cactus columnar con espinas y forma cilíndrica, originario de México.'
        },
        {
          img: 'https://www.google.com/search?q=Pothos&tbm=isch',
          nombre: 'Pothos',
          precio: 700,
          id: 18,
          stock: 25,
          descripcion: 'Planta colgante de interior con hojas grandes y brillantes en tonos verde y amarillo, perfecta para colgar en macetas o cestas.'
        },
        {
          img: 'https://www.google.com/search?q=Lirio+de+la+paz&tbm=isch',
          nombre: 'Lirio de la paz',
          precio: 850,
          id: 19,
          stock: 18,
          descripcion: 'Planta de interior con hojas brillantes y flores blancas, apreciada por su resistencia y capacidad de purificar el aire.'
        },
        {
          img: 'https://www.jardineriaon.com/wp-content/uploads/2018/11/Echeveria_Agavoides.jpg',
          nombre: 'Suculenta Echeveria',
          precio: 600,
          id: 20,
          stock: 16,
          descripcion: 'Suculenta en forma de roseta con hojas carnosas en diversos colores y texturas, ideal para arreglos y macetas.'
        },
        {
          img: 'https://hmjardins.com.br/tok/wp-content/uploads/2015/06/Hera-Varieagata.jpg',
          nombre: 'Hera Variegada',
          precio: 500,
          id: 21,
          stock: 20,
          descripcion: 'Planta trepadora con hojas en forma de corazón y variaciones de colores, perfecta para cubrir superficies o colgar en cestas.'
        },
        {
          img: 'https://www.coastalflair.co.nz/cdn/shop/products/20220228_155520.jpg?v=1646090747',
          nombre: 'Peperomia obtusifolia',
          precio: 800,
          id: 22,
          stock: 12,
          descripcion: 'Planta de interior con hojas gruesas y carnosas en forma de corazón, resistente y de bajo mantenimiento.'
        },
        {
          img: 'https://todoparatuhuerta.com/wp-content/uploads/2020/08/Sedum-rubrotinctum-3.jpg',
          nombre: 'Suculenta Sedum Rubrotinctum',
          precio: 1000,
          id: 23,
          stock: 10,
          descripcion: 'Suculenta con hojas en forma de pequeñas almohadillas redondas, que cambian de color según la luz solar.'
        },
        {
          img: 'https://orquiweb.com/wp-content/uploads/2021/04/Vanda-tricolor.jpg',
          nombre: 'Orquídea Vanda',
          precio: 3000,
          id: 24,
          stock: 6,
          descripcion: 'Orquídea de flores grandes y coloridas, que crece sin necesidad de tierra y se cultiva colgada en macetas o cestas.'
        },
        {
          img: 'https://trucosdejardineria.com/wp-content/uploads/2018/09/malamadre.jpg',
          nombre: 'Planta araña',
          precio: 750,
          id: 25,
          stock: 15,
          descripcion: 'Planta de interior con hojas largas y delgadas, que se asemejan a las patas de una araña, ideal para colgar en macetas.'
        }
      ];

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