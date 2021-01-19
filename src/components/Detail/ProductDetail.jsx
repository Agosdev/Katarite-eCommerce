import {useState, useContext, useEffect} from 'react';
import './ProductDetail.css';
import {CartContext} from '../../CartContext/index';


const ProductDetail = ({product}) => {
    const [counter, setCounter] = useState(1);
    const {cart, setCart} = useContext(CartContext);

    const resta = () => {
        if(counter === 0) {
            return
        } else {
            setCounter(() => {return counter - 1})
        }
    }

    const suma = () => setCounter(() => {return counter + 1})

    const onAdd = () => {
        console.log(cart)
        setCart({...cart,
            cantidadTotal: cart.cantidadTotal + counter,
            data: [...cart.data, product]
        })

        console.log(cart)
    }

    return (
        <article className="product">
            <div className="foto">
                <img src={product.data.image} alt=""/>
            </div>
            <div className="info">
                <h1 className="title">{product.data.title}</h1>
                <span>{product.data.price}</span>                
                <div className="contador">
                    <button onClick={() => resta()}>-</button>
                    <p>{counter}</p>
                    <button onClick={() => suma()}>+</button>
                </div>
                <button onClick={() => onAdd()} className="btn" >Agregar al carrito</button>
            </div>
        </article>
    )
}
export default ProductDetail;