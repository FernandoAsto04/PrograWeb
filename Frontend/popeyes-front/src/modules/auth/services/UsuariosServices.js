const API_URL = 'http://localhost:3002/usuario';

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