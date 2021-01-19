import React, {useState, useEffect} from 'react';
import ProductCard from '../../general/ProductCard/ProductCard';
import './FeaturedProducts.css';
import {getFirestore} from '../../../firebase';

const FeaturedProducts = () => {
    const [items, setItems] = useState([]);
    const db = getFirestore();

        const getProductsFromDB = () => {
            db.collection('items').where("outstanding", "==", true).get()
            .then(docs => {
                let arr = [];
                docs.forEach(doc => {
                    arr.push({id: doc.id, data: doc.data()})
                })
                setItems(arr);
            })
            .catch(e => console.log(e));
        }

            useEffect(() => {
                getProductsFromDB();
            })

            return (
                <section className="featuredProducts">
                    <div className="container">
                        {
                            items.length ?
                            <>
                                <h2>Productos destacados</h2>
        
                                <ul>
                                    { items.map((item) => (
                                    <li key={item.id}>
                                        <ProductCard 
                                            id={item.id}
                                            image={item.data.image}
                                            titulo={item.data.title} 
                                            precio={item.data.price} 
                                        />
                                    </li>
                                ))
                            }
                            </ul>
                        </> :
                        <p className="cargando">Cargando items...</p>
                    }
                </div>
            </section>
        )
    }
    export default FeaturedProducts;