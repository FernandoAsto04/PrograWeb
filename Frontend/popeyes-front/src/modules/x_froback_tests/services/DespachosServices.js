const API_URL = 'http://localhost:3002/despacho';

export const obtenerDespacho = async () => {
    try{
        const response = await fetch(API_URL);
        return await response.json();
    } catch(error){
        console.error("Error al obtener despachos");
    }
};

export const crearDespacho = async (despacho) => {
    try {
        const response = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(despacho),
        })
        return await response.json();
    }catch(error){
        console.error("Error al crear despacho");
    }
}
