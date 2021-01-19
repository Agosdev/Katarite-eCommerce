import {react, useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import ProductDetail from './ProductDetail';
import {getFirestore} from '../../firebase';
import './Detail.css';

const Detail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const db = getFirestore();

    const getProduct = () => {
        db.collection('items').doc(id).get()
        .then(doc => {
            if(doc.exists) {
                setProduct({
                    id,
                    data: doc.data()
                });
            }
        })
        .catch(e => console.log(e));

        console.log(product)
    }
    
    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            {
                product  ?
                <div className="container">
                    <ol className="breadcrum">
                        <li>
                        {product.data.title}
                        </li>
                    </ol>
                    
                    <ProductDetail product={product} />
                </div> :
                <p>cargando productos</p>
            }
        </>
    )
}

export default Detail;