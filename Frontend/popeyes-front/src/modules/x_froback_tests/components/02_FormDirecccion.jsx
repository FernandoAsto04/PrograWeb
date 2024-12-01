import { useState, useEffect } from 'react';

export default function FormUsuarios({ agregarDireccion, direccionEditable, actualizarDireccion }) {
    const [nombre, setNombre] = useState('');

    // Si se pasa una publicación editable, llenamos el formulario con esos datos
    useEffect(() => {
        if (direccionEditable) {
            setNombre(direccionEditable.nombre);
        }
    }, [direccionEditable]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const direccion = { nombre };

        if (direccionEditable) {
            actualizarDireccion(direccionEditable.id, direccion);
        } else {
            agregarDireccion(direccion);
        }

        // Limpiar el formulario
        setNombre('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <button type="submit">
                {direccionEditable ? 'Actualizar Direccion' : 'Crear Direccion'}
            </button>
        </form>
    );
};
