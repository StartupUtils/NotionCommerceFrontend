export default function ItemInCart() {
    const neg = "mr-2 fill-current text-gray-600 w-3"
    const plus = "ml-2 fill-current text-gray-600 w-3"
    return (
        <div className=" mb-4">
            <div className='mx-auto w-full flex flew-row divide-y-2'>
                <div className="w-2/12">
                    <img className=" border-2 rounded-md" src="https://images.ctfassets.net/bqd0jihtwag0/4JigGhUzIXZPXZtGIl8cnC/9cacf29ce224c6680e4c3deef26c320b/BEB_Muna_Component_Closed.jpg?w=1169" />
                </div>
                <div className="w-7/12 ml-4 pt-1">
                    <p className=" text-sm text-gray-700 font-semibold">This is placeholder content for a product page</p>
                    <div className="flex mt-1">
                        <p className=" text-md mr-1 font-thin text-gray-700">Price:</p>
                        <p className="text-md text-gray-700">$255.55</p>
                    </div>
                </div>
                <div className="w-2/12 pl-2 pt-2">
                    <div className="text-red-400 font-semibold text-sm">Remove</div>
                    <p className=' mt-2 text-gray-700 text-xs md:mt-8'>Quantity</p>
                    <div className=" h-7 mt-0 md:h-7 rounded-md border-2 border-cyan-600 bg-gray-200 flex justify-center w-20">
                        <svg onMouseLeave={() => { console.log('ere') }} onMouseEnter={() => { console.log('ere') }} className={neg} viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>

                        <p className=' md:pt-0 bg-gray-50 pl-2 pr-2 text-gray-700 text-md'>2</p>

                        <svg onMouseLeave={() => { console.log('ere') }} onMouseEnter={() => { console.log('ere') }} className={plus} viewBox="0 0 448 512">
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    )
}