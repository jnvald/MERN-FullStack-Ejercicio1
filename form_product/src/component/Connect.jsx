import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';
import FormProduct from './FormProduct';


const Connect = () => {
    const [product, setProducts] = useState([]);
    const [created, setCreated] = useState('');
    // const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            setProducts(res.data);
            console.log(res.data);
        })
        .catch(err => console.log('Erro:', err))
    }, [created])


    return (
        <div>
            <FormProduct setCreated={setCreated} />
            <div>
                {
                    product.map((product, idx) => (
                    <div key={idx}>{product.title}
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Connect
