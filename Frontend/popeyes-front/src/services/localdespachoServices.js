const API_URL = 'localhost:3002/localdespacho'

export const obtenerLocalDespacho = async () => {
    try {
        const response = await fetch(API_URL);
        return await response.json();
    } catch (error) {
        console.error("Error al obtener las publicaciones " + error)
    }
};