import { useState, useEffect } from 'react';

export default function MoreInfoSection({ productInfo }) {

    const sellingPoints = productInfo.more_info_section.map((item, i) => {
        if ("bulleted_list_item" in item) {
            return (<ul className=' pl-4 list-disc text-sm space-y-1'><li key={i} className="text-gray-600">{item.bulleted_list_item}</li></ul>)
        } else if ("heading_1" in item) {
            return <h1 className='text-gray-700 font-bold text-3xl pb-2'>{item.heading_1}</h1>
        } else if ("heading_2" in item) {
            return <h2 className='text-gray-700 font-bold text-2xl pb-2'>{item.heading_2}</h2>
        } else if ("heading_3" in item) {
            return <h2 className='text-gray-700 font-bold text-1xl pb-2'>{item.heading_3}</h2>
        } else if ("heading_4" in item) {
            return <h2 className='text-gray-700 font-bold text-xl pb-2'>{item.heading_4}</h2>
        } else if ("heading_5" in item) {
            return <h2 className='text-gray-700 font-bold text-l pb-2'>{item.heading_5}</h2>
        } else if ("paragraph" in item) {
            return <p className='text-gray-700  text-l pb-2'>{item.paragraph}</p>
        } else if ("image" in item) {
            return <img className="w-screen" src={item.image} />
        }
    })
    return (
        <div className=' mr-2 ml-2  mt-0 md:mt-14 mb-20 md:mr-24 md:ml-24'>
            {sellingPoints}
        </div>
    )
};