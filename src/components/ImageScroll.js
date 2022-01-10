import { useState } from 'react'

export default function ImageScroll({ images }) {
    // const [imageLi, setImageLi] = useState(images)
    const [focus, setFocus] = useState(0)

    const call = (i) => {
        setFocus(i)
    }
    const imageItems = images.map((item, i) => {
        const color = (i == focus ? "bg-cyan-500" : "bg-gray-200")
        const tailclass = `w-2/12 rounded-md p-1 mr-1 mt-1 ${color}`
        return <img key={i} onClick={() => call(i)} className={tailclass} src={item} />
    })
    return (
        <div>
            <img className="w-screen" src={images[focus]} />
            <div className=" flex flex-wrap items-center mt-1">
                {imageItems}
            </div>
        </div>
    )
};