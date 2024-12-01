const API_URL = 'http://localhost:3002/extras';

export const obtenerExtras = async () => {
    try{
        const response = await fetch(API_URL);
        return await response.json();
    } catch(error){
        console.error("Error al obtener extras");
    }
};
