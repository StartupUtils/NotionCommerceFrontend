import ItemInCart from './ItemInCart';


export default function CartItems({ setRefresh, focus, listings }) {
    const renderedListings = listings.map((item, i) => {
        return <ItemInCart key={i} setRefresh={setRefresh} focus={focus} listing={item} />
    })
    return (<div>
        <h1 className=' text-gray-700 font-bold text-3xl pb-6'>Items in cart</h1>
        {renderedListings}
    </div>)
};