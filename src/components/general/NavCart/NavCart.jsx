import React, {useContext} from 'react';
import './NavCart.css';
import CartIcon from './cart.svg';
import {Store} from '../../../store';

const NavCart = ({action}) => {
    const [data, setData] = useContext(Store);

    return (
        <div className="navCart" onClick={action}>
            <img src={CartIcon} width="40"></img>
            <span>{data.cantidad}</span>
        </div>
    )
}

export default NavCart;