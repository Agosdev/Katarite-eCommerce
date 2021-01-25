import React,{useContext, useEffect, useState} from 'react';
import './WidgetCart.css';
import {CartContext} from '../../../CartContext/index';

const WidgetCart = ({show, action}) => {
    const {dropCart, cart , deleteItem, changeQty} = useContext(CartContext);

    useEffect(() => {
        console.log(cart)
    }, [])


    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            {
                cart.data.map(item => {return (
                    <div key={item.id}>
                        <h2>{item.data.title}</h2>
                        <p>{item.data.author}</p>
                        <p>{item.data.price}</p>
                        <p>x {item.data.quantity}</p>
                        <p>{item.id}</p>
                     <button onClick={() => changeQty(item, "-")}>-</button>
                    <button onClick={() => changeQty(item, "+")}>+</button>
                    <button onClick={() => {deleteItem(item.id)}}>Eliminar</button>
                    </div>
                )})
            }
            <button onClick={action} style={{padding: 5}}>x</button>
            <button onClick={() => dropCart()}>Vaciar Carrito</button>
        </div>
    )
}

export default WidgetCart;