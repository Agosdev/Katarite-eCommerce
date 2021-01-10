import React, {useEffect, useState} from 'react';
import './ProductsList.css';
import {getFirestore} from "../../../firebase"
import DetailItem from "./DetailItem"


const Genre = () => {
    const [loading, setLoading] = useState(null);
    const [items, setItems] = useState([]);

    useEffect (() => {
        setLoading(true)
        const db = getFirestore();

        const itemCollection = db.collection("items");
        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log("no items");
            }
        setItems(querySnapshot.docs.map(doc => doc.data()));
    })
    .catch((error) => {
        console.log(error, "Lo sentimos, ha ocurrido un error");
      })
      .finally( () => setLoading(false)) 
},[])

    return (
        <>{loading && <p>procesando...</p>}
        <ul>
                {
                    items.length &&
                    items.map((item) => {
                    return (
                    <>
                    <li key={item.id}> 
                    <h2>{item.title} </h2>
                    <img src={item.image}/>
                    </li>
                    <button> Detalle
                    <DetailItem id={item.id} titulo={item.title} author={item.author} image={item.image} precio={item.price} description={item.description}/>
                    </button>
                    </>   )
                })}
        </ul>
        </>
    )
    
}


export default Genre;