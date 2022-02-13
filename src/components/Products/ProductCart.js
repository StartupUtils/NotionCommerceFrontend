export default function ProductCart({ item, index }) {

    return (
        <div className=" bg-gray-100 m-auto md:mx-3  mb-5 w-full md:w-[250px] rounded-lg shadow-lg">
            <img className=" ml-auto mr-auto rounded-tr-lg rounded-tl-lg md:h-[250px]" key={index} src={item.image} />
            <div className=" mx-3 mt-3  font-semibold">
                {item.title}
            </div>
            <div className="flex flex-row mt-4 pb-4">
                <div className=" ml-7 font-medium text-2xl w-6/12">
                    <p>{item.price}</p>
                </div>
                <div className="flex items-center justify-center w-6/12">
                    <a

                        href={`/product/${item.key}:${item.title}`}
                        className="flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-900 px-2"
                    >
                        View
                    </a>
                </div>
            </div>
        </div>
    )
}