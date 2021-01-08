import React, {useEffect, useState} from 'react';
import ProductCard from '../../../general/ProductCard/ProductCard';
import '../ProductsList.css';
import {getFirestore} from "../../../../firebase"
import {Link} from 'react-router-dom';


const FantasiaGenre = () => {
    const [loading, setLoading] = useState(null);
    const [items, setItems] = useState([]);

    useEffect (() => {
        const db = getFirestore();

        const itemCollection = db.collection("items");
        const fantasiaItems = itemCollection.where("genre" === "fantasia");

        fantasiaItems.get().then((querySnapshot) => {
            if(!querySnapshot.size === 0) {
                console.log("items");
            }
        setLoading(false);
        setItems(querySnapshot.docs.map(doc => doc.data()));
    });
},[])

    return (
        <section className="products">
            <Link to="/fantasia">
                {
                    items.map(item => <li key={item.id}><ProductCard id={item.id} titulo={item.title} author={item.author} image={item.image} precio={item.price} genre={item.genre} description={item.description}/></li>)
                }</Link>
        </section>
    )
}

export default FantasiaGenre;