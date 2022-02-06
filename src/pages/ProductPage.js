import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import ImageScroll from '../components/product/ImageScroll';
import MoreInfoSection from '../components/product/MoreInfoSection';
import SellingSection from '../components/product/SellingSection';
import putInCart from '../utils/putInCart';
import baseUrl from '../utils/baseUrl';

export default function ProductPage({ cart, setRefresh }) {
    const [productInfo, setProductInfo] = useState("loading");
    let focus = localStorage.getItem("focus")

    const manageCart = (data) => {
        putInCart(focus, data, setRefresh)
    }

    useEffect(() => {
        let uri = window.location.pathname;
        const getProductInfo = async () => {
            const response = await fetch(`${baseUrl}/api${uri}`);
            const info = await response.json();
            if (response.status === 200) {
                setProductInfo(info);
            }
            else {
                setProductInfo(null)
            }
        };
        getProductInfo();

    }, []);

    if (productInfo === "loading") {
        return (
            <div>
                <NavBar cart={cart} />
                <div>loading</div>
            </div>
        )
    } else if (productInfo) {
        return (
            <div>
                <NavBar cart={cart} />
                <div className='mx-auto w-11/12 md:flex md:flex-row md:h-auto lg:w-4/5 lg:flex lg:flex-row lg:h-auto pt-20'>
                    <div className=' sm:w-full md:w-5/12 lg:w-2/5'>
                        <ImageScroll images={productInfo.images} />
                    </div>
                    <div className='sm:w-full md:w-7/12 lg:w-3/5'>
                        <SellingSection productInfo={productInfo} cart={cart} manageCart={manageCart} />
                    </div>
                </div>
                <MoreInfoSection productInfo={productInfo} />
            </div>
        )
    } else {
        return (
            <div>
                <NavBar cart={cart} />
            </div>
        )
    }

};