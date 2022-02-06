import baseUrl from "./baseUrl";

const addIt = async (focus, data) => {
    const response = await fetch(`${baseUrl}/api/updateorder/${focus}`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    const res = await response.json()
    return res
}

const createOrder = async (data) => {
    const response = await fetch(`${baseUrl}/api/createorder`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [data] })
    })
    if (response.status === 200) {
        const res = await response.json()
        const orderKey = res.key;
        localStorage.setItem("focus", orderKey)
        return res
    } else {
        return null
    }
}

const putInCart = async (focus, data, setRefesh) => {
    if (focus) {
        const res = await addIt(focus, data);
        setRefesh(res);
    } else {
        const res = await createOrder(data)
        setRefesh(res)
    }
}

export default putInCart;