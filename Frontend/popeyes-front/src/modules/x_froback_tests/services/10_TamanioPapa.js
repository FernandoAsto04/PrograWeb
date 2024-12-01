const API_URL = 'http://localhost:3002/tamaniopapa';

export const crearTamanioPapa = async (tamaniopapa) => {
    try {
        const response = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tamaniopapa),
        })
        return await response.json();
    }catch(error){
        console.error("Error al crear tamaniopapa");
    }
}
