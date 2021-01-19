import React,{useContext} from 'react';
import './WidgetCart.css';
import {CartContext} from '../../../CartContext/index';

const WidgetCart = ({show, action}) => {
    const {dropCart,cart, setCart} = useContext(CartContext);

    const deleteItem = (id) => {
       const datoId = cart.data.filter( ident => ident.id !== id)
       setCart({...cart, 
        data: datoId})
    }

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            {
                cart.data.map(item => {return (
                    <>
                    <p>{item.data.title}</p>
                    <p>{item.data.author}</p>
                    <p>{item.data.price}</p>
                    <p>{item.id}</p>
                    <button onClick={() => {deleteItem(item.id)}}>Eliminar</button>
                    </>
                )})
            }
            <button onClick={action} style={{padding: 5}}>x</button>
            <button onClick={() => dropCart()}>Vaciar Carrito</button>
        </div>
    )
}

export default WidgetCart;