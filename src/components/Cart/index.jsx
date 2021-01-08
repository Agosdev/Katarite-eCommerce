import React,{useContext} from 'react';
import {Store} from '../../store';

const Cart = () => {
    const [data, setData] = useContext(Store);

    return (
        <>
            <h1>Tu carrito:</h1>

            {
                data.items.map(item => <h2>{item.title} x{data.cantidad}</h2>)
            }
        </>
    )
}

export default Cart;