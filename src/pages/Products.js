import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import DisplayProducts from '../components/Products/DisplayProducts';
import baseUrl from '../utils/baseUrl';

export default function Products({ cart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch(`${baseUrl}/api/products`)
            if (response.status === 200) {
                const data = await response.json();
                setProducts(data)
            }
        }
        getProducts()
    }, []);


    return (
        <div>
            <NavBar cart={cart} />
            <DisplayProducts products={products} />
        </div>
    )
}