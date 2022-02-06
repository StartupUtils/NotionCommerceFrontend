import baseUrl from "./baseUrl";

const getStripeUrl = async (orderId, setStripeUrl) => {
    console.log(orderId)
    const res = await fetch(`${baseUrl}/api/checkout/${orderId}`);
    const data = await res.json();
    console.log('jere', data)
    setStripeUrl(data.url)
    return data.url
}

export default getStripeUrl;