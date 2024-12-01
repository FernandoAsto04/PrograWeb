const API_URL = 'http://localhost:3002/publicaciones';

export const obtenerPublicaciones = async () => {
    try{
        const response = await fetch(API_URL);
        return await response.json();
    } catch(error){
        console.error("Error al obtener publicaciones");
    }
};

export const crearPublicacion = async (publicacion) => {
    try {
        const response = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(publicacion),
        })
        return await response.json();
    }catch(error){
        console.error("Error al crear publicacion");
    }
}

export const actualizarPublicacion = async (id, publicacionActualizada) =>{
    try{
        const response = await fetch(`${API_URL}/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(publicacionActualizada),
        })
        return await response.json();
    }catch(error){
        console.error("Error al editar publicacion");
    }
}

export const eliminarPublicacion = async (id) => {
    try{
        const response = await fetch(`${API_URL}/${id}`,{
            method: 'DELETE',
        })
        return await response.json();
    }catch(error){
        console.error("Error eliminando publicacion")
    }
}
