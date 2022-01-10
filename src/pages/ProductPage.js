import { useEffect, useState } from 'react';
import ImageScroll from '../components/ImageScroll';
import SellingSection from '../components/SellingSection';
import NavBar from '../components/NavBar';
import MoreInfoSection from '../components/MoreInfoSection';
// const images = [
//     "https://www.itcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-itcosmetics-master-catalog/default/dwd93b5aa0/product-images/Optimized/CIACream/it-cosmetics-moisturizer-confidence-in-a-cream-pack-shot.jpg?sw=465&sfrm=jpg&q=70",
//     "https://www.itcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-itcosmetics-master-catalog/default/dw8fd7b288/product-images/2020/030920_CIAC_Supersize/it-cosmetics-confidence-in-a-cream-texture.jpg?sw=465&sfrm=jpg&q=70",
//     "https://www.itcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-itcosmetics-master-catalog/default/dw5f0ae643/product-images/2020/030920_CIAC_Supersize/it-cosmetics-confidence-in-a-cream-application-aging-skin.jpg?sw=465&sfrm=jpg&q=70",
// ]

// const dummyProductInfo = {
//     "categories": [
//         "somthing"
//     ],
//     "coupons": [

//     ],
//     "display": true,
//     "images": [

//     ],
//     "key": "b202fbe2-2705-4d6b-8f9c-6f2a112ffd4b",
//     "more_info_section": [
//         {
//             "heading_2": "Example heading for More Info Section"
//         },
//         {
//             "paragraph": "Example dummy text for a paragraph in the More Info Section with an embedded image."
//         },
//         {
//             "image": "https://image.shutterstock.com/image-vector/set-different-beauty-cosmetic-products-260nw-1942263496.jpg"
//         }
//     ],
//     "price": 25.55,
//     "selling_section": [
//         {
//             "paragraph": "This is placeholder content for a product page. The divider after the bullet points separates the “feature section” and the “more info section”. The section before the divider is the feature section and will be located next to the product pictures. The section after the divider will be positioned below the product pictures. Product content can include all headings, paragraphs, bullet points, and images (embedded only). Delete all this content and fill it in with your own."
//         },
//         {
//             "bulleted_list_item": "Feature example one."
//         },
//         {
//             "bulleted_list_item": "Feature example two."
//         },
//         {
//             "bulleted_list_item": "Feature example three."
//         }
//     ],
//     "title": "test product. "
// }

export default function ProductPage({ addItem, cart }) {
    const [productInfo, setProductInfo] = useState("loading");
    useEffect(() => {
        let uri = window.location.pathname;

        const getProductInfo = async () => {
            console.log('here')
            const response = await fetch(`/api${uri}`);
            console.log(response)
            const info = await response.json();
            if (response.status === 200) {
                setProductInfo(info);
            }
            else {
                setProductInfo(null)
            }
        };
        getProductInfo();

    }, []);

    if (productInfo === "loading") {
        return (
            <div>
                <NavBar cart={cart} />
                <div>loading</div>
            </div>
        )
    } else if (productInfo) {
        let inCart = false;
        cart.map((item, i) => {
            console.log(item.id, productInfo.key)
            if (item.id === productInfo.key) {
                inCart = true;
            }
        });
        return (
            <div>
                <NavBar cart={cart} />
                <div className='mx-auto w-11/12 md:flex md:flex-row md:h-auto lg:w-4/5 lg:flex lg:flex-row lg:h-auto pt-20'>
                    <div className=' sm:w-full md:w-5/12 lg:w-2/5'>
                        <ImageScroll images={productInfo.images} />
                    </div>
                    <div className='sm:w-full md:w-7/12 lg:w-3/5'>
                        <SellingSection productInfo={productInfo} inCart={inCart} addItem={addItem} />
                    </div>
                </div>
                <MoreInfoSection productInfo={productInfo} />
            </div>
        )
    } else {
        return (
            <div>
                <NavBar cart={cart} />
            </div>
        )
    }

};