import {useEffect, useState} from 'react';
import FormUsuarios from '../components/01_FormUsuarios.jsx';
import ListaUsuarios from '../components/01_ListaUsuarios.jsx';
import {
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
} from "../services/01_UsuariosServices.js"

// Usuarios - Usuario - usuario - nuevoUsuario - usuarioCreado - usuarioActualizado

export default function UsuariosScreen() {
    const [usuarios, setUsuarios] = useState([]); //setPublicaciones
    const [usuarioEditable, setUsuarioEditable] = useState(null); // setPublicacionEditable

    useEffect(() => {
        const cargarUsuarios = async () => {
            const datos = await obtenerUsuarios();  // Usamos el servicio obtenerPublicaciones
            setUsuarios(datos || []);
        };
        cargarUsuarios();
    }, []);

    const agregarUsuario = async (nuevoUsuario) => {
        const UsuarioCreado = await crearUsuario(nuevoUsuario);
        if(UsuarioCreado){
            setUsuarios([...usuarios, UsuarioCreado]);
        }
    };

    const actualizarUnUsuario = async (id, usuarioActualizado) => {
        const actualizado = await actualizarUsuario(id, usuarioActualizado);
        setUsuarios(
            usuarios.map((usuario) =>
                usuario.id === id ? actualizado : usuario
            )
        )
        setUsuarioEditable(null);
    };

    const eliminarUnUsuario = async (id) => {
        await eliminarUsuario(id);
        setUsuarios(usuarios.filter(usuario => usuario.id !== id));
    };

    const prepararEdicion = (usuario) => {
        setUsuarioEditable(usuario);
    };

    return (
        <div>
            <h1>• Gestión de Usuarios</h1>
            <FormUsuarios
                agregarUsuario={agregarUsuario}
                usuarioEditable={usuarioEditable} // Pasamos la publicación a editar
                actualizarUsuario={actualizarUnUsuario}
            />
            <ListaUsuarios
                usuarios={usuarios}
                eliminarUsuario={eliminarUnUsuario}
                prepararEdicion={prepararEdicion} // Pasamos la función para preparar edición
            />
        </div>
    );
}
