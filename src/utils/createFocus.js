import fetchCart from "./apiHelper";

const createFocus = async (setCart, focus) => {
    const focusData = await fetchCart(focus);

    if (focusData) {
        localStorage.setItem("focus", focus)
        setCart(focusData);
    }
};

export default createFocus;