import React,{useContext} from 'react';
import {CartContext} from '../../CartContext/index';
import './cart.css';
import {Link} from 'react-router-dom';


const Cart = () => {
    const {cartPrice} = useContext(CartContext);

return (
    <section className="cart">
    <h1>Cart</h1>

    {/* <ul>
        {
            items.map(item => (
                <li>
                    <img src={`/products/${item.img}`} alt=""/>
                    <div>
                        <h2>{item.title}</h2>
                    </div>
                </li>
            ))
        }
    </ul> */}

    <div className="final">
        <p>Precio total: {cartPrice}</p>

        <Link to="/checkout">Finalizar compra</Link>
            </div>
        </section>
    )
}


export default Cart;