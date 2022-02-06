import ProductCart from "./ProductCart"

export default function DisplayProducts({ products }) {
    return (
        <div className=" overflow-x-hidden md:max-w-screen-xl m-auto md:flex md:flex-wrap mt-10">
            {products.map((item, i) => {
                return <ProductCart index={i} item={item} />
            })}
        </div>
    )
}