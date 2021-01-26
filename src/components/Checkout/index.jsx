import React, {useContext} from 'react';
import {CartContext} from '../../CartContext/index';
import './checkout.css';

const Checkout = () => {
    const {cart} = useContext(CartContext);

    return (         
    <section className="checkout">
    <div className="container">
        <h2>Checkout</h2>
       { cart.data.map(item => {return (
                    <div key={item.id}>
                        <h3>{item.data.title}</h3>
                        <p>{item.data.author}, ${item.data.price} x {item.data.quantity}</p>
                        <p>{item.data.description}</p>
                        <p>Codigo:{item.id}</p> 
                     </div>
                     )})
       }
        <form>
            <input type="text" name="nombre" placeholder="Nombre" />
            <input type="text" name="apellido" placeholder="Apellido" />
            <input type="email" name="email" placeholder="E-mail" />
            <input type="tel" name="tel" placeholder="Teléfono" />
            <button>Pagar</button>
        </form>
    </div>
</section>
)
}

export default Checkout;