const API_URL = 'http://localhost:3002/comboextra';

export const obtenerCombosExtras = async () => {
    try{
        const response = await fetch(API_URL);
        return await response.json();
    } catch(error){
        console.error("Error al obtener combos extra");
    }
};
