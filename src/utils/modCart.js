import baseUrl from "./baseUrl";

const modCart = async (orderKey, productKey, action, setRefesh) => {
    await fetch(`${baseUrl}/api/modcart`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            order_key: orderKey,
            product_key: productKey,
            command: action
        })
    });
    setRefesh(Date.now())
}

export default modCart;