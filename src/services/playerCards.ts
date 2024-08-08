import { errorHandler } from "./errorHandler";

export async function getAllPlayerCards() {
    try {
        const response = await fetch (`${import.meta.env.VITE_PUBLIC_URL_API}/playercards`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const fetchResponse = response.json()
        return fetchResponse
    } catch (error) {
        return errorHandler(error)
    }
}