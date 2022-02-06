import baseUrl from "./baseUrl";


const fetchCart = async (focus) => {
    const response = await fetch(`${baseUrl}/api/customcart/${focus}`);
    if (response.status === 200) {
        const data = await response.json();
        if (data.data.length === 0) {
            return null;
        }
        return data;
    } else {
        return null;
    }
};


export default fetchCart;