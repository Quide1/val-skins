import { errorHandler } from "./errorHandler";

export  async function getAllSprays(){
    try {
        console.log('object')
        const response = await fetch(`${import.meta.env.VITE_PUBLIC_URL_API}/sprays`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const fetchResponse = await response.json();
        return fetchResponse;
    } catch (error) {
        console.error(error);
        return errorHandler(error);
    }
}