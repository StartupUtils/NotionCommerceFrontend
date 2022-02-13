import modCart from "../../utils/modCart";

function message(message) {
    if (message) {
        return (
            <div className=" text-gray-700 font-normal text-sm mx-3 pb-3 my-3">
                {message}
            </div>
        )
    } else {
        return null
    }
};
const click = (listing) => {
    window.location.href = `/product/${listing.id}:${listing.title}`
}

export default function ItemInCart({ setRefresh, focus, listing }) {
    return (
        <div className=" pr-2 mb-4 md:pr-0 bg-gray-50 hover:bg-gray-200 rounded-md shadow-md">
            <div className='mx-auto w-full flex flew-row'>
                <div className=" w-2/5 md:w-2/12">
                    <img alt={listing.title} className=" border-2 border-b-gray-100 rounded-md" src={listing.image} />
                </div>
                <div className="w-3/5 md:w-7/12 ml-4 pt-1">
                    <p onClick={() => click(listing)} className=" text-sm text-gray-700 font-semibold hover:text-cyan-700">{listing.title}</p>
                    <div className="flex mt-1">
                        <p className=" text-md mr-1 font-thin text-gray-700">Price:</p>
                        <p className="text-md text-gray-700">{listing.price}</p>
                    </div>
                    <div className=" mt-2 md:h-0 md:w-0 md:invisible flex flew-row">
                        <div className=" mr-6 mt-0 md:h-7 rounded-md border-2 border-cyan-600 bg-gray-200 flex justify-center w-20">
                            <svg onClick={() => { modCart(focus, listing.id, "neg", setRefresh) }} className="mr-2 fill-current text-gray-600 hover:text-cyan-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>

                            <p className=' md:pt-0 bg-gray-50 pl-2 pr-2 text-gray-700 text-md'>{listing.quant}</p>

                            <svg onClick={() => { modCart(focus, listing.id, "add", setRefresh) }} className="ml-2 fill-current text-gray-600 hover:text-cyan-600 w-3" viewBox="0 0 448 512">
                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>
                        </div>
                        <div onClick={() => { modCart(focus, listing.id, "remove", setRefresh) }} className=" mt-1 text-red-400 font-semibold text-sm">Remove</div>
                    </div>
                </div>
                <div className=" w-0 invisible md:visible md:w-2/12 md:pl-2 md:pt-2">
                    <div onClick={() => { modCart(focus, listing.id, "remove", setRefresh) }} className="text-red-400 font-semibold text-sm">Remove</div>
                    <p className=' invisible md:visible h-0 md:h-auto mt-1 text-gray-700 text-xs md:mt-8'>Quantity</p>
                    <div className=" mt-0 md:h-7 rounded-md border-2 border-cyan-600 bg-gray-200 flex justify-center w-20">
                        <svg onClick={() => { modCart(focus, listing.id, "neg", setRefresh) }} className="mr-2 fill-current text-gray-600 w-3 hover:text-cyan-600" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>

                        <p className=' md:pt-0 bg-gray-50 pl-2 pr-2 text-gray-700 text-md'>{listing.quant}</p>

                        <svg onClick={() => { modCart(focus, listing.id, "add", setRefresh) }} className="ml-2 fill-current text-gray-600 hover:text-cyan-600 w-3" viewBox="0 0 448 512">
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                    </div>
                </div>
            </div>
            {message(listing.message)}
        </div>
    )
}