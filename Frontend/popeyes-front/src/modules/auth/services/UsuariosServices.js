const API_URL = 'http://localhost:3002/usuarios';

export const obtenerUsuarios = async () => {
    try{
        const response = await fetch(API_URL);
        return await response.json();
    } catch(error){
        console.error("Error al obtener usuarios");
    }
};

export const obtenerUsuario = async (id) => {
  try{
      const response = await fetch(`${API_URL}/${id}`);
      return await response.json();
  } catch(error){
      console.error("Error al obtener usuario");
  }
};

export const crearUsuario = async (usuario) => {
    try {
        const response = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario),
        })
        return await response.json();
    }catch(error){
        console.error("Error al crear usuario");
    }
}

export const actualizarUsuario = async (id, usuarioActualizado) =>{
    try{
        const response = await fetch(`${API_URL}/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuarioActualizado),
        })
        return await response.json();
    }catch(error){
        console.error("Error al editar usuario");
    }
}

export const eliminarUsuario = async (id) => {
    try{
        const response = await fetch(`${API_URL}/${id}`,{
            method: 'DELETE',
        })
        return await response.json();
    }catch(error){
        console.error("Error eliminando usuario")
    }
}