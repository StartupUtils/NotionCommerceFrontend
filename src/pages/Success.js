import NavBar from '../components/NavBar';
import { useEffect } from 'react';


export default function Success({cart}) {
    useEffect(() => {
        localStorage.removeItem("focus")
    }, []);
    return (
        <div>
            <NavBar cart={cart} />
            <div className=" text-center mt-48">
                <h1 className=" text-5xl text-slate-700 font-bold">Order Complete</h1>
                <h1 className=" mt-3 text-2xl text-slate-700 font-semibold">We will send a confirmation email shortly</h1>
                <h1 className=" mt-3 text-4xl text-slate-700 font-bold">Thank You!</h1>
            </div>
        </div>
    );
}