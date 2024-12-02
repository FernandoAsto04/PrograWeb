const API_URL = 'http://localhost:3002/comboextra';

export const obtenerCombosExtras = async () => {
    try{
        const response = await fetch(API_URL);
        return await response.json();
    } catch(error){
        console.error("Error al obtener los combos_extra");
    }
};


export const crearComboExtra = async (combo) => {
    try {
        const response = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(combo),
        })
    } catch (error) {
        console.error("Error al obtener el ComboExtra");
    }
}