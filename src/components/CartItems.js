import ItemInCart from "./ItemInCart";


export default function CartItems({ cartItems }) {
    console.log(cartItems)
    return (<div>
        <h1 className=' text-gray-700 font-bold text-3xl pb-6'>Items in cart</h1>
        <ItemInCart />
        <ItemInCart />
        <ItemInCart />
    </div>)
}