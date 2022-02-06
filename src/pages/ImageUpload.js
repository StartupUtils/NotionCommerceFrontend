// import { useEffect, useState } from 'react';
// import createFocus from '../utils/createFocus';
// import NavBar from '../components/NavBar';
// import CartItems from '../components/cart/CartItems';
// import CheckoutDriver from '../components/cart/CheckoutDriver';
// import getStripeUrl from '../utils/getStripeUrl';

export default function Imageupload() {

    return (
        <div className=' bg-cyan-800 h-screen overflow-x-hidden justify-center pt-11 px-8'>
            <div className=" mx-5">
                <form action="/images/upload" enctype="multipart/form-data" method="post">
                    <input name="file" type="file" />
                    <input className=" bg-cyan-100 mx-3 px-8 rounded-md" type="submit" />
                </form>
            </div>
        </div>
    )
}