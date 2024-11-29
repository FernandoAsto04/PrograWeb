import {useEffect, useState} from 'react';
import PublicacionForm from '../components/X_PublicacionForm.jsx';
import ListaPublicaciones from '../components/X_ListaPublicaciones.jsx';
import {
    actualizarPublicacion,
    crearPublicacion,
    eliminarPublicacion,
    obtenerPublicaciones
} from "../services/X_publicacionesService.js"

export default function X_Prueba_Froba_01() {
    const [publicaciones, setPublicaciones] = useState([]);
    const [publicacionEditable, setPublicacionEditable] = useState(null); // Para editar publicaciones

    useEffect(() => {
        const cargarPublicaciones = async () => {
            const datos = await obtenerPublicaciones();  // Usamos el servicio obtenerPublicaciones
            setPublicaciones(datos || []);
        };
        cargarPublicaciones();
    }, []);

    const agregarPublicacion = async (nuevaPublicacion) => {
        const publicacionCreada = await crearPublicacion(nuevaPublicacion);
        if(publicacionCreada){
            setPublicaciones([...publicaciones, publicacionCreada]);
        }
    };

    const actualizarUnaPublicacion = async (id, publicacionActualizada) => {
        const actualizada = await actualizarPublicacion(id, publicacionActualizada);
        setPublicaciones(
            publicaciones.map((publicacion) =>
                publicacion.id === id ? actualizada : publicacion
            )
        )
        setPublicacionEditable(null);
    };

    const eliminarUnaPublicacion = async (id) => {
        await eliminarPublicacion(id);
        setPublicaciones(publicaciones.filter(publicacion => publicacion.id !== id));
    };

    const prepararEdicion = (publicacion) => {
        setPublicacionEditable(publicacion);
    };

    return (
        <div>
            <h1>Gestión de Publicaciones</h1>
            <PublicacionForm
                agregarPublicacion={agregarPublicacion}
                publicacionEditable={publicacionEditable} // Pasamos la publicación a editar
                actualizarPublicacion={actualizarUnaPublicacion}
            />
            <ListaPublicaciones
                publicaciones={publicaciones}
                eliminarPublicacion={eliminarUnaPublicacion}
                prepararEdicion={prepararEdicion} // Pasamos la función para preparar edición
            />
        </div>
    );
}
