import React from 'react';
import './checkout.css';

const Checkout = () => {

    return (         
    <section className="checkout">
    <div className="container">
        <h2>Checkout</h2>

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