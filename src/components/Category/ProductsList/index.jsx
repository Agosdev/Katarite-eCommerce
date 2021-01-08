import React, {useEffect, useState} from 'react';
import ProductCard from '../../general/ProductCard/ProductCard';
import './ProductsList.css';
import ListIcon from './list.svg';
import GridIcon from './grid.svg';
import {getFirestore} from "../../../firebase"


const ProductsList = ({products}) => {
    const [wayToShow, setWayToShow] = useState(true);
    const [loading, setLoading] = useState(null);
    const [items, setItems] = useState([]);

    useEffect (() => {
        const db = getFirestore();

        const itemCollection = db.collection("items");
        itemCollection.get().then((querySnapshot) => {
            if(!querySnapshot.size === 0) {
                console.log("items");
            }
        setLoading(false);
        setItems(querySnapshot.docs.map(doc => doc.data()));
    });
},[])

    return (
        <section className="products">
            <div>
                {
                    wayToShow ? 
                    <ListIcon onClick={() => setWayToShow(!wayToShow)} title="Ver como lista" /> :
                    <GridIcon onClick={() => setWayToShow(!wayToShow)} title="Ver como grilla" />
                }
            </div>

            <ul className={`products_list ${wayToShow ? 'grid' : 'list'}`}>
                {
                    products.map(item => <li key={item.id}><ProductCard id={item.id} titulo={item.title} author={item.author} image={item.image} precio={item.price} genre={item.genre} description={item.description} type={`${wayToShow ? 'grid' : 'list'}`} /></li>)
                }
            </ul>
        </section>
    )
}

export default ProductsList;