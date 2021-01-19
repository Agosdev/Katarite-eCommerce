import {React, useEffect} from "react";
import './ProductCard.css';
import {Link} from 'react-router-dom';

const ProductCard = ({prods, genre_name}) => {
    
    const genero = prods.filter(item => item.data.genre === genre_name)
    
    return (
        <>
        {
           genero.map( item => { return (
                <article className={`productCard`}>
                    <img src={item.data.image} alt="productos"/>
                    <div>
                        <h3>{item.data.title}</h3>
                        <p>${item.data.price}</p>
                        <Link to={`/${item.data.title.replaceAll(' ', '-').toLowerCase()}/${item.id}`}>Ver detalle</Link>
                    </div>
               </article>
           )
        }) 
        }
        </>
    )
}

export default ProductCard;