const API_URL = 'http://localhost:3002/direcciones';

export const obtenerDirecciones = async () => {
    try{
        const response = await fetch(API_URL);
        return await response.json();
    } catch(error){
        console.error("Error al obtener direcciones");
    }
};

export const obtenerDireccion = async (id) => {
  try{
      const response = await fetch(`${API_URL}/${id}`);
      return await response.json();
  } catch(error){
      console.error("Error al obtener direccion");
  }
};

export const crearDireccion = async (direccion) => {
    try {
        const response = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(direccion),
        })
        return await response.json();
    }catch(error){
        console.error("Error al crear direccion");
    }
}

export const actualizarDireccion = async (id, direccionActualizada) =>{
    try{
        const response = await fetch(`${API_URL}/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(direccionActualizada),
        })
        return await response.json();
    }catch(error){
        console.error("Error al editar direccion");
    }
}

export const eliminarDireccion = async (id) => {
    try{
        const response = await fetch(`${API_URL}/${id}`,{
            method: 'DELETE',
        })
        return await response.json();
    }catch(error){
        console.error("Error eliminando direccion")
    }
}
