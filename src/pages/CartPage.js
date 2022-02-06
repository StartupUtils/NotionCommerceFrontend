import { useEffect, useState } from 'react';
import createFocus from '../utils/createFocus';
import NavBar from '../components/NavBar';
import CartItems from '../components/cart/CartItems';
import CheckoutDriver from '../components/cart/CheckoutDriver';
import getStripeUrl from '../utils/getStripeUrl';

export default function CartPage({ setCart, cart, refresh, setRefresh }) {
    const [stripeUrl, setStripeUrl] = useState(null)
    var focus = localStorage.getItem("focus");
    var uri = window.location.pathname;
    var orderKey = null;
    if (!focus) {
        orderKey = uri.replace("/cart/", "").replace("/", "");
    } else {
        orderKey = focus;
    }
    useEffect((createFocusFunc = createFocus) => {
        createFocusFunc(setCart, orderKey)
        const url = getStripeUrl(orderKey, setStripeUrl)
    }, [refresh, orderKey, setCart]);
    if (cart) {
        return (
            <div className=' overflow-x-hidden'>
                <NavBar cart={cart} />
                <div className='mx-auto w-11/12 md:flex md:flex-row md:h-auto lg:w-4/5 lg:flex lg:flex-row lg:h-auto pt-20'>
                    <div className=' sm:w-full md:w-8/12'>
                        <CartItems setRefresh={setRefresh} focus={orderKey} listings={cart.data} />
                    </div>
                    <div className='sm:w-full md:w-4/12 shadow-lg md:ml-3 bg-gray-50 rounded-lg pb-4 mb-5 mt-2 h-fit'>
                        <CheckoutDriver pricing={cart.pricing} url={stripeUrl} />
                    </div>
                </div>
            </div>
        )
    } else {
        return <div>no cart</div>
    }
}