import { errorHandler } from "./errorHandler";


export async function getAllWeapons() {
    try {
        const response = await fetch(`${import.meta.env.VITE_PUBLIC_URL_API}/weapons`, {
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

export async function getWeaponById(weaponUuid:string){
    try {
        const response = await fetch(`${import.meta.env.VITE_PUBLIC_URL_API}/weapons/${weaponUuid}`, {
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
