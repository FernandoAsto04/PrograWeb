const API_URL = 'http://localhost:3002/nugget';

export const crearNugget = async (nugget) => {
    try {
        const response = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nugget),
        })
        return await response.json();
    }catch(error){
        console.error("Error al crear nugget");
    }
}
