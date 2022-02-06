import stripe from '../../stripe.svg';

function PrictListing({ title, price }) {
    let format = "";
    let priceDisplay = price;
    if (price) {
        format = 'ml-6 mt-4 text-gray-900 font-semibold text-right text-sm';
    } else {
        format = 'ml-6 mt-4 text-gray-900 text-right text-xs';
        priceDisplay = "See at checkout";
    }
    return (
        <div className='flex flew-row  w-full mt-3 pr-3'>
            <div className=' w-4/5 '>
                <p className='ml-6 mt-4 text-gray-900 font-semibold'>{title}</p>
            </div>
            <div>
                <p className={format}>{priceDisplay}</p>
            </div>
        </div>
    )
}

export default function CheckoutDriver({ pricing, url }) {
    const renderPricing = pricing.map((item, i) => {
        return <PrictListing key={i} title={item.subject} price={item.price} />
    })
    return (
        <div className="">
            <div className='flex'>
                <p className="mt-1 text-sm ml-6 text-gray-800 italic">Payment secured by</p>
                <img className=' pt-.5 w-16' src={stripe} />
            </div>
            {renderPricing}
            <div className=' mr-6 ml-6 mt-12'>
                <a
                    // onClick={() => addToTheCart()}
                    href={url}
                    className="flex items-center h-16 md:h-10 md:mt-1 justify-center py-2 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-400 md:px-10"
                >
                    Checkout
                </a>
            </div>
        </div>
    )
}