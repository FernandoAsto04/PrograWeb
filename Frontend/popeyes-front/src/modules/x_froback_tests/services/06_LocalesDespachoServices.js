const API_URL = 'http://localhost:3002/localdespacho';

export const obtenerLocalesDespachos = async () => {
    try{
        const response = await fetch(API_URL);
        return await response.json();
    } catch(error){
        console.error("Error al obtener localdespachos");
    }
};

//NOTA: VERIFICAR SI ESTE CÓDIGO ES CORRECTO ACORDE AL MÉTODO POST INDICADO EN "INDEX.JS"
export const crearLocalDespacho = async (localdespacho) => {
    try {
        const response = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(localdespacho),
        })
        return await response.json();
    }catch(error){
        console.error("Error al crear localdespacho");
    }
}
