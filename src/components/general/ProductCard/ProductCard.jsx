import React from "react";
import './ProductCard.css';
import {Link} from 'react-router-dom';

const ProductCard = ({id, titulo, precio, img, type='grid'}) => {
    return (
        <article className={`productCard ${type}`}>
            <img src={img} alt="productos"/>
            <div>
                <h3>{titulo}</h3>
                <p>${precio}</p>
                <Link to={`/${titulo}/${id}`}>Ver detalle</Link>
            </div>
        </article>
    )
}

export default ProductCard;