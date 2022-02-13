import baseUrl from "./baseUrl";

const getStripeUrl = async (orderId, setStripeUrl) => {
    const res = await fetch(`${baseUrl}/api/checkout/${orderId}`);
    const data = await res.json();
    setStripeUrl(data.url)
    return data.url
}

export default getStripeUrl;