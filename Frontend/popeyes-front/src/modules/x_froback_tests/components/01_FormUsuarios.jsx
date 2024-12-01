import { useState, useEffect } from 'react';

export default function FormUsuarios({ agregarUsuario, usuarioEditable, actualizarUsuario }) {
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');

    // Si se pasa una publicación editable, llenamos el formulario con esos datos
    useEffect(() => {
        if (usuarioEditable) {
            setNombres(usuarioEditable.nombres);
            setApellidos(usuarioEditable.apellidos);
            setCorreo(usuarioEditable.correo);
            setContrasenia(usuarioEditable.contrasenia);            
        }
    }, [usuarioEditable]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const usuario = { nombres, apellidos, correo, contrasenia };

        if (usuarioEditable) {
            actualizarUsuario(usuarioEditable.id, usuario);
        } else {
            agregarUsuario(usuario);
        }

        // Limpiar el formulario
        setNombres('');
        setApellidos('');
        setCorreo('');
        setContrasenia('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombres"
                value={nombres}
                onChange={(e) => setNombres(e.target.value)}
            />
            <input
                type="text"
                placeholder="Apellidos"
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
            />
            <input
                type="email" //email
                placeholder="Correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
            />
            <input
                type="password" //password
                placeholder="Contraseña"
                value={contrasenia}
                onChange={(e) => setContrasenia(e.target.value)}
            />
            <button type="submit">
                {usuarioEditable ? 'Actualizar Usuario' : 'Crear Usuario'}
            </button>
        </form>
    );
};
