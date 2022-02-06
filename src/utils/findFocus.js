import fetchCart from "./apiHelper";


const findFocus = async (setCart) => {
    const storageFocus = localStorage.getItem("focus");
    if (storageFocus) {
        const cartInfo = await fetchCart(storageFocus);

        setCart(cartInfo);

    } else {
        setCart(null);
    }
};

export default findFocus;