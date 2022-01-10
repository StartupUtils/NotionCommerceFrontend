import { useState, useEffect } from 'react';
import AddToCart from './AddToCart'

export default function SellingSection({ productInfo, inCart, addItem }) {
    const [description, setDescription] = useState("");
    useEffect(() => {
        for (var i = 0; i < productInfo.selling_section.length; i++) {
            let item = productInfo.selling_section[i];
            if ("paragraph" in item) {
                setDescription(item.paragraph);
            };
        };
    }, []);

    const sellingPoints = productInfo.selling_section.map((item, i) => {
        if ("bulleted_list_item" in item) {
            return <li key={i} className="text-gray-600">{item.bulleted_list_item}</li>
        };
    })
    return (
        <div className=' mt-2 lg:ml-20 md:ml-10'>
            <h1 className=' text-gray-700 font-bold text-3xl pb-2'>
                {productInfo.title}
            </h1>
            <p className=' text-gray-700 text-md'>
                {description}
            </p>
            <div className=" pl-2">
                <h1 className=' pt-4 text-gray-700 font-semibold text-sm pb-1'>
                    Highlights
                </h1>
                <ul className=' pl-4 list-disc text-sm space-y-1'>
                    {sellingPoints}
                </ul>
            </div>
            <div className='mt-5 invisible md:visible'>
                <p className='text-5xl text-gray-600'>$155.55</p>
            </div>
            <AddToCart productInfo={productInfo} inCart={inCart} addItem={addItem} />
        </div>
    )
};