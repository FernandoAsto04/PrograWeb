import {useEffect, useState} from 'react';
import FormDireccion from '../components/02_FormDirecccion.jsx';
import ListaDireccion from '../components/02_ListaDireccion.jsx';
import {
    obtenerDirecciones,
    obtenerDireccion,
    crearDireccion,
    actualizarDireccion,
    eliminarDireccion,
} from "../services/02_DireccionServices.js"

// Usuarios - Usuario - usuario - nuevoUsuario - usuarioCreado - usuarioActualizado
// Direcciones - Direccion - direccion - nuevaDireccion - direccionCreada - direccionActualizada

export default function DireccionScreen() {
    const [direcciones, setDirecciones] = useState([]); //setPublicaciones
    const [direccionEditable, setDireccionEditable] = useState(null); // setPublicacionEditable

    useEffect(() => {
        const cargarDirecciones = async () => {
            const datos = await obtenerDirecciones();  // Usamos el servicio obtenerPublicaciones
            setDirecciones(datos || []);
        };
        cargarDirecciones();
    }, []);

    const agregarDireccion = async (nuevaDireccion) => {
        const direccionCreada = await crearDireccion(nuevaDireccion);
        if(direccionCreada){
            setDirecciones([...direcciones, direccionCreada]);
        }
    };

    const actualizarUnaDireccion = async (id, direccionActualizada) => {
        const actualizada = await actualizarDireccion(id, direccionActualizada);
        setDirecciones(
            direcciones.map((direccion) =>
                direccion.id === id ? actualizada : direccion
            )
        )
        setDireccionEditable(null);
    };

    const eliminarUnaDireccion = async (id) => {
        await eliminarDireccion(id);
        setDirecciones(direcciones.filter(direccion => direccion.id !== id));
    };

    const prepararEdicion = (direccion) => {
        setDireccionEditable(direccion);
    };

    return (
        <div>
            <h1>• Gestión de Direcciones</h1>
            <FormDireccion
                agregarDireccion={agregarDireccion}
                direccionEditable={direccionEditable} // Pasamos la publicación a editar
                actualizarDireccion={actualizarUnaDireccion}
            />
            <ListaDireccion
                direcciones={direcciones}
                eliminarDireccion={eliminarUnaDireccion}
                prepararEdicion={prepararEdicion} // Pasamos la función para preparar edición
            />
        </div>
    );
}
