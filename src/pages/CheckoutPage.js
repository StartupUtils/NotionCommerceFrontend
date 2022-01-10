import NavBar from "../components/NavBar";
import CartItems from "../components/CartItems";
import CheckoutDriver from "../components/CheckoutDriver";

export default function CheckoutPage({ cartItems }) {
    console.log(cartItems)
    return (<div>
        <NavBar cart={cartItems} />
        <div className='mx-auto w-11/12 md:flex md:flex-row md:h-auto lg:w-4/5 lg:flex lg:flex-row lg:h-auto pt-20'>
            <div className=' sm:w-full md:w-8/12'>
                <CartItems />
            </div>
            <div className='sm:w-full md:w-4/12'>
                <CheckoutDriver />
            </div>
        </div>
    </div>)
}