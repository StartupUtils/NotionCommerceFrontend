import { useEffect, useState } from 'react';
import baseUrl from '../utils/baseUrl';


export default function ShowImages() {
    const [images, setImages] = useState([]);
    useEffect(() => {

        const getImages = async () => {
            const response = await fetch(`${baseUrl}/images/fetchall`);
            const info = await response.json();
            if (response.status === 200) {
                setImages(info.data);
            }
            else {
                setImages([])
            }
        };
        getImages();

    }, []);
    function copyToClipboard(text) {
        if (window.clipboardData && window.clipboardData.setData) {
            // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
            return window.clipboardData.setData("Text", text);
    
        }
        else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
            var textarea = document.createElement("textarea");
            textarea.textContent = text;
            textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
            document.body.appendChild(textarea);
            textarea.select();
            try {
                return document.execCommand("copy");  // Security exception may be thrown by some browsers.
            }
            catch (ex) {
                console.warn("Copy to clipboard failed.", ex);
                return prompt("Copy to clipboard: Ctrl+C, Enter", text);
            }
            finally {
                document.body.removeChild(textarea);
            }
        }
    }

    return (
        <div className=' bg-cyan-800 h-screen overflow-x-hidden justify-center pt-11 px-8'>
            <div className="flex flex-wrap mx-5">
                {images.map((item, i) => {
                    return (
                        <div key={i} className=' w-24 border-b-zinc-200 border-2 p-2 m-2'>
                            <img alt={item} src={item} className=' w-24' />
                            <div onClick={() => { copyToClipboard(item) }} className=' text-lg text-cyan-200 hover:text-green-300 text-center mt-2'>copy url</div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}