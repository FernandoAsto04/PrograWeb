const API_URL = 'http://localhost:3002/extra';

export const crearExtra = async (extra) => {
    try {
        const response = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(extra),
        })
        return await response.json();
    }catch(error){
        console.error("Error al crear extra");
    }
}
