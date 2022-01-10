import { useState } from 'react';

export default function AddToCart({ productInfo, inCart, addItem }) {
    const [quantity, setQuantity] = useState(1)
    const [plus, setPlus] = useState("ml-2 fill-current text-gray-600 w-3")
    const [neg, setNeg] = useState("mr-2 fill-current text-gray-600 w-3")

    const highlight = (target, color) => {
        if (target === "plus") {
            setPlus(`ml-2 fill-current text-${color}-600 w-3`)
        }
        else {
            setNeg(`mr-2 fill-current text-${color}-600 w-3`)
        }
    }
    const addToTheCart = () => {
        let data = {
            "id": productInfo.key,
            "quant": quantity,
            "images": productInfo.images,
            "title": productInfo.title,
        };
        // console.log(data)
        addItem(data)
    }
    const incrementQuant = () => {
        const newQuant = quantity + 1
        setQuantity(newQuant)
    }

    const decQuant = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    };

    if (!inCart) {

        return (
            <div className=' rounded-tl-lg pl-6 bg-white border-cyan-600 border-t-2 border-l-2 md:border-none fixed bottom-0 right-0 md:pl-0 md:bg-white md:relative flex md:mt-6 '>
                <div className='pb-2 w-2/5 md:w-24'>
                    <div className='pl-0 h-5 mb-0 md:invisible md:h-0'>
                        <p className='  text-2xl text-gray-600'>$15.55</p>
                    </div>
                    <p className=' invisible md:visible text-gray-700 font-semibold text-xs'>Quantity</p>
                    <div className=" h-10 mt-0 md:h-7 rounded-md border-2 border-cyan-600 bg-gray-200 flex justify-center w-20">
                        <svg onClick={decQuant} onMouseLeave={() => { highlight("neg", "gray") }} onMouseEnter={() => { highlight("neg", "blue") }} className={neg} viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>

                        <p className=' pt-1.5 md:pt-0 bg-gray-50 pl-2 pr-2 text-gray-700 text-md'>{quantity}</p>

                        <svg onClick={incrementQuant} onMouseLeave={() => { highlight("plus", "gray") }} onMouseEnter={() => { highlight("plus", "blue") }} className={plus} viewBox="0 0 448 512">
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                    </div>
                </div>
                <div>
                    <div className=" w-40 ml-4 md:ml-1 md:w-48 mt-2.5 md:mt-1 mb-1 mr-2 md:pt-0 rounded-md shadow">
                        <a
                            onClick={() => addToTheCart()}
                            href="#"
                            className="flex items-center h-16 md:h-10 md:mt-1 justify-center py-2 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-400 md:px-10"
                        >
                            Add to Cart
                        </a>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className=' rounded-tl-lg pl-6 bg-white border-cyan-600 border-t-2 border-l-2 md:border-none fixed bottom-0 right-0 md:pl-0 md:bg-white md:relative flex md:mt-3 '>

                <div className="rounded-md shadow m-3">
                    <a
                        onClick={() => console.log('button')}
                        href="#"
                        className="flex items-center md:mt-1 justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-cyan-600 bg-green-200 hover:bg-green-300 md:px-10"
                    >
                        Continue to Checkout!
                    </a>
                </div>
            </div>)
    }
};