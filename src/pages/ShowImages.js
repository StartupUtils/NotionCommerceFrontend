import { useEffect, useState } from 'react';
import baseUrl from '../utils/baseUrl';


export default function ShowImages() {
    const [images, setImages] = useState([]);
    useEffect(() => {

        const getImages = async () => {
            const response = await fetch(`${baseUrl}/images/fetchall`);
            const info = await response.json();
            if (response.status === 200) {
                console.log(info)
                setImages(info.data);
            }
            else {
                setImages([])
            }
        };
        getImages();

    }, []);
    const copyLink = (text) => {
        var input = document.createElement('textarea');
        input.innerHTML = text;
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand('copy');
        document.body.removeChild(input);
        return result;
    }

    return (
        <div className=' bg-cyan-800 h-screen overflow-x-hidden justify-center pt-11 px-8'>
            <div className="flex flex-wrap mx-5">
                {images.map((item, i) => {
                    console.log(item, i)
                    return (
                        <div key={i} className=' w-24 border-b-zinc-200 border-2 p-2 m-2'>
                            <img src={item} className=' w-24' />
                            <div onClick={() => { copyLink({ item }) }} className=' text-lg text-cyan-200 hover:text-green-300 text-center mt-2'>copy url</div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}