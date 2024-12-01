const API_URL = 'http://localhost:3002/locales';

export const obtenerLocales = async () => {
    try{
        const response = await fetch(API_URL);
        return await response.json();
    } catch(error){
        console.error("Error al obtener locales");
    }
};

export const crearLocal = async (local) => {
    try {
        const response = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(local),
        })
        return await response.json();
    }catch(error){
        console.error("Error al crear local");
    }
}
