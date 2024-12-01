const API_URL = 'http://localhost:3002/tipodocumento';

export const obtenerTipoDocumentos = async () => {
    try{
        const response = await fetch(API_URL);
        return await response.json();
    } catch(error){
        console.error("Error al obtener tipodocumentos");
    }
};