const API_URL = 'http://localhost:3002/tipodocumentos';

export const obtenerTipoDocumentos = async () => {
    try{
        const response = await fetch(API_URL);
        return await response.json();
    } catch(error){
        console.error("Error al obtener tipodocumentos");
    }
};

export const obtenerTipoDocumento = async (id) => {
  try{
      const response = await fetch(`${API_URL}/${id}`);
      return await response.json();
  } catch(error){
      console.error("Error al obtener tipodocumento");
  }
};

export const crearTipoDocumento = async (tipodocumento) => {
    try {
        const response = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tipodocumento),
        })
        return await response.json();
    }catch(error){
        console.error("Error al crear tipodocumento");
    }
}

export const actualizarTipoDocumento = async (id, tipodocumentoActualizado) =>{
    try{
        const response = await fetch(`${API_URL}/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tipodocumentoActualizado),
        })
        return await response.json();
    }catch(error){
        console.error("Error al editar tipodocumento");
    }
}

export const eliminarTipoDocumento = async (id) => {
    try{
        const response = await fetch(`${API_URL}/${id}`,{
            method: 'DELETE',
        })
        return await response.json();
    }catch(error){
        console.error("Error eliminando tipodocumento")
    }
}
