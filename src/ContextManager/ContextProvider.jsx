import React, {createContext, useContext, useState} from 'react'

const Context= createContext()
const ContextProvider = ({children}) => {
    const products =
    [
        {
          img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/234/012/products/_dsf75261-6c253ae9e3d3817b2e16633714404489-640-0.jpg',
          nombre: 'Monstera deliciosa',
          precio: 1200,
          id: 1,
          stock: 20,
          descripcion: 'Planta de interior con hojas grandes y perforadas, de crecimiento vigoroso y fácil cuidado.',
          historia: 'La Monstera deliciosa, también conocida como Costilla de Adán, es originaria de las selvas tropicales de América Central y del Sur. Su nombre "deliciosa" se debe al sabor dulce de sus frutos cuando están maduros. Esta planta se ha vuelto muy popular como planta de interior debido a sus hojas ornamentales y su capacidad de adaptarse a diferentes condiciones de luz y humedad.'
        },
        {
          img: 'https://i0.wp.com/viveroagronomia.com.ar/wp-content/uploads/2021/12/Ficus-pandurata-Vivero-Agronomia-1.png?fit=800%2C800&ssl=1',
          nombre: 'Ficus lyrata',
          precio: 1800,
          id: 2,
          stock: 15,
          descripcion: 'Árbol de hojas grandes y brillantes, ideal para interiores y espacios con luz indirecta.',
          historia: 'El Ficus lyrata, también conocido como Ficus hoja de violín, es originario de las selvas de África Occidental. Sus hojas grandes y brillantes en forma de violín le han dado su nombre popular. Esta planta se ha convertido en una elección popular para la decoración de interiores debido a su apariencia impresionante y su capacidad de adaptarse a diferentes condiciones de luz y humedad.'
        },
        {
          img: 'https://shoptansy.com/cdn/shop/products/74_76f9230c-b7c1-449c-9971-14eca71f9dca.jpg?v=1647111384',
          nombre: 'Cactus de San Pedro',
          precio: 2500,
          id: 3,
          stock: 10,
          descripcion: 'Cactus columnar con espinas y propiedades alucinógenas, apreciado por coleccionistas.',
          historia: 'El Cactus de San Pedro, conocido científicamente como Echinopsis pachanoi, es originario de los Andes de América del Sur. Este cactus sagrado ha sido utilizado durante siglos en rituales ceremoniales y chamanismo. Sus propiedades alucinógenas lo han convertido en una planta de gran importancia cultural y espiritual para diversas comunidades indígenas de la región.'
        },
        {
          img: 'https://images.hola.com/imagenes/decoracion/20230216226399/aloe-vera-cuidados-reproduccion-plantas-interior-exterior-il/1-203-974/cuidar-aloe-vera-05a-a.jpg',
          nombre: 'Aloe vera',
          precio: 500,
          id: 4,
          stock: 30,
          descripcion: 'Planta suculenta con propiedades curativas, utilizada en productos de cuidado personal y remedios naturales.',
          historia: 'El Aloe vera, también conocido como Sábila, es originario del norte de África y la península arábiga. Esta planta ha sido utilizada durante miles de años por sus propiedades medicinales y curativas. El gel transparente contenido en sus hojas se utiliza en una amplia gama de productos para el cuidado de la piel, el cabello y la salud en general.'
        },
        {
          img: 'https://images.hola.com/imagenes/decoracion/20220728214462/cuidados-cactus-zigzag-plantas-interior-mc/1-120-526/cuidados-cactus-zigzag-4-a.jpg',
          nombre: 'Cactus Espina de Pez',
          precio: 1200,
          id: 5,
          stock: 12,
          descripcion: 'Cactus columnar con espinas en forma de gancho, originario de América del Sur.',
          historia: 'El Cactus Espina de Pez, conocido científicamente como Selenicereus anthonyanus, es originario de México. Sus tallos colgantes y las espinas en forma de gancho le dan su nombre popular. Esta planta se ha vuelto muy apreciada por su apariencia única y se cultiva como planta ornamental en todo el mundo.'
        },
        {
          img: 'https://planta.do/cdn/shop/products/CalatheaOrbifoliaNew.jpg?v=1668044443',
          nombre: 'Calathea Orbifolia',
          precio: 1800,
          id: 6,
          stock: 8,
          descripcion: 'Planta de interior con hojas grandes y redondas, conocida por sus patrones de follaje elegantes.',
          historia: 'La Calathea Orbifolia es originaria de las selvas tropicales de Sudamérica. Sus hojas grandes y redondas, con patrones distintivos en tonos verdes y plateados, la convierten en una planta muy apreciada en la decoración de interiores. Esta planta también se caracteriza por su capacidad para mover sus hojas en respuesta a la luz, lo que le da un aspecto dinámico y cautivador.'
        },
        {
          img: 'https://www.parati.com.ar/wp-content/uploads/2021/10/helechonidodeave.jpg',
          nombre: 'Helecho Nido de Ave',
          precio: 1500,
          id: 7,
          stock: 15,
          descripcion: 'Helecho con frondes en forma de nido, atractivo y de fácil cuidado, ideal para colgar o como planta de interior.',
          historia: 'El Helecho Nido de Ave, científicamente conocido como Asplenium nidus, es originario de regiones tropicales de Asia y el Pacífico. Sus frondes grandes y onduladas en forma de nido le han dado su nombre popular. Este helecho es muy apreciado por su aspecto exótico y se ha convertido en una opción popular para la decoración de interiores en todo el mundo.'
        },
        {
          img: 'https://macetaman.com/wp-content/uploads/2021/06/zamioculcas-zamiifolia.jpg',
          nombre: 'Zamioculcas zamiifolia',
          precio: 1000,
          id: 8,
          stock: 25,
          descripcion: 'Planta de interior resistente, con hojas brillantes y suculentas en forma de lanza.',
          historia: 'La Zamioculcas zamiifolia, también conocida como Planta ZZ, es originaria de África Oriental. Esta planta se ha vuelto muy popular como planta de interior debido a su resistencia y capacidad para sobrevivir en condiciones de poca luz y con riego moderado. Sus hojas brillantes y suculentas en forma de lanza la convierten en una opción atractiva para aquellos que buscan una planta de bajo mantenimiento.'
        },
        {
          img: 'https://www.rewilddc.com/cdn/shop/files/138f1b45ba9ccb37b51d642f774251f6_683x1024.jpg?v=1684789094',
          nombre: 'Dracaena marginata',
          precio: 800,
          id: 9,
          stock: 10,
          descripcion: 'Planta de interior con tallos delgados y hojas largas y estrechas en color verde oscuro o rojizo.',
          historia: 'La Dracaena marginata es originaria de Madagascar y se ha vuelto popular como planta de interior en todo el mundo. Sus tallos delgados y flexibles y sus hojas largas y estrechas la convierten en una planta elegante y atractiva. Además, esta planta se ha asociado con la purificación del aire en interiores, lo que la hace aún más deseable.'
        },
        {
          img: 'https://www.jardineriaon.com/wp-content/uploads/2016/07/Haworthia-limifolia-striata-Spider-White.jpg',
          nombre: 'Suculenta Haworthia',
          precio: 700,
          id: 10,
          stock: 20,
          descripcion: 'Suculenta con rosetas de hojas suculentas en forma de ventana, de fácil cuidado y perfecta para escritorios y mesas.',
          historia: 'Las suculentas Haworthia son originarias de África del Sur y se caracterizan por sus rosetas de hojas suculentas en forma de ventana. Estas plantas son populares debido a su aspecto compacto y su capacidad para prosperar en condiciones de poca luz y con riegos esporádicos. Son una opción popular para la decoración de escritorios y mesas.'
        },
        {
          img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/490/163/products/trades1-7c5b7244daaa0b3ac916129042798243-640-0.jpg',
          nombre: 'Tradescantia zebrina',
          precio: 500,
          id: 12,
          stock: 22,
          descripcion: 'Planta colgante con hojas vistosas en tonos verde y púrpura, ideal para colgar o como planta de interior.',
          historia: 'La Tradescantia zebrina, también conocida como Orejas de Ratón, es originaria de México y América Central. Sus hojas vistosas en tonos verde y púrpura la convierten en una planta muy decorativa. Esta planta se ha vuelto popular como planta colgante debido a su crecimiento rápido y su capacidad para crear un efecto cascada.'
        },
        {
          img: 'https://www.parati.com.ar/wp-content/uploads/2022/05/planta-del-dinero-2.jpeg.webp',
          nombre: 'Planta de dinero',
          precio: 600,
          id: 15,
          stock: 30,
          descripcion: 'Planta de interior con hojas redondas y brillantes, asociada con la buena fortuna y la prosperidad.',
          historia: 'La Planta de dinero, científicamente conocida como Pilea peperomioides, es originaria de China. Se cree que esta planta trae buena fortuna y prosperidad a sus propietarios, por lo que se ha ganado su nombre popular. Además de su simbolismo, la Planta de dinero se ha vuelto muy popular por su aspecto inusual y sus hojas redondas y brillantes.'
        },
        {
          img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/164/063/products/sansivierria-trifasciata21-a46296b1569d409a6215878331705098-640-0.jpg',
          nombre: 'Sansevieria Trifasciata',
          precio: 900,
          id: 16,
          stock: 14,
          descripcion: 'Planta resistente de interior con hojas largas y puntiagudas en tonos verde oscuro, también conocida como "lengua de suegra".',
          historia: 'La Sansevieria Trifasciata, también conocida como "lengua de suegra" o "planta serpiente", es originaria de África Occidental. Esta planta se ha vuelto muy popular como planta de interior debido a su resistencia y capacidad para sobrevivir en condiciones de poca luz y con riegos esporádicos. Sus hojas largas y puntiagudas en tonos verde oscuro la convierten en una opción atractiva para la decoración de interiores.'
        },
        {
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Starr_070320-5799_Echinopsis_pachanoi.jpg/640px-Starr_070320-5799_Echinopsis_pachanoi.jpg',
          nombre: 'Cactus de Pedro Luis',
          precio: 1800,
          id: 17,
          stock: 9,
          descripcion: 'Cactus columnar con espinas y forma cilíndrica, originario de México.',
          historia: 'El Cactus de Pedro Luis, científicamente conocido como Echinopsis pachanoi, es originario de los Andes de América del Sur. Este cactus columnar, también conocido como San Pedro, es apreciado por su forma cilíndrica y sus propiedades alucinógenas. Ha sido utilizado durante siglos en rituales y ceremonias por diversas culturas indígenas de la región.'
        },
        {
          img: 'https://cdn0.ecologiaverde.com/es/posts/6/8/6/potus_o_poto_cuidados_686_600_square.jpg',
          nombre: 'Pothos',
          precio: 700,
          id: 18,
          stock: 25,
          descripcion: 'Planta colgante de interior con hojas grandes y brillantes en tonos verde y amarillo, perfecta para colgar en macetas o cestas.',
          historia: 'El Pothos, también conocido como Poto o Epipremnum aureum, es originario de las selvas tropicales del sudeste asiático. Esta planta se ha vuelto muy popular como planta colgante debido a su crecimiento rápido y sus hojas grandes y brillantes en tonos verde y amarillo. Además de su atractivo estético, el Pothos se ha asociado con la purificación del aire en interiores.'
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE29q0O1VFDKx3mfpHXQ8T6-a37uokN2QOyA&usqp=CAU',
          nombre: 'Lirio de la paz',
          precio: 850,
          id: 19,
          stock: 18,
          descripcion: 'Planta de interior con hojas brillantes y flores blancas, apreciada por su resistencia y capacidad de purificar el aire.',
          historia: 'El Lirio de la paz, científicamente conocido como Spathiphyllum, es originario de las selvas tropicales de América Central y del Sur. Esta planta se ha vuelto muy popular como planta de interior debido a sus hojas brillantes y sus flores blancas. Además de su belleza, el Lirio de la paz es conocido por su capacidad de purificar el aire, lo que la convierte en una opción saludable para los espacios interiores.'
        },
        {
          img: 'https://www.jardineriaon.com/wp-content/uploads/2018/11/Echeveria_Agavoides.jpg',
          nombre: 'Suculenta Echeveria',
          precio: 600,
          id: 20,
          stock: 16,
          descripcion: 'Suculenta en forma de roseta con hojas carnosas en diversos colores y texturas, ideal para arreglos y macetas.',
          historia: 'Las suculentas Echeveria son originarias de América Central y del Sur. Estas plantas se caracterizan por sus rosetas de hojas carnosas en diversos colores y texturas. Son muy apreciadas por su aspecto decorativo y se utilizan ampliamente en arreglos y macetas. Además, son plantas resistentes y fáciles de cuidar, lo que las convierte en una opción popular para aquellos que desean iniciarse en el cultivo de suculentas.'
        },
        {
          img: 'https://hmjardins.com.br/tok/wp-content/uploads/2015/06/Hera-Varieagata.jpg',
          nombre: 'Hera Variegada',
          precio: 500,
          id: 21,
          stock: 20,
          descripcion: 'Planta trepadora con hojas en forma de corazón y variaciones de colores, perfecta para cubrir superficies o colgar en cestas.',
          historia: 'La Hera Variegada, científicamente conocida como Hedera helix, es una planta trepadora originaria de Europa y el oeste de Asia. Sus hojas en forma de corazón y sus variaciones de colores, que van desde el verde oscuro hasta el blanco y el amarillo, la convierten en una planta muy decorativa. La Hera Variegada se utiliza ampliamente para cubrir superficies y en cestas colgantes.'
        },
        {
          img: 'https://www.coastalflair.co.nz/cdn/shop/products/20220228_155520.jpg?v=1646090747',
          nombre: 'Peperomia obtusifolia',
          precio: 800,
          id: 22,
          stock: 12,
          descripcion: 'Planta de interior con hojas gruesas y carnosas en forma de corazón, resistente y de bajo mantenimiento.',
          historia: 'La Peperomia obtusifolia es originaria de América Central y del Sur. Sus hojas gruesas y carnosas en forma de corazón le dan un aspecto encantador. Esta planta de interior se ha vuelto muy popular debido a su resistencia y su bajo mantenimiento. Además, la Peperomia obtusifolia es conocida por su capacidad para purificar el aire en interiores.'
        },
        {
          img: 'https://todoparatuhuerta.com/wp-content/uploads/2020/08/Sedum-rubrotinctum-3.jpg',
          nombre: 'Suculenta Sedum Rubrotinctum',
          precio: 1000,
          id: 23,
          stock: 10,
          descripcion: 'Suculenta con hojas en forma de pequeñas almohadillas redondas, que cambian de color según la luz solar.',
          historia: 'La Suculenta Sedum Rubrotinctum, también conocida como Dedos de Oro, es originaria de México. Esta suculenta se caracteriza por sus hojas en forma de pequeñas almohadillas redondas, que cambian de color según la intensidad de la luz solar. La Sedum Rubrotinctum es muy apreciada por su aspecto atractivo y su capacidad para propagarse fácilmente, formando colchones densos de plantas.'
        },
        {
          img: 'https://orquiweb.com/wp-content/uploads/2021/04/Vanda-tricolor.jpg',
          nombre: 'Orquídea Vanda',
          precio: 3000,
          id: 24,
          stock: 6,
          descripcion: 'Orquídea de flores grandes y coloridas, que crece sin necesidad de tierra y se cultiva colgada en macetas o cestas.',
          historia: 'Las Orquídeas Vanda son originarias de Asia y se caracterizan por sus flores grandes y coloridas. Estas orquídeas son epífitas, lo que significa que crecen sin necesidad de tierra y se cultivan colgadas en macetas o cestas. Son muy apreciadas por sus flores exóticas y su capacidad para florecer durante largos períodos de tiempo.'
        },
        {
          img: 'https://trucosdejardineria.com/wp-content/uploads/2018/09/malamadre.jpg',
          nombre: 'Planta araña',
          precio: 750,
          id: 25,
          stock: 15,
          descripcion: 'Planta de interior con hojas largas y delgadas, que se asemejan a las patas de una araña, ideal para colgar en macetas.',
          historia: 'La Planta araña, científicamente conocida como Chlorophytum comosum, es originaria de Sudáfrica. Esta planta se ha vuelto muy popular como planta de interior debido a su aspecto único. Sus hojas largas y delgadas se asemejan a las patas de una araña, lo que le ha dado su nombre popular. Además de su atractivo estético, la Planta araña es resistente y fácil de cuidar.'
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