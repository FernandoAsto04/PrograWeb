import {useEffect, useState} from 'react';
import Form_Publicaciones from '../components/FormPublicaciones.jsx';
import Lista_Publicaciones from '../components/ListaPublicaciones.jsx';
import {
    actualizarPublicacion,
    crearPublicacion,
    eliminarPublicacion,
    obtenerPublicaciones
} from "../services/PublicacionesService.js"

export default function PublicacionesScreen() {
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
            <Form_Publicaciones
                agregarPublicacion={agregarPublicacion}
                publicacionEditable={publicacionEditable} // Pasamos la publicación a editar
                actualizarPublicacion={actualizarUnaPublicacion}
            />
            <Lista_Publicaciones
                publicaciones={publicaciones}
                eliminarPublicacion={eliminarUnaPublicacion}
                prepararEdicion={prepararEdicion} // Pasamos la función para preparar edición
            />
        </div>
    );
}
